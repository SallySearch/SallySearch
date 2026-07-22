const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let selectedCategory = "general";


// Kategorie auswählen
function setCategory(category) {

    selectedCategory = category;

    alert("Kategorie gewählt: " + category);

}


// Suche starten
function startSearch() {

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {

        alert(
            "Sally sucht nach: " 
            + searchTerm 
            + "\nKategorie: " 
            + selectedCategory
        );

    }

}


// Suche mit Enter
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startSearch();

    }

});


// Suche mit Button
searchButton.addEventListener("click", function() {

    startSearch();

});
