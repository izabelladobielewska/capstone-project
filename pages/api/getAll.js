import clientPromise from "@/pages/utils/connectMongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("endstagram");
  const cards = await db.collection("cards").find({}).toArray();

  res.json({
    status: 200,
    cards: cards,
  });
}
