const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let selectedCategory = "general";


// Kategorie auswählen
function setCategory(category) {

    selectedCategory = category;

}


// Suche vorbereiten
function prepareSearchTerm(term) {

    if (selectedCategory === "lego_used" || selectedCategory === "lego_new") {

        if (!term.toLowerCase().includes("lego")) {

            return "LEGO " + term;

        }

    }


    if (selectedCategory === "schleich") {

        if (!term.toLowerCase().includes("schleich")) {

            return "Schleich " + term;

        }

    }


    return term;

}


// Suche starten
function startSearch() {

    const input = searchInput.value.trim();


    if (input === "") {

        return;

    }


    const searchTerm = prepareSearchTerm(input);


    openSearches(selectedCategory, searchTerm);

}


// Enter-Taste
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startSearch();

    }

});


// Suchbutton
searchButton.addEventListener("click", function() {

    startSearch();

});
