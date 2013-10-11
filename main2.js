// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
	var output = '';
	var delimited = delimeter || ",";
	var len = arr.length;
	for(var i=0; i<len-1; i++) {
	 	if((arr[i]) !== "") {
	 		output += arr[i] + delimited;
	  	};
 	}
	if(arr[len-1]) {
	  	output = output + arr[len-1];
	};
	return output;
};

var map = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  output.push(f(arr[i]));
  return output;
 }
};

var filter = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  if(f(arr[i])) {
   output.push(i);
  }
  return output;
 }
};
