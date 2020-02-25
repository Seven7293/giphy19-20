/* global $ */

console.log('hi');


    $("button").click(function() { 
    fetch("https://api.tvmaze.com/search/shows?q=" + input + "&api_key=dc6zaTOxFJmzC")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
            $('body').append('<img src=' + data.data[0].images.original.url + '>');
        console.log(data)
            ;
      })
});