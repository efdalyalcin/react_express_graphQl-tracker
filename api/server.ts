import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { data, executableSchema } from "./users";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Entrypoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});

// "scripts": {
//   "dev": "nodemon --watch './**/*.ts' --exec 'ts-node' server.ts"
