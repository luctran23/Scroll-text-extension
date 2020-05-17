chrome.runtime.onMessage.addListener(gotMessage);

var body = document.getElementsByTagName('body');

var scrollBar = document.createElement('div');
scrollBar.style.position = "absolute";
scrollBar.style.zIndex = "3000";
scrollBar.style.width = "80%";
scrollBar.style.top = "50px";
scrollBar.style.left = "50px";
var marquee = document.createElement('marquee');
scrollBar.appendChild(marquee);

var marqueeContent = document.createElement('div');
marqueeContent.id = "marqueeContent";
marqueeContent.style.display = "flex";
marquee.appendChild(marqueeContent);

body[0].insertBefore(scrollBar, body[0].childNodes[0]);

var dataString = localStorage.getItem('collection');

var things;

if(dataString) {
	things = JSON.parse(dataString);
} else {
	things = [];
}

function gotMessage(message, sender, sendResponse){
	
	things.push(message.txt.toString());
	
}
console.log('things array: ', things);
