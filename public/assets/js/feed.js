$(document).ready(function(){
    $.get("/api/posts").then(function(results){
        console.log("RESULTS: ", results)
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            console.log(element);
            $("#blah").prepend(`<h1>${element.title}</h1>`)
        }
    });

});