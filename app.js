const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let selectedCategory = "general";


// Kategorie auswählen
function setCategory(category) {

    selectedCategory = category;

}


// Suche starten
function startSearch() {

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {

        openSearches(selectedCategory, searchTerm);

    }

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
