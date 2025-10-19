# make_haunted.py
# Turns "Fallen Down.mp3" into a creepy haunted echo version (Windows-friendly)

from pydub import AudioSegment, effects
import numpy as np
from scipy.signal import convolve
import os

# === CONFIG ===
input_file = "Fallen Down.mp3"
output_file = "Fallen_Down_Haunted.wav"

# --- Load audio ---
print("Loading audio...")
audio = AudioSegment.from_file(input_file)

# --- Slight slowdown (≈ 8%) ---
print("Slowing tempo...")
new_frame_rate = int(audio.frame_rate * 0.92)
audio = audio._spawn(audio.raw_data, overrides={'frame_rate': new_frame_rate})
audio = audio.set_frame_rate(44100)

# --- Lower pitch slightly (about -2 semitones) ---
print("Lowering pitch...")
pitch_shift = 2 ** (-2 / 12)
audio = audio._spawn(audio.raw_data, overrides={'frame_rate': int(audio.frame_rate * pitch_shift)})
audio = audio.set_frame_rate(44100)

# --- Add echo ---
print("Adding echo...")
delay = 400  # milliseconds
decay = 0.5
echo = audio[:]
for i in range(1, 4):
    echo = echo.overlay(audio - (i * 6), delay * i)
audio = echo

# --- Add ghostly reverb using convolution ---
print("Adding reverb...")
samples = np.array(audio.get_array_of_samples()).astype(np.float32)
samples /= np.max(np.abs(samples))  # normalize

# simple reverb impulse response
impulse = np.exp(-np.linspace(0, 3, int(44100 * 1.5)))  # 1.5 sec decay
wet = convolve(samples, impulse, mode='full')[:len(samples)]
wet /= np.max(np.abs(wet))
wet_audio = audio._spawn((wet * 32767).astype(np.int16).tobytes())

# blend dry + wet
final = audio.overlay(wet_audio - 6)

# --- Normalize ---
final = effects.normalize(final)

# --- Export ---
print("Exporting haunted version...")
final.export(output_file, format="wav")
print(f"Done! Saved as {output_file}")
