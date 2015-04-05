$(document).ready(function() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search', function(data){
    	console.log(data);
    })
});