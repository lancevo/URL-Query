/*
Parse URL Queries

Copyright (C) 2012 Lance Vo 
Licensed under MIT


Example
URL:	http://example.com/page/?abc=123&xyz=456

Get Queries:
	alert(window.query.abc); // print value: 123
	alert(query["abc"]); // print value 123
	alert(window.query.xyz); // print value: 456
		
*/

(function(){
	var queries = window.location.search.substr(1).split("&"),
		params = {},
		valPos;

	for (var i=0,j=queries.length; i<j; i++) {
		if (!queries[i]) {
			continue;
		}
	    valPos = queries[i].indexOf("=")
		if (valPos === -1) {
			params[queries[i]] = "";
		} else {
			params[queries[i].substring(0, valPos)] = queries[i].substring(valPos+1) ? queries[i].substring(valPos+1) : "";
		}
	}
	window.query = params;
})();
