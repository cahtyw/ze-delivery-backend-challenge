import Server from "express";

import bodyParser from "body-parser";
import cors from "cors";

import errors from "./middlewares/error";

import exampleRoutes from "./routes/example";

import "./config/env";

interface AppInterface {
  server: Server.Express;
}

class App implements AppInterface {
  public server: Server.Express;

  constructor() {
    this.server = Server();

    this.middlewares();
    this.routes();
    this.listeners();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(bodyParser.json());
  }

  private routes(): void {
    this.server.use(exampleRoutes);
  }

  private listeners(): void {
    this.server.use(errors.notFound);
    this.server.use(errors.exception);
  }
}

export default new App().server;
