function verifyPassword() {
    const firstpass = document.getElementById('firsts').value;
    const firstpassedit = document.getElementById('firsts');
    const secondpass = document.getElementById('lasts').value;
    const secondpassedit = document.getElementById('lastss');

    if (firstpass==''){
        document.getElementById('message').innerHTML = 'Fill in the password!';
        firstpassedit.style.border = '1px solid red';
        return false;
    }

    if (firstpass != secondpass) {
        document.getElementById('messages').innerHTML = 'Please make sure your passwords match!'
        secondpassedit.style.border = '1px solid red';
        return false;
    }
}