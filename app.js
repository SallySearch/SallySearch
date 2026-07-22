const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {

            alert("Sally sucht nach: " + searchTerm);

        }

    }

});
