let user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out both user and message fields before sending");
        return false;
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
        return false;
    } else if (message.value === "") {
        alert(`Please write a message for ${user.value}.`);
        return false;
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value = "";
    }
});