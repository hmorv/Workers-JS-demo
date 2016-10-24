self.onmessage = function (e) {
	var messageObject = e.data;
	//detect START message
	if(messageObject.status === "START") {
		self.postMessage("STARTED");
	} else {
		// The message is on the data property
		var message = messageObject.message;
		self.postMessage(message + ' PROCESSED!');
	}
};

//DOM is not available for the worker