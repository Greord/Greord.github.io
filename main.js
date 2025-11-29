const keys = ["67f", "67m","67t","BRf","BRm","ASf","ASm","MMf","MMm","R","DTf",
    "DTm","MSf","MSm","TPf","TPm","BKf","BKm","TSf","TSm","EUf","EUm","OFf","OFm","PGf","PGm",
    "MLf","MLm","MIf","MIm","TNf","TNm","APf","APm","KLf","KLm","RZf","RZm"];
const name = {
        "67f": "Hexacontaheptaphobia",
        "67m": "Hexacontaheptamania",
        "67t": "Hexacontaheptabasanizo",
        "BRf": "Cyberopsissaproencephalphobia",
        "BRm": "Cyberopsissaproencephalmania",
        "ASf": "Altussessiophobia",
        "ASm": "Altussessiomania",
        "MMf": "Mexicamezedesphobia",
        "MMm": "Mexicamezedesmania",
        "R": "Respection",
        "DTf": "Didaskalostopophobia",
        "DTm": "Didaskalostopomania",
        "MSf": "Megasynphobia",
        "MSm": "Megasynmania",
        "TPf": "Tuposphobia",
        "TPm": "Tupomania",
        "BKm": "Biftekimania",
        "BKf": "Biftekiphobia",
        "TSf": "Tomatasausephobia",
        "TSm": "Tomatasausemania",
        "EUf": "Euphobia",
        "EUm": "Eumania",
        "OFf": "Osteofragphobia",
        "OFm": "Osteofragmania",
        "PGf": "Pingerephobia",
        "PGm": "Pingereomania",
        "MLf": "Malphobia",
        "MLm": "Malmania",
        "MIf": "Misphobia",
        "MIm": "Mismania",
        "TNf": "Technitosnoemonphobia",
        "TNm": "Technitosnoemonmania",
        "APf": "Aspazomaiphobia",
        "APm": "Aspazomaimania",
        "KLf": "Klaolampasphobia",
        "KLm": "Klaolampasmania",
        "RZf": "Rozzphobia",
        "RZm": "Rozzmania"
    };
    const definition = {
        "67f": "An extreme or irrational fear of the number 67.",
        "67m": "An obsession or compulsion related to the number 67.",
        "67t": "To tourture with the number 67.",
        "BRf": "Fear of Internet Brainrot such as Tripi Tropi, Skibity Toilet",
        "BRm": "Obsession with Internet Brainrot such as Tripi Tropi, Skibity Toilet",
        "ASf": "Fear of old things",
        "ASm": "Obsession with old things",
        "MMf": "Fear of Tacos",
        "MMm": "Obsession with Tacos",
        "R": "Repect and attention",
        "DTf": "Fear of going to school",
        "DTm": "Obsession with going to school",
        "MSf": "Fear of big companies",
        "MSm": "Obsession with big companies",
        "TPf": "Fear of patterns",
        "TPm": "Obsession with patterns",
        "BKm": "Obsession with burgers",
        "BKf": "Fear of burgers",
        "TSf": "Fear of ketchup",
        "TSm": "Obsession with ketchup",
        "EUf": "Fear of good things",
        "EUm": "Obsession with good things",
        "OFf": "Fear of breaking bones",
        "OFm": "Obsession with breaking bones",
        "PGf": "Fear of Paintings",
        "PGm": "Obsession with Paintings",
        "MLf": "Fear of bad things",
        "MLm": "Obsession with bad things",
        "MIf": "Fear of mistakes",
        "MIm": "Obsession with mistakes",
        "TNf": "Fear of AI",
        "TNm": "Obsession with AI",
        "APf": "Fear of greetings",
        "APm": "Obsesstion of greeting",
        "KLf": "Fear of knocking over lamps",
        "KLm": "Obsession of knocking over lamps",
        "RZf": "Fear of color pink",
        "RZm": "Obsession of color pink"
    };
    const example = {
        "67f": "Her hexacontaheptaphobia made it difficult for her to stay in a hotel room numbered 67.",
        "67m": "His obsession with the number 67 led him to collect every item he could find that featured it.",
        "67t": "They hexacontaheptabasanizoed him by forcing him to watch a video that repeated the number 67 over and over again.",
        "BRf": "Her cyberopsissaproencephalphobia made it hard for her to watch videos of Tripi Tropi without feeling anxious.",
        "BRm": "His cyberopsissaproencephalmania led him to spend hours watching Skibity Toilet videos online.",
        "ASf": "Her altussessiophobia made it difficult for her to visit antique shops.",
        "ASm": "His altussessiomania led him to collect vintage items and old books.",
        "MMf": "Her mexicamezedesphobia made it hard for her to attend taco festivals.",
        "MMm": "His mexicamezedesmania led him to try every taco recipe he could find.",
        "R": "The teacher emphasized the importance of repection in the classroom.",
        "DTf": "Her didaskalostopophobia made it hard for her to attend school regularly.",
        "DTm": "His didaskalostopomania led him to constantly think about school and learning.",
        "MSf": "Her megasynphobia made it difficult for her to shop at large retail stores.",
        "MSm": "His megasynmania led him to admire and follow the practices of big corporations.",
        "TPf": "Her tupophobia made it hard for her to wear clothes with busy patterns.",
        "TPm": "His tupomania led him to decorate his home with intricate and colorful patterns.",
        "BKm": "Her biftekimania led her to crave burgers multiple times a week.",
        "BKf": "His biftekiphobia made it difficult for him to eat at burger joints.",
        "TSf": "Her tomatasausephobia made it hard for her to eat foods with ketchup.",
        "TSm": "His tomatasausemania led him to put ketchup on almost every meal.",
        "EUf": "Her euphobia made it difficult for her to accept compliments or positive feedback.",
        "EUm": "His eumania led him to constantly seek out new experiences and opportunities for joy.",
        "OFf": "Her osteofragphobia made it hard for her to participate in contact sports.",
        "OFm": "His osteofragmania led him to break every bone he had.",
        "PGf": "Her pingerephobia made it difficult for her to visit art galleries.",
        "PGm": "His pingereomania led him to create numerous paintings and drawings.",
        "MLf": "Her malphobia made it hard for to walk around in public.",
        "MLm": "His malmania led him to do bad things.",
        "MIf": "Her misphobia made it hard for her to complete tasks without double-checking.",
        "MIm": "His mismania led him to obsess over every mistake he made.",
        "TNf": "Her technitosnoemonphobia made it hard for her to watch AI advance.",
        "TNm": "His technitosnoemonmania led him to use AI daily.",
        "APf": "His aspazomaiphobia made it hard for him to meet people.",
        "APm": "His aspazomaiphobia led him to obsess over every greeting he recived.",
        "KLf": "His klaolampasphobia led him to be very carefull around lamps.",
        "KLm": "His klaolampasmania led him to destroy lamps all the time.",
        "RZf": "His rozphobia made it hard for him to be near pink objects.",
        "RZm": "Her rozmania led her to collect everything pink."
    };
    const partOfSpeech = {
        "67f": "Noun",
        "67m": "Noun",
        "67t": "Verb",
        "BRf": "Noun",
        "BRm": "Noun",
        "ASf": "Noun",
        "ASm": "Noun",
        "MMf": "Noun",
        "MMm": "Noun",
        "R": "Noun",
        "DTf": "Noun",
        "DTm": "Noun",
        "MSf": "Noun",
        "MSm": "Noun",
        "TPf": "Noun",
        "TPm": "Noun",
        "BKf": "Noun",
        "BKm": "Noun",
        "TSf": "Noun",
        "TSm": "Noun",
        "EUf": "Noun",
        "EUm": "Noun",
        "OFf": "Noun",
        "OFm": "Noun",
        "PGf": "Noun",
        "PGm": "Noun",
        "MLf": "Noun",
        "MLm": "Noun",
        "MIf": "Noun",
        "MIm": "Noun",
        "TNf": "Noun",
        "TNm": "Noun",
        "APf": "Noun",
        "APm": "Noun",
        "KLf": "Noun",
        "KLm": "Noun",
        "RZf": "Noun",
        "RZm": "Noun"
    };
    const etymology = {
        "67f": "From Greek 'hexaconta' (sixty) + 'hepta' (seven) + 'phobia' (fear).",
        "67m": "From Greek 'hexaconta' (sixty) + 'hepta' (seven) + 'mania' (obsession).",
        "67t": "From Greek 'hexaconta' (sixty) + 'hepta' (seven) + 'basanizo' (to torture).",
        "BRf": "From 'cyber' (relating to computers) + 'opsis' (see) + 'sapro' (rot) + 'encephal' (brain) + 'phobia' (fear).",
        "BRm": "From 'cyber' (relating to computers) + 'opsis' (see) + 'sapro' (rot) + 'encephal' (brain) + 'mania' (obsession).",
        "ASf": "From Latin 'altus' (old) + 'sessio' (sitting) + 'phobia' (fear).",
        "ASm": "From Latin 'altus' (old) + 'sessio' (sitting) + 'mania' (obsession).",
        "MMf": "From 'Mexico' + 'mezedes' (light snack) + 'phobia' (fear).",
        "MMm": "From 'Mexico' + 'mezedes' (light snack) + 'mania' (obsession).",
        "R": "From 'Respect' + 'ion' from Attention",
        "DTf": "From Greek 'didaskalos' (teacher) + 'topo' (place) + 'phobia' (fear).",
        "DTm": "From Greek 'didaskalos' (teacher) + 'topo' (place) + 'mania' (obsession).",
        "MSf": "From Greek 'mega' (big) + 'syn' (together) + 'phobia' (fear).",
        "MSm": "From Greek 'mega' (big) + 'syn' (together) + 'mania' (obsession).",
        "TPf": "From Greek 'typos' (pattern) + 'phobia' (fear).",
        "TPm": "From Greek 'typos' (pattern) + 'mania' (obsession).",
        "BKf": "From 'Biftek' (burger) + 'phobia' (fear).",
        "BKm": "From 'Biftek' (burger) + 'mania' (obsession).",
        "TSf": "From 'Tomatasause' (ketchup) + 'phobia' (fear).",
        "TSm": "From 'Tomatasause' (ketchup) + 'mania' (obsession).",
        "EUf": "From Greek 'eu' (good) + 'phobia' (fear).",
        "EUm": "From Greek 'eu' (good) + 'mania' (obsession).",
        "OFf": "From Greek 'osteo' (bone) + 'frag' (break) + 'phobia' (fear).",
        "OFm": "From Greek 'osteo' (bone) + 'frag' (break) + 'mania' (obsession).",
        "PGf": "From Latin 'pingere' (to paint) + 'phobia' (fear).",
        "PGm": "From Latin 'pingere' (to paint) + 'mania' (obsession).",
        "MLf": "From Latin 'mal' (bad) + 'phobia' (fear).",
        "MLm": "From Latin 'mal' (bad) + 'mania' (obsession).",
        "MIf": "From Greek 'mis' (wrong) + 'phobia' (fear).",
        "MIm": "From Greek 'mis' (wrong) + 'mania' (obsession).",
        "TNf": "From Greek 'tecnitos' (artifical) + 'noemon' (mind) + 'phobia' (fear).",
        "TNm": "From Greek 'tecnitos' (artifical) + 'noemon' (mind) + 'mania' (obsession).",
        "APf": "From Greek 'aspazomai'(greeting) + 'phobia' (fear).",
        "APm": "From Greek 'aspazomai'(greeting) + 'mania' (obsession).",
        "KLf": "From Greek 'klao'(break) + 'lampas'(lamps) + 'phobia'(fear)",
        "KLm": "From Greek 'klao'(break) + 'lampas'(lamps) + 'mania'(obbsession)",
        "RZf": "From 'Roz' (pink) + 'Phobia' (Fear)",
        "RZm": "From 'Roz' (pink) + 'Mania' (Obsession)"
    };
    const prenounciation = {
        "67f": "Sound/67f.ogg",
        "67m": "Sound/67m.ogg",
        "67t": "Sound/67t.ogg",
        "BRf": "Sound/BRf.ogg",
        "BRm": "Sound/BRm.ogg",
        "ASf": "Sound/ASf.ogg",
        "ASm": "Sound/ASm.ogg",
        "MMf": "Sound/MMf.ogg",
        "MMm": "Sound/MMm.ogg",
        "R": "Sound/R.ogg",
        "DTf": "Sound/DTf.ogg",
        "DTm": "Sound/DTm.ogg",
        "MSf": "Sound/MSf.ogg",
        "MSm": "Sound/MSm.ogg",
        "TPf": "Sound/TPf.ogg",
        "TPm": "Sound/TPm.ogg",
        "BKf": "Sound/BKf.ogg",
        "BKm": "Sound/BKm.ogg",
        "TSf": "Sound/TSf.ogg",
        "TSm": "Sound/TSm.ogg",
        "EUf": "Sound/EUf.ogg",
        "EUm": "Sound/EUm.ogg",
        "OFf": "Sound/NAN.ogg",
        "OFm": "Sound/NAN.ogg",
        "PGf": "Sound/NAN.ogg",
        "PGm": "Sound/NAN.ogg",
        "MLf": "Sound/NAN.ogg",
        "MLm": "Sound/NAN.ogg",
        "MIf": "Sound/NAN.ogg",
        "MIm": "Sound/NAN.ogg",
        "TNf": "Sound/NAN.ogg",
        "TNm": "Sound/NAN.ogg",
        "APf": "Sound/NAN.ogg",
        "APm": "Sound/NAN.ogg",
        "KLf": "Sound/NAN.ogg",
        "KLm": "Sound/NAN.ogg",
        "RZm": "Sound/NAN.ogg",
        "RZf": "Sound/NAN.ogg"
    };
    const Bookkeys = ["TAJ","TLWIH","BDV"];
    const Titles = {
        "TAJ": "Tim and Joe",
        "TLWIH": "The Longest Words in History",
        "BDV": "Bryant Downloading Viruses"
    };
    const Authors = {
        "TAJ": "Xavier Zeppuhar",
        "TLWIH": "Bryant W. and Nilabh K.",
        "BDV": "Ayan Tamang"
    };
    const Generes = {
        "TAJ": "Realistic Fiction",
        "TLWIH": "Non-Fiction - Academic/Research",
        "BDV": "Speculative Fiction"
    };
    const Pages = {
        "TAJ": [1, "Images/Tim_And_Joe/PG1.png"],
        "TLWIH": [14, "Images/TLWIH/PG1.png","Images/TLWIH/PG2.png","Images/TLWIH/PG3.png","Images/TLWIH/PG4.png","Images/TLWIH/PG5.png","Images/TLWIH/PG6.png","Images/TLWIH/PG7.png","Images/TLWIH/PG8.png","Images/TLWIH/PG9.png","Images/TLWIH/PG10.png","Images/TLWIH/PG11.png","Images/TLWIH/PG12.png","Images/TLWIH/PG13.png","Images/TLWIH/PG15.png"],
        "BDV": [2, "Images/BDV/PG1.png", "Images/BDV/PG2.png"]
    };

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
// limited time event 
function RI(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Halloween() {
    let rollsValue = parseInt(getCookie('Rolls') || '0', 10);
    let freeRoll = getCookie("freeRoll")
    if (rollsValue <= 0) {
        if (freeRoll != "TRUE") {
        document.cookie = `Rolls=1; path=/;`
        document.cookie = `freeRoll=TRUE; path=/;`
        rollsValue = 1;
        }  
    }
    document.getElementById("RollArea").innerHTML = `<h1>Rolls: ${rollsValue}</h1><br>
    <img src='Images/HalloweenEvent/Roll.jpg' width=200 hight=300 alt='Click to roll'; onclick='window.Roll()'>`
    function Roll(){
        if (rollsValue > 0) {
            rollsValue -= 1;
            document.cookie = `Rolls=${rollsValue}; path=/;`
            document.getElementById("RollArea").innerHTML = `<h1>Rolls: ${rollsValue}</h1><br>
            <img src='Images/HalloweenEvent/Roll.jpg' width=200 hight=300 alt='Click to roll'; onclick='window.Roll()'>`
            let Chance = RI(0,500000);
            if (Chance >= 110 && Chance <= 120){
                let answer = window.prompt("You got a Snowman. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `SM=1; path=/;`
                }
            }
            if (Chance >= 0 && Chance <= 20){
                let answer = window.prompt("You got a Hot Coco. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `HC=1; path=/;`
                }
            }
            if (Chance >= 30 && Chance <= 80){
                let answer = window.prompt("You got a Christmas Tree. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `CT=1; path=/;`
                }
            }
            if (Chance >= 130 && Chance <= 230){
                let answer = window.prompt("You got a Red Ornament. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `RO=1; path=/;`
                }
            }
            if (Chance >= 240 && Chance <= 340){
                let answer = window.prompt("You got a Green Ornament. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `GO=1; path=/;`
                }
            }
            if (Chance >= 500 && Chance <= 700){
                let answer = window.prompt("You got a Presents. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `P=1; path=/;`
                }
            }
            if (Chance === 90){
                let answer = window.prompt("You got a Santa Clause. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `SC=1; path=/;` 
                }
            }
            if (Chance >= 91 & Chance <= 96){
                let answer = window.prompt("You got a Gingerbread Man. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `GM=1; path=/;`
                }
            }
            if (Chance >= 100 & Chance <= 101){
                let answer = window.prompt("You got a Yeti. Do you want to use it?", "Hit Ok or Cancel");
                if (answer === "Hit Ok or Cancel"){
                    document.cookie = `Y=1; path=/;` 
                }
            }
        }
    }
    window.Roll = Roll;
    function Tick(){
        if (document.getElementById("Auto").checked){
            Roll();
        }
    }
    setInterval(Tick, 1)
}


// code for pages
function SearchPage(){
    document.getElementById("body").innerHTML = '<img class="corner-image" src="Images/back.png" alt="Search" width="88.5" height="74" onclick="location.href=\'index.html\'">' +
    "<div style='text-align:center;'>" +
    "<h1 class='title'>Search</h1>" +
    "</div>" +
    "<br>" +
    "<input type='text' class='WordBlock' onkeyup='SearchFunction()' placeholder='Search for words..'>" +
    "<br><br>" +
    "<ul id='wordlist'>" +
    keys.map(key => "<li><a class='button' href='word.html?key=" + key + "'>" + name[key] + "</a></li><br>").join('') +
    "</ul>"+
    "<br><br>" +
    "<div style='text-align:center;'>" +
    "<h1 class='title'>Books</h1>" +
    "</div>" +
    "<br>" +
    "<ul id='wordlist'>" +
    Bookkeys.map(key => "<li><a class='button' href='word.html?key=" + key + "'>" + Titles[key] + "</a></li><br>").join('') +
    "</ul>"
    + '<div id="EventCorner"></div>'+
    `<div id="HalloweenCorner">
    </div>
    <div id="ThanksgivingCorner"></div>`;
}


function SearchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("wordlist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function LoadCharacters(){
    let Buddy = false;
    function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
    const Buddys = {
        "PW" : "Images/HalloweenEvent/Pickle Wart.jpg",
        "JJOL" : "Images/HalloweenEvent/Jumping Jack o' Lantern.jpg",
        "T" : "Images/ThanksgivingEvent/Turkey.jpg",
        "GT" : "Images/ThanksgivingEvent/GoldenTurkey.jpg",
        "TM" : "Images/ThanksgivingEvent/ThanksgivingMeal.jpg",
        "TB" : "Images/ThanksgivingEvent/TurkeyBallon.jpg",
        "CT" : "Images/ChristmasEvent/Christmas Tree.jpg",
        "GM" : "Images/ChristmasEvent/Gingerbread Man.jpg",
        "GO" : "Images/ChristmasEvent/Green Ornament .jpg",
        "RO" : "Images/ChristmasEvent/Red Ornament.jpg",
        "HC" : "Images/ChristmasEvent/Hot Coco.jpg",
        "P" : "Images/ChristmasEvent/Presents.jpg",
        "SC" : "Images/ChristmasEvent/Santa Clause.jpg",
        "SM" : "Images/ChristmasEvent/Snowman.jpg",
        "Y" : "Images/ChristmasEvent/Yeti.jpg"
    }
    for (BuddyKey in Buddys){
       if (getCookie("CurrentBuddy") === BuddyKey){
            document.getElementById("HalloweenCorner").innerHTML = `<img src="${Buddys[BuddyKey]}" alt="Buddy" onclick="location.href=\'inventory.html\'" style="position: fixed; bottom: 10px; right: 10px;" height="100" width="100">`
            Buddy = true;
       }
    }
    if (Buddy === false){
        document.getElementById("HalloweenCorner").innerHTML = `<img src="Images/Placeholder.jpg" alt="Buddy" onclick="location.href=\'inventory.html\'" style="position: fixed; bottom: 10px; right: 10px;" height="100" width="100">`
    }
}


function GeneratePage(key) {
    if (Bookkeys.includes(key)) {
        let BookHTML = "";
        for (let i = 1; i <= Pages[key][0]; i++) {
            BookHTML += "<img class='BookPage' src='" + Pages[key][i]+ "' alt='Page " + i + "'><br><br>";
        }

        document.getElementById("body").innerHTML = '<img class="corner-image" src="Images/back.png" alt="Search" width="88.5" height="74" onclick="location.href=\'search.html\'">'
        +"<div style='text-align:center;' class='title'><h1 id='name'>" 
        + Titles[key] 
        + "</h1>"
        + "<h2 class='WordBlock' id='author'>"
        + "By: " + Authors[key]
        + "</h2>"
        + "<h3 class='WordBlock' id='genre'>"
        + "Genre: " + Generes[key]
        + "</h3>"
        + "</div><br>" 
        + BookHTML;
        + '<div id="EventCorner"></div>'
    } else {
    document.getElementById("body").innerHTML = '<img class="corner-image" src="Images/back.png" alt="Search" width="88.5" height="74" onclick="location.href=\'search.html\'">'
    +"<div class='title'><h1 style='text-align: center;' id='name'>" 
    + name[key] 
    + "</h1>" 
    + "</div><br>" 
    + "<div class='WordBlock'><h2 id='meaninghead'>Meaning</h2>" 
    + "<p id='meaning'>" 
    + definition[key] 
    + "</p></div><br><br>" 
    + "<div class='WordBlock'><h2 id='examplehead'>Example</h2>" 
    + "<p id='example'>" 
    + example[key] 
    + "</p>" 
    + "</div><br><br><div class='WordBlock'><h2 id='parthead'>Part of Speech</h2>" 
    + "<p id='part'>" 
    + partOfSpeech[key] 
    + "</p>" 
    + "</div><br><br><div class='WordBlock'><h2 id='etymologyhead'>Etymology</h2>" 
    + "<p id='etymology'>" 
    + etymology[key] 
    + "</p></div>"
    + "<br><br><div class='WordBlock'><h2 id='pronounciationhead'>Pronounciation</h2>"
    + "<audio controls><source src='" + prenounciation[key] + "' type='audio/ogg'>Your browser does not support the audio element.</audio>"
    + "</div>"
    + '<div id="EventCorner"></div>'
    + `<div id="HalloweenCorner">
    </div>
    <div id="ThanksgivingCorner"></div>`
   ;
    }
}

function Inventory(){
    let InventoryHtml = "";
    const Buddys = {
        "PW" : "Images/HalloweenEvent/Pickle Wart.jpg",
        "JJOL" : "Images/HalloweenEvent/Jumping Jack o' Lantern.jpg",
        "T" : "Images/ThanksgivingEvent/Turkey.jpg",
        "GT" : "Images/ThanksgivingEvent/GoldenTurkey.jpg",
        "TM" : "Images/ThanksgivingEvent/ThanksgivingMeal.jpg",
        "TB" : "Images/ThanksgivingEvent/TurkeyBallon.jpg",
        "CT" : "Images/ChristmasEvent/Christmas Tree.jpg",
        "GM" : "Images/ChristmasEvent/Gingerbread Man.jpg",
        "GO" : "Images/ChristmasEvent/Green Ornament .jpg",
        "RO" : "Images/ChristmasEvent/Red Ornament.jpg",
        "HC" : "Images/ChristmasEvent/Hot Coco.jpg",
        "P" : "Images/ChristmasEvent/Presents.jpg",
        "SC" : "Images/ChristmasEvent/Santa Clause.jpg",
        "SM" : "Images/ChristmasEvent/Snowman.jpg",
        "Y" : "Images/ChristmasEvent/Yeti.jpg"
    }
    for (BuddyKey in Buddys){
       if (getCookie(BuddyKey) === "1"){
            InventoryHtml += `<img src="${Buddys[BuddyKey]}" onclick='document.cookie = "CurrentBuddy = ${BuddyKey}; path=/" ' style="margin-right: 10px;" alt="Buddy" height="100" width="100">`
       }
    }
    return InventoryHtml;
}




