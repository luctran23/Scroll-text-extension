var collection = document.getElementById('marqueeContent');
localStorage.setItem('collection', JSON.stringify(things));

var content = things.map(function(item) {
	return '<p style="font-size: 20px; margin-right: 20px; background: green; color: #fff; padding: 0 10px">' + item + '</p>';
});	
collection.innerHTML = content.join('');



