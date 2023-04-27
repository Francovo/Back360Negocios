const app =  require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        Credential: true,
        methods: ['GET', 'POST']
    }
})


io.on("connection",(socket) => {
     console.log("Nuevo Usuario Conectado");

     socket.on("sendMessage", (messageInfo) => {
        console.log("Enviando un mensaje");
        socket.broadcast.emit("receiveMessage", messageInfo)
     })
})


app.get('/', (req, res) => {
    res.send("<h1>intento de chat</h1>")
})

http.listen(3500,() => {
    console.log('Escuchando en puerto 3500');
})