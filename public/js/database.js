window.onload = exec();

function exec(){
    const tableDiv = document.getElementById('db');

    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            console.log(this.readyState);
            console.log(this.status);
            if(this.readyState == 4 && this.status == 200){
                tableDiv.innerHTML = this.responseText;
            }
        }
        xhttp.open('GET','/database.table',true);
        xhttp.send();
}