import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  if (req.method !== "PATCH")
    return res.status(405).json({ error: new Error("Invalid request method") });
  try {
    const { id, rating } = req.body;
    const client = await clientPromise;
    const collection = client.db("endstagram").collection("cards");
    const card = await collection.findOne({ id: id });

    if (card) {
      const ratings = card.ratings || [];

      await collection.updateOne(
        { id: id },
        { $set: { ratings: [...ratings, Number(rating)] } }
      );

      res.status(200).send("updated");
    } else {
      res.status(404).send("card not found");
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
