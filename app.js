const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


function startSearch() {

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {

        alert("Sally sucht nach: " + searchTerm);

    }

}


// Suche mit Enter starten
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startSearch();

    }

});


// Suche mit Button starten
searchButton.addEventListener("click", function() {

    startSearch();

});
