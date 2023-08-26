import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  res.status(204).send("du");
}
