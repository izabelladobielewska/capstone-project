import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
  try {
    const { id, rating } = req.query;
    const client = await clientPromise;
    const collection = client.db("endstagram").collection("cards");
    const card = await collection.findOne({ id: Number(id) });

    if (card) {
      const ratings = card.ratings || [];

      await collection.updateOne(
        { id: Number(id) },
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
