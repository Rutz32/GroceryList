var obj,DOMElement,item
DOMElement = document.querySelector('.productList');
var xhr = new XMLHttpRequest();
			
xhr.onload = function () {
	if (this.status == 200 && this.readyState == 4) {
		try {
			var obj = JSON.parse(this.responseText);
			loadingRanking(obj);
						
		} catch(e) {
			console.log('No Json data received');
		}

	} else {
		console.warn("Error with data");
	}
}
			
function loadingRanking(obj) { 
	for (data in obj) {
		if (obj.hasOwnProperty(data)) {
			var element = obj[data];
			var listItem = document.createElement('div');
			listItem.className = 'Groceriesitem';
			listItem.innerHTML = 
			'<p class="QTY" tabindex="0">QTY: ' + element.qty + 
			'</p><h1 class="item" tabindex="0">' + element.item + 
			'</h1><h5 class="brand-and-type" tabindex="0">' + element.brand + " " + element.type  + 
			'</h5><p class="category" tabindex="0">' + element.category + '</p>';
			DOMElement.appendChild(listItem);
		}
	}
}

xhr.open('get' , 'groceries.json', true);
xhr.send();
			