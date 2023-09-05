import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: new Error("Invalid request method") });
  try {
    const newGame = req.body;
    const client = await clientPromise;
    const collection = client.db("endstagram").collection("cards");

    // collection.insertOne(newGame);
    collection.replaceOne({ id: newGame.id }, newGame, {
      upsert: true,
    });

    res.status(200).send("success");
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
