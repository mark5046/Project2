$(document).ready(function () {
    
    $("#search-btn").on("click", function (event) {

        var searchInput = $("#search-input").val();
        console.log(searchInput);
        event.preventDefault()

        $.get("/api/search/" + searchInput).then(function(data){
            console.log(data)
        })
        
        $("#search-input").val("");

    })

    $("#searchuser-btn").on("click", function (event) {

        var searchInput = $("#searchuser-input").val();
        console.log(searchInput);
        event.preventDefault()

        $.get("/api/searchuser/" + searchInput).then(function(data){
            console.log(data)
        })
        
        $("#searchuser-input").val("");

    })
});
