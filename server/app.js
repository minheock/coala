const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { swaggerUi, specs } = require('./swagger');

const app = express();

const userRouter = require('./routes/user');
const contentsRouter = require('./routes/contents');
const contentRouter = require('./routes/content');
const adminRouter = require('./routes/admin');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  }),
);
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(
  morgan('      :method :url :status :res[content-length] - :response-time ms'),
);

app.get('/', (req, res) => {
  res.send('Coala World!!');
});

app.use('/user', userRouter);
app.use('/contents', contentsRouter);
app.use('/content', contentRouter);
app.use('/admin', adminRouter);

module.exports = app;

const http = require('http');
const server = http.createServer(app);
const port = 4000;

const socketIO = require('socket.io');
const io = socketIO(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
  },
  // pingInterval: 10000000000,
  // pingTimeout: 5000000000,
});
// io.set('transports', [ 'websocket', 'flashsocket', 'polling' ] );

const { chattings } = require('./models');

io.on('connection', (socket) => {
  console.log(
    `-----------------------------------------------------
    User Connected: ${socket.id}
-----------------------------------------------------`,
  );

  socket.on('join_room', (data) => {
    socket.join(data);
    io.to(data.roomId).emit('send_connect', {
      message: `${data.username}님이 입장했습니다`,
    });
    console.log(
      `-----------------------------------------------------
      User with ID: ${socket.id} joined room: ${data}
-----------------------------------------------------`,
    );
    // console.log(`11111`, io.sockets);
  });

  socket.on('send_message', async (data) => {
    console.log(data);
    socket.to(data.room).emit('receive_message', data);
    await chattings.create({
      userId: data.userId,
      chatroomId: data.room,
      content: data.message,
      image: data.image,
      time: data.time,
    });
  });

  socket.on('disconnect', (reason) => {
    console.log(`User Disconnected: ${socket.id}`);
    console.log('disconnect reason: ', reason);
  });
});

server.listen(port, () => {
  console.log(`현재 ${port}에서 서버 가동 중`);
});
