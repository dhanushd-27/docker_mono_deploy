import prisma from "@repo/db/client";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: { email, password },
  });
  res.json(user);
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});