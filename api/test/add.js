import connectMongo from "@/pages/utils/connectMongo";
import Test from "@/models/testModel";

export default async function addTest(req, res) {
  const { name, email } = req.body;

  console.log("CONNECTING to MONGO");
  await connectMongo();
  console.log("CONNECTED to MONGO");
  console.log("Creating doc");
  const test = await Test.create(req.body);
  console.log("Created doc");
}
