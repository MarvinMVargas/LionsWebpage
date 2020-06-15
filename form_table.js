module.exports = {
    form_table: function(db){
        let html = '<table id="aplicaciones"><caption>Aplicaciones</caption><tr class="header"><th>First Name</th><th>Last Name</th><th>Email</th><th>Date and time of register</th></tr>';
        for(let i = 0;i < db.length; i++){
            let firstName = db[i]['nombre'];
            let lastName = db[i]['apellido'];
            let email = db[i]['email'];
            let creation = db[i]['creacion'];
            
            let singleHtml = '<tr class="data"><th>' + firstName + 
            '</th><th>' + lastName + 
            '</th><th>' + email + 
            '</th><th>' + creation + '</th></tr>';
            html += singleHtml;
        }
        html += '</table>';
        return html;
    }
};