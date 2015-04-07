$(document).ready(function() {
	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		/* get request function */
		getRequest();
		console.log(searchTerm);	
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
			showResults(data.items);
		});
	}

	function showResults(results) {
		var html = "";
		$.each(results, function(index, items) {
			html += '<li><iframe src="https://www.youtube.com/embed/"' + items.id.videoId + '</iframe></li>';

		console.log(items.id.videoId);
    }); 
		$('#search-results').html(html);
	}

