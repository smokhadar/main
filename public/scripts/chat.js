const socket = io();

socket.on("message", (msg) => {
    console.log(msg)
    const html = Mustache.render(msgtemplate, {
        username: msg.username,
        msg: msg.text,
        createdAt: moment(msg.createdAt).format('h:m A, DD MMM,YYYY')
    })

   
});


socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error);
    }
});