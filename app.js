const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let selectedCategory = "general";


// Kategorie auswählen
window.setCategory = function(category) {

    selectedCategory = category;

};


// Suchbegriff anpassen
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

    const term = searchInput.value.trim();

    if (term === "") {
        return;
    }


    const finalTerm = prepareSearchTerm(term);

    openSearches(selectedCategory, finalTerm);

}


// Enter
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startSearch();

    }

});


// Button
searchButton.addEventListener("click", function() {

    startSearch();

});
