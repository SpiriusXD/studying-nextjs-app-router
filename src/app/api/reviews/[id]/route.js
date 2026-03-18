import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export async function DELETE(request, context) {
  try {
    await dbConnect();

    const { id } = await context.params;
    console.log("DELETE id:", id);

    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return Response.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Review deleted successfully", deletedReview },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/reviews/[id] error:", error);
    return Response.json(
      { error: "Failed to delete review", details: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request, context) {
  try {
    await dbConnect();

    const { id } = await context.params;
    console.log("PATCH id:", id);

    const body = await request.json();

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { likes: body.likes },
      { returnDocument: "after" }
    );

    if (!updatedReview) {
      return Response.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    return Response.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error("PATCH /api/reviews/[id] error:", error);
    return Response.json(
      { error: "Failed to update review", details: error.message },
      { status: 500 }
    );
  }
}