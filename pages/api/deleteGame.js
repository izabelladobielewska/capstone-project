import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(405).json({ error: new Error("Invalid request method") });
  try {
    const cardId = req.query.id;
    const client = await clientPromise;
    const collection = client.db("endstagram").collection("cards");

    collection.deleteOne({ id: cardId });

    res.status(200).send("success");
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
