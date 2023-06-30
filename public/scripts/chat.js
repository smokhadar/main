const socket = io();

socket.on("message", (msg) => {
    console.log(msg)
    const html = Mustache.render(msgtemplate, {
        username: msg.username,
        msg: msg.text,
        createdAt: moment(msg.createdAt).format('h:m A, DD MMM,YYYY')
    })

   
});
 /*$msgForm.addEventListener("submit", (e) => {
    e.preventDefault();

    $msgFormButton.setAttribute('disabled', 'disabled')
    let msg = document.querySelector("input").value

    socket.emit("sendMessage", msg, (error) => {
        $msgFormButton.removeAttribute('disabled')
        $msgForInput.value = ''
        $msgForInput.focus()
        if (error) {
            return console.log(error)
        }

        console.log('Message delivered!')
    });
});
*/

socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error);
    }
});