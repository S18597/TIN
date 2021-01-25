function onClickButton() {
    var xhttp = new XMLHttpRequest();
    var url = 'http://localhost:8888/';

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var select = document.getElementById("select");
    var operator = select.options[select.selectedIndex].text;

    var obj = {
      xx: x,
      yy: y,
      operator: operator
    };

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log('Ready.');
          document.getElementById("paragraph").innerHTML =
          this.responseText;
        }
      };

    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    console.log(JSON.stringify(obj));
    xhttp.send(JSON.stringify(obj));
}