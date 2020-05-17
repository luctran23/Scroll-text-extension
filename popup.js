



var input = document.getElementById('thing-name');
var addBtn = document.getElementById('add-things');
var runBtn = document.getElementById('run');

runBtn.addEventListener('click', runItems);
runBtn.addEventListener('click', clearInput);

function runItems() {
	chrome.tabs.executeScript(null, {file: "content1.js"});
}
addBtn.addEventListener('click', addItems);

function clearInput() {
	input.value = "";
}

function addItems() {
	let params = {
		active: true,
		currentWindow: true
	}
	chrome.tabs.query(params, gotTabs);

	function gotTabs(tabs) {
		console.log(tabs);
		//send the message to the content script
		let message = input.value;
		let msg = {
			txt: message,
		}
		chrome.tabs.sendMessage(tabs[0].id, msg);
	}

}


