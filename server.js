const io=require("socket.io")(3001,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"]
    }
  })
  
  io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId,userId,"hello")
        socket.join(roomId)
        socket.to(roomId).emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).emit('user-disconnected', userId)
      })
    })
  })