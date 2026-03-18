import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find();
    return Response.json(reviews);
  } catch (error) {
    console.error("GET /api/reviews error:", error);
    return Response.json(
      { error: "Failed to fetch reviews", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newReview = await Review.create({
      name: body.name,
      city: body.city,
      content: body.content,
      likes: 0
    });

    return Response.json(newReview, { status: 201 });
  } catch (error) {
    console.error("POST /api/reviews error:", error);
    return Response.json(
      { error: "Failed to create review", details: error.message },
      { status: 500 }
    );
  }
}