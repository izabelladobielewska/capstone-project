import clientPromise from "@/utils/connectMongo";

export default async function handler(req, res) {
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
  }

  res.status(200).json(await collection.findOne({ id: Number(id) }));
}
