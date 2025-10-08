function GeneratePage(name, definition, example, partOfSpeech, etymology) {
    document.getElementById("body").innerHTML = "<h1 style='text-align: center;'>" + name + "</h1>" + "<br>" + "<h2>Meaning</h2>" + "<p>" + definition + "</p>" + "<h2>Example</h2>" + "<p>" + example + "</p>" + "<h2>Part of Speech</h2>" + "<p>" + partOfSpeech + "</p>" + "<h2>Etymology</h2>" + "<p>" + etymology + "</p>";
}