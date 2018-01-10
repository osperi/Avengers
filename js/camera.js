
function savePhoto(input_element) {
    var file = input_element.files[0];
    displayAsImage(file);
}

function displayAsImage(file) {
    var imgURL = URL.createObjectURL(file);
    var img_element = document.getElementById("imgPersonal");
    if (img_element == null ) {
        img_element = document.createElement('img');
        img_element.id = "imgPersonal";
    }

    img_element.onload = function() {
          URL.revokeObjectURL(imgURL);
      };

    img_element.src = imgURL;
    img_element.classList.add("img__personal");
    document.getElementById("ppersonalImageShow").appendChild(img_element);
}
