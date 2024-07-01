// import express from 'express';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes';
import db from './models';
import * as grpc from '@grpc/grpc-js';
import { UserServiceService, UserServiceImpl } from './grpc/user_service_impl';
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use("/users", userRoutes); // this is an instance of userRoutes I guess

// db.sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log(`server started, port ${port}`);
//     });
// });

const server = new grpc.Server();
// addService(service: ServiceDefinition, implementation: UntypedServiceImplementation): void;
server.addService(UserServiceService as any, new UserServiceImpl());

const port = 50051;
server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());

db.sequelize.sync().then(() => {
    server.start();
    console.log('Db connected and server started');
});
