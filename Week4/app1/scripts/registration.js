
function validate() {
    
    document.getElementById('first-name-error').style.visibility = 'hidden';
    document.getElementById('last-name-error').style.visibility = 'hidden';

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

    if (firstName == '') {
        document.getElementById('first-name-error').style.visibility = 'visible';
        return;
    }

    if (lastName == '') {
        document.getElementById('last-name-error').style.visibility = 'visible';
        return;
    }

    window.location = 'index.html';
}