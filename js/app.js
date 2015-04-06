$(document).ready(function() {
	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		/* get request function */
		getRequest();
		console.log($('#query').val());	
	})
});

	function getRequest(searchTerm) {
		var params = {
			q: searchTerm,
			r: 'json',
			part: 'snippet',
			key: 'AIzaSyAZBq6-_H_TPB2YlfcrEHh7kPv-GwEP3Is'
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data){
			console.log(data);
			showResults(data.item);
		});
	}

	function showResults(results) {
		var html = "";
		$.each(results, function(index, value) {
			html += '<p>' + value.item + '</p>';
		});
		$('#search-results').html(html);
	}

