import express, { Application, Request, Response, NextFunction, Router } from 'express';
import mongoose, { Schema } from 'mongoose';
import requireTree from "require-tree";
import bodyParser, { json, raw, text, urlencoded } from 'body-parser';
var cors = require('cors');
const { environment } = require('./env');

// import Route from "./routes/userRoutes";

const runtime: any = {
    requestSchemas: {
        get: {},
        post: {},
        put: {},
        patch: {},
        delete: {}
    }
}
// const operations:any ={
//     opSchemas: {
//         updateOne:{},
//         updateMany: {},
        
//     }
// }

// const app = express();

export class App {
    app: any;
    constructor() {
        this.app = express()
        this.OnInit();
    }



    OnInit() {
        mongoose.connect(environment.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            console.log('ERROR', err);
            console.log("conected to database");
        })

        this.app.use(cors());
        this.app.use(json({ limit: '10mb' }));
        this.app.use(urlencoded({ extended: true, limit: '10mb' }));

        runtime.routes = requireTree('./routes', {
            each: (functions, filename, path) => {
                // console.log('run')
                if (functions.init)
                    functions.init(runtime);

                if (functions.include)
                    return functions.include(this.app);
            }
        });

        runtime.controller = requireTree('./controller', {
            each: (functions, filename, path) => {
                // console.log('run')
                if (functions.init)
                    functions.init(runtime);

                if (functions.include)
                    return functions.include(this.app);
            }
        });


        let checkUrl = (req, res, next) => {
            next()
        }

        this.app.use(checkUrl);
        //Route Not found handling
        this.app.use((req: Request, res: Response) => {
            //Service not found
            res.status(404).json({ msg: 'not found' })
            return res.end();
        });

        //Unexpected error handling
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            // Unexpected error - logging error
            console.log(err);
            return res.status(503).json({ msg: err });
        });

        this.app.listen(environment.PORT, (err) => {
            if (err) throw err
            console.log(`Listening to port ${environment.PORT}`)
        });
    }
}

const a = new App();