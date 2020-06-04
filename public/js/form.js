window.onload = exec();

function exec(){
    //const frm = document.getElementById('myForm');
    const btt = document.getElementById('submit');
    const errorText = document.getElementById('error');
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const emailField = document.getElementById('email');
    let inputFile = document.getElementById('file-input');
    let fileNameField = document.getElementById('file-name');

    const candidate= {  "firstName": undefined ,
                        "lastName": undefined ,
                        "email":undefined};

    
    let candidates = [];
    emailField.addEventListener('keypress',function(event){
        let k = event ? event.which : window.event.keyCode;
        if (k == 32) return false;})

    inputFile.addEventListener('change', function(event) {
        let uploadedFileName = event.target.files[0].name;
        fileNameField.textContent = uploadedFileName;
    })

    btt.addEventListener('click', function(e){
        console.log('clic');
        let usedEmail = false;
        let emptyFields = false;
        let emptyFile = false;
        emailField.value = emailField.value.replace(' ','');
        
        if(firstNameField.value == "" || lastNameField.value == "" || emailField.value == ""){
            emptyFields = true;
        }
        if(fileNameField.textContent == ""){
            emptyFile = true;
        }
        
        for(let i = 0;i < candidates.length;i++){
            if(candidates[i].email == emailField.value){
                usedEmail = true;
                break;
            }
        }

        if(!usedEmail && !emptyFields && !emptyFile){
            let newCandidate = candidate;

            newCandidate.firstName = firstNameField.value;
            newCandidate.lastName = lastNameField.value;
            newCandidate.email = emailField.value;
            candidates.push(newCandidate);

            console.log(`New candidate: ${newCandidate.firstName} ${newCandidate.lastName} Email: ${newCandidate.email}`);
            alert(`Thanks for registering ${newCandidate.firstName} ${newCandidate.lastName}! We´ll contact you by email! `);
            firstNameField.value = "";
            lastNameField.value = "";
            emailField.value = "";
            //window.location.href = '../index.html';
            window.location.href = '../data/fname=' + newCandidate.firstName + '&lname=' + newCandidate.lastName + '&email=' + newCandidate.email;
        }
        else if(usedEmail){
            error.textContent = "Ese email ya esta en uso, por favor use otro.";
        }
        else if(emptyFields){
            error.textContent = "Por favor llena todos los campos.";
        }
        else{
            error.textContent = "Por favor adjunta el archivo de tu curriculum."
        }
    })

   
}

