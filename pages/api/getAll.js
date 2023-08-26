import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: new Error("Invalid request method") });
  try {
    const client = await clientPromise;
    const db = client.db("endstagram");
    const cards = await db.collection("cards").find({}).toArray();

    res.status(200).json({
      cards: cards,
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
