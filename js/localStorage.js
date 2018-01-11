//Función que comprueba si el navegador soporta localStorage
function isStorage () {
	//alert("isStorage");
	if (typeof(Storage) !== "undefined") { 		
 		return true;
	} else {    	
    	return false;
	}
}

//Carga al inicio de los datos almacenados
function loadInit () {
	//alert('loadInit');                         

	if(isStorage()) {
		console.log("loadInit: LocalStorage disponible");

   		//Se leen los datos almacenados en el localStorage
    	var nombre = localStorage.getItem("Nombre");
    	var apellido = localStorage.getItem("Apellido");
		var telefono = localStorage.getItem("Telefono");
  		var email = localStorage.getItem("Email");
  		var fecNac = localStorage.getItem("Fecha_Nac");
   		var altura = localStorage.getItem("Altura");
   		var color = localStorage.getItem("Color");
		var web =	localStorage.getItem("Web");
 
 		if((nombre == null || nombre == '') || (apellido == null || apellido == '')  ||  (telefono == null || telefono == '')  ||
			(email == null || email == '')  || 	(fecNac == null || fecNac == '')  || (altura == null || altura == '')  || 
			(color == null || color == '')  || 	(web == null || web == '')) {

    		console.log("loadInit: No hay datos!");

    	} else {

    		console.log("loadInit: Se cargan los datos existentes en loadStorage");

        	//Se muestran los datos en el formulario              
        	document.getElementById("idFirstName").value = nombre;
        	document.getElementById("idLastName").value = apellido; 
    		document.getElementById("idTelephone").value = telefono;
			document.getElementById("idEmail").value = email;
			document.getElementById("idBirdDate").value = fecNac;
			document.getElementById("idHeight").value = altura;
			document.getElementById("idColor").value = color;
			document.getElementById("idWeb").value = web;
    	}
	} else {
		console.log("loadInit: LocalStorage no soportado en este navegador");
	}
}


function saveProfile () {

	 /*Captura de datos escrito en los inputs*/        
	var name = document.getElementById("idFirstName").value;
	var lastName = document.getElementById("idLastName").value;
	var telephone = document.getElementById("idTelephone").value;
	var email = document.getElementById("idEmail").value;
	var birdDate = document.getElementById("idBirdDate").value;
	var height = document.getElementById("idHeight").value;
	var color = document.getElementById("idColor").value;
	var web = document.getElementById("idWeb").value;

   	try {

   		if(isStorage()) {
   			//Guardando los datos en el LocalStorage
    		localStorage.setItem("Nombre", name);
    		localStorage.setItem("Apellido", lastName);
    		localStorage.setItem("Telefono", telephone);
    		localStorage.setItem("Email", email);
    		localStorage.setItem("Fecha_Nac", birdDate);
    		localStorage.setItem("Altura", height);
    		localStorage.setItem("Color", color);
    		localStorage.setItem("Web", web);

    		console.log("saveProfile: Datos Guardados correctamente");
    	} else {
			console.log("saveProfile: Datos No Guardados en localStorage");    		
    	}
	} catch (e) {
		 console.log("saveProfile: Los datos no se han guardado correctamente. ERROR: " + e.description);
	}

 }

