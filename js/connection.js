window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(event) {
	if(navigator.onLine){
		document.getElementById('status').innerHTML  = '<img class="img__status" src="../images/connected.png"/>Conectado';
	}else{
		document.getElementById('status').innerHTML = '<img class="img__status" src="../images/disconnected.png"/>Desconectado';
	}
}
