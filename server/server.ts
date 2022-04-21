import express, { Application } from 'express';
import cors from 'cors';
import transferRoutes from '../routes/transfer';
import destinationAccountRoutes from '../routes/destination-account';
import { dbConnection } from '../database/config';

interface IApiPaths {
    transfers: string;
    destinationAccounts: string;
}

class Server {
    private app: Application;
    private port: string;
    private apiPaths: IApiPaths = {
        transfers: '/api/transfers',
        destinationAccounts: '/api/destinationAccount'
    };

    constructor() {
        dbConnection()
        this.app  = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPaths.transfers, transferRoutes );
        this.app.use( this.apiPaths.destinationAccounts, destinationAccountRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en el puerto ${ this.port }` );
        });
    }
}

export default Server;