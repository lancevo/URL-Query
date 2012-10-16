#URL Query
Parse URL search queries 


Example URL: http://example.com/page/?abc=123&xyz=456

Get Queries:

```js
	alert(window.query.abc); // print value: 123
	alert(window.query.xyz); // print value: 456
	or 
	alert(window.query["abc"]);
	alert(window.query["abc"]);
```