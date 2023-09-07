import express from "express";

import dotenv from "dotenv";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import productRouter from "./routes/products-route";

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        this.docs();
    }

    private middlewares() {
        dotenv.config();

        this.server.use(
            cors({
                origin: [
                    "http://localhost:3000"
                ]
            })
        );

        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    private routes() {
        this.server.use("/product", productRouter);
    }

    private docs() {
        this.server.use(
            "/docs",
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocs)
        )
    }
}