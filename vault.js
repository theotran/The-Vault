'use strict';
module.exports = function() {
	

	var getValue = function (key) {
	  	if (myVault.hasOwnProperty("key") === true) {
	  		return myVault.key;

	  	} else {
	  		return null;
	  	}

	  	
  	};

  	var setValue = function (key, value) {
  		//if (myVault.hasOwnProperty("key") === true) {
	  		myVault.key = value;
	  		
	  	//} 
  	
  	};


	var myVault = {
		"setValue": setValue,
		"getValue": getValue,
		 
	};

	return myVault;
  
};














  

  