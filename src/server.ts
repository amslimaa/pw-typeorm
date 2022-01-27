import "reflect-metadata"
import  express  from "express";
import "./database";
import { routes } from "./routes";
const app = express();

app.use(express.json());

app.use(routes);

app.listen( 3000, () => console.log('server is runnin on port 3000. 🔥🔥🚀🚀🚀' )) 
