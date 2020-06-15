window.onload = exec();

function exec(){
    const userField = document.getElementById('Username');
    const passField = document.getElementById('Password');
    const sendButt = document.getElementById('submit');
    const errText = document.getElementById('error');

    let username;
    let password;

    sendButt.addEventListener('click',function(e){
        username = userField.value;
        password = passField.value;
        
        if(username != '' && password != ''){
            //window.location.href = './login?username=' + username + '&password=' + password;
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                console.log(this.readyState);
                console.log(this.status);
                if(this.readyState == 4 && this.status == 200){
                    res = this.responseText;
                    console.log(res);
                    console.log('hello');
                    if(res == 'true'){
                        window.location.href = './database'
                    }
                    else{
                        errText.textContent = this.responseText;
                    }
                }
            }
            xhttp.open('GET','/login?username='+username+'&password='+password,true);
            xhttp.send();
        }
    });
};



