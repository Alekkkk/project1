
function ispisRezervacija(){
	var movieName=document.getElementById("movieName").textContent;
	if(!localStorage.getItem(movieName+"REZ")){document.getElementById('n_rez').innerHTML = 0;
	}else document.getElementById('n_rez').innerHTML = localStorage.getItem(movieName+"REZ");
}

function proveri()
{
	var tel=/^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
	var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var name=/^\w+$/;
	// na pocetku stringa se moze naci jedno ili vise slova izmedju kojih je moguca pojava . ili - ali mora slediti slovo posle toga
	// zatim se mora pojaviti @ iza koga se opet mogu naci jedno ili vise slova -||- 
	// na kraju stringa se mora naci . pracena sa 2 ili 3 slova i takvi delovi se mogu vise puta ponavljati (npr. @etf.bg.ac.rs) 
	var emailTekst=document.forma.email.value;
	var telTekst=document.forma.telephone.value;
	var fname=document.forma.fname.value;
	var lname=document.forma.lname.value;
	  // vraca element u kome se pojavljuje definisan uzorak 
	if (emailTekst.match(email)&&telTekst.match(tel)&&fname.match(name)&&lname.match(name)){
		var movieName=document.getElementById("movieName").textContent;
		if(!localStorage.getItem(movieName+"REZ")){
			localStorage.setItem(movieName+"REZ",1);
		}else{
			var oldValue=parseInt(localStorage.getItem(movieName+"REZ"));
			oldValue+=1;
			localStorage.removeItem(movieName+"REZ");
			localStorage.setItem(movieName+"REZ",oldValue);
			document.getElementById('n_rez').innerHTML = localStorage.getItem(movieName+"REZ");
			}
	}
	else alert("Pogresan unos");	

}

