import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET: Return all companies from DB
export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const companies = await db.collection("companies").find({}).sort({ createdAt: -1 }).toArray();
  return Response.json(companies);
}

// POST: Create a new company in DB
export async function POST(req) {
  const body = await req.json();

  const name = String(body.name || "").trim();
  const industry = String(body.industry || "").trim();
  const size = Number(body.size);
  const budget = Number(body.budget);

  if (!name || !industry || !Number.isFinite(size) || !Number.isFinite(budget) || size <= 0 || budget <= 0) {
    return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection("companies").insertOne({
    name,
    industry,
    size,
    budget,
    createdAt: new Date(),
  });

  return Response.json({ insertedId: result.insertedId });
}

// DELETE: Delete company by id
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  await db.collection("companies").deleteOne({ _id: new ObjectId(id) });

  return Response.json({ ok: true });
}
