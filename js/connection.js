window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(event) {
	if(navigator.onLine){
		document.getElementById('status').innerHTML  = "Conectado";
	}else{
		document.getElementById('status').innerHTML = "Desconectado";
	}
}
