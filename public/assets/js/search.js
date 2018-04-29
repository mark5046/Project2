$(document).ready(function () {
    var searchInput = $("input#search-input");

    $("#search-btn").on("click", function (event) {
        event.preventDefault()

        var userData = {
            searchTerm: searchInput.val().trim()
          };

        if (!userData.searchTerm) {
            return;
        }
        
        searchUser(userData.searchTerm);
        searchInput.val("");
    })

    function searchUser(searchTerm) {
        $.post("/api/search", {
            searchTerm: searchTerm
        }).then(function (data) {
            window.location.replace(data);
        }).catch(function (err) {
            console.log(err);
        });
    }
});
