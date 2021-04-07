import express from "express";
import cors from "cors";

export const createServer = () => {
  const app = express();
  const port = 8080;

  app.use(cors());
  app.use(express.json());

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

  return app
};
