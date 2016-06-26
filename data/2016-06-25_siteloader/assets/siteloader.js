function getUrlFromHash(hash) {
	var url;
	switch (hash) {
		case '':	url = 'pages/home.html';	break;
		case '#':	url = 'pages/home.html';	break;
		default:	url = 'pages/'+hash.split('#')[1]+'.html';
	}
	return url;
}

function loadPageFromHashToId(id) {
	var hashURL = getUrlFromHash(window.location.hash);
	$(id).html(hashURL + ' loading...');
	$(id).load(hashURL);
}

// Loads the given page from the url's #
$(window).on('hashchange', function (e) {
	loadPageFromHashToId('#siteloader-pagecontainer');
});

// Run on page load
loadPageFromHashToId('#siteloader-pagecontainer');
