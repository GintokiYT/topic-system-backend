import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'

const app = express();

app.use(express.json())
app.use(cors())

export const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  const users = await prisma.usuario.findMany();
  res.status(200).json(users)
})

app.listen(4000, () => {
  console.log('Servidor on port ', 4000);
})