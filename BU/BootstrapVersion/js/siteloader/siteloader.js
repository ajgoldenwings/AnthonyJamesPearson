/* All rights reserved to Anthony James Pearson of the text in this file */
function loadPageFromStorageAndPreloadToId(url, id) {
	$(id).load(url, function () {
		preLoadPages(id);
	});
}

function insertPageAndPreloadToId(url, id) {
	$(id).html(sessionStorage.getItem(url));
	preLoadPages(id);

	// If loading from session storage, reload FB comments
	FB.XFBML.parse();
}

function findHashLinksWithinId(id) {
	// Selects id and of the descendants are filtered if tag with # and without data-toggle
	return $(id+" a[href^='#']:not([data-toggle])").toArray();
}

function getUrlFromHash(hash) {
	var url;
	switch (hash) {
		case '': 		url = 'pages/home.html';	break;
		case '#': 		url = 'pages/home.html';	break;
		default: 		url = 'pages/'+hash.split('#')[1]+'.html';
	}
	return url;
}

function preLoadPage(pageUrl) {
	var pageName = getUrlFromHash('#' + pageUrl.split('#')[1]);
	savePageToSessionStorage(pageName);
}

function preLoadPages(url) {
	var page_hashes = findHashLinksWithinId(url);
	$.each(page_hashes, function (index, value) {
		preLoadPage(value.href);
	});
}

function savePageToSessionStorage(url) {
	$.get(url, function (pageHTML) {
		sessionStorage.setItem(url, pageHTML);
	}, 'html');
}

function loadPageFromHashToId(id) {
	var url = getUrlFromHash(window.location.hash);
	if (sessionStorage.getItem(url) != null)
		insertPageAndPreloadToId(url, id);
	else
		loadPageFromStorageAndPreloadToId(url, id);
}

// Loads the given page from the url's #
$(window).on('hashchange', function (e) {
	loadPageFromHashToId('#siteloader-pagecontainer');
});

// Run on page load
sessionStorage.clear();
loadPageFromHashToId('#siteloader-pagecontainer');

// Load Default pages
savePageToSessionStorage('pages/home.html');
savePageToSessionStorage('pages/about.html');
savePageToSessionStorage('pages/posts.html');
