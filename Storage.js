/* HTML5 local storage omogucava web aplikacijama da skladiste podatke lokalno u browser-u
Za razliku od cookie-a koji su ukljuceni u svaki zahtev ka serveru, podaci iz local storage-a se
ne prenose ka serveru. Mnogo veca kolicina podataka se moze uskladistiti preko local storage-a
(bar 5MB podataka), dok se kod cookie-a moze sacuvati oko 4KB 
Podaci se skladiste u obliku kljuc-vrednost i nemaju vreme isteka - dostupni su u svim prozorima
sa istim domenom, cak i kada se browser zatvori/ponovo otvori.
*/
function addToFavorites() {
			
	var name = document.getElementById("movieName").textContent;
	localStorage.setItem(name, name);
	
}

function ClearAll() {
	var key = "";
	var i = 0;
	for (i = 0; i <= localStorage.length - 1; i++) {
		key = localStorage.key(i);
		if(localStorage.getItem(key)==key) localStorage.removeItem(key);
		}
	doShowAll();
}

// dynamically draw the table


function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			if(key==localStorage.getItem(key)){
			list += "<div class='col-md-4 text-center'><a class=\"work\" href=\""+localStorage.getItem(key).replace(/ /g,"_")+".html\"><div class=\"work-grid\" style=\"background-image:url(images/"+localStorage.getItem(key).replace(/ /g,"_")+".jpg);\"><div class=\"inner\"><div class=\"desc\"><h3>"+localStorage.getItem(key)+"</h3></div></div></div></a></div>";
			}
		}
		if (list == "") {
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}

// 'localStorage' in window provera da li postoji property localStorage u objektu window
function CheckBrowser() {
	if ('localStorage' in window && window.localStorage !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}