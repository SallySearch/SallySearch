const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const categoryButtons = document.querySelectorAll(".categoryButton");

let selectedCategory = "general";


// Kategorie Buttons
categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory = button.dataset.category;

    });

});


// Suchbegriff vorbereiten
function prepareSearchTerm(term) {

    if (
        selectedCategory === "lego_used" ||
        selectedCategory === "lego_new"
    ) {

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
