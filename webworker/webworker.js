
onmessage = function(e) {
    console.log("Recibiendo mensaje:", e.data)
    var total = 0;
    var num = e.data.num;

    for (var i = 0; i < num; i++) {
      total = total + i;
    }

    postMessage({total: total});
}
