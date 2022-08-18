import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const entities: any = {
  "1": {
    id: "1",
    name: "John Doe",
    age: 30,
    isActive: true,
  },
};
app.get("/", (_req: Request, res: Response) => {
  res.json(Object.values(entities));
});
app.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, isActive } = req.body;
  entities[id] = { id, name, age, isActive };
  res.json(entities[id]);
});
app.post("/", (req: Request, res: Response) => {
  const { name, age, isActive } = req.body;
  const id = Object.keys(entities).length + 1;
  entities[id] = { id, name, age, isActive };
  res.json(entities[id]);
});
app.delete("/", (req: Request, res: Response) => {
  const { id } = req.body;
  delete entities[id];
  res.json(entities);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
