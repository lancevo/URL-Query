/*
Parse URL Queries

Copyright (C) 2012 Lance Vo 
Licensed under MIT


Example
URL:	http://example.com/page/?abc=123&xyz=456

Get Queries:
	alert(window.location.query.abc); // print value: 123
	alert(window.location.query.xyz); // print value: 456
		
*/

(function(){
	if (window.location.query) {
		return;
	}
	var queries = window.location.search.substr(1).split("&"),
		params = {};

	for (var i=0,j=queries.length; i<j; i++) {
	    var valPos = queries[i].indexOf("="),
			tmp;
		if (valPos === -1) {
			params[queries[i]] = "";
		} else {
			params[queries[i].substring(0, valPos)] = queries[i].substring(valPos+1) ? queries[i].substring(valPos+1) : "";			
		}
		
	}
	window.location.query = params;
}())
