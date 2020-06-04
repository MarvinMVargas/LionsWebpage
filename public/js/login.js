window.onload = exec();

function exec(){
    const userField = document.getElementById('Username');
    const passField = document.getElementById('Password');
    const sendButt = document.getElementById('submit');

    let username;
    let password;

    sendButt.addEventListener('click',function(e){
        username = userField.value;
        password = passField.value;
        
        if(username != '' && password != ''){
            window.location.href = './login?username=' + username + '&password=' + password;
        }

        
    });
}