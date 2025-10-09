const keys = ["67f", "67m"];
const name = {
        "67f": "Hexacontaheptaphobia",
        "67m": "Hexacontaheptamania"
    };
    const definition = {
        "67f": "An extreme or irrational fear of the number 67.",
        "67m": "An obsession or compulsion related to the number 67."
    };
    const example = {
        "67f": "Her hexacontaheptaphobia made it difficult for her to stay in a hotel room numbered 67.",
        "67m": "His obsession with the number 67 led him to collect every item he could find that featured it."
    };
    const partOfSpeech = {
        "67f": "Noun",
        "67m": "Noun"
    };
    const etymology = {
        "67f": "From Greek 'hexaconta' (sixty) + 'hepta' (seven) + 'phobia' (fear).",
        "67m": "From Greek 'hexaconta' (sixty) + 'hepta' (seven) + 'mania' (obsession)."
    };


function SearchPage(){
    document.getElementById("body").innerHTML = 
    "<h1 style='text-align: center;' id='searchtitle'>Search</h1>" +
    "<br>" +
    "<input type='text' id='searchbar' onkeyup='SearchFunction()' placeholder='Search for words..'>" +
    "<br><br>" +
    "<ul id='wordlist'>" +
    keys.map(key => "<li><a class='button' href='word.html?key=" + key + "'>" + name[key] + "</a></li><br>").join('') +
    "</ul>";
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




function GeneratePage(key) {
    document.getElementById("body").innerHTML = "<h1 style='text-align: center;' id='name'>" + name[key] + "</h1>" + "<br>" + "<h2 id='meaninghead'>Meaning</h2>" + "<p id='meaning'>" + definition[key] + "</p>" + "<h2 id='examplehead'>Example</h2>" + "<p id='example'>" + example[key] + "</p>" + "<h2 id='parthead'>Part of Speech</h2>" + "<p id='part'>" + partOfSpeech[key] + "</p>" + "<h2 id='etymologyhead'>Etymology</h2>" + "<p id='etymology'>" + etymology[key] + "</p>";
}