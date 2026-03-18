"use client";
import { useEffect, useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  async function fetchReviews() {
    try {
      const res = await fetch("/api/reviews", {
        cache: "no-store"
      });
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("fetchReviews error:", error);
      setMessage("Failed to load reviews");
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  async function handleAddReview(e) {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          city,
          content
        })
      });

      const data = await res.json();
      console.log("POST response:", data);

      if (!res.ok) {
        setMessage(data.error || "Failed to add review");
        return;
      }

      setName("");
      setCity("");
      setContent("");
      setMessage("Review added successfully");
      fetchReviews();
    } catch (error) {
      console.error("handleAddReview error:", error);
      setMessage("Something went wrong while adding review");
    }
  }

  async function handleDeleteReview(id) {
    try {
      console.log("Deleting review id:", id);

      const res = await fetch(`/api/reviews/${id}`, {
        method: "DELETE"
      });

      const data = await res.json();
      console.log("DELETE response:", data);

      if (!res.ok) {
        setMessage(data.error || "Failed to delete review");
        return;
      }

      setMessage("Review deleted successfully");
      fetchReviews();
    } catch (error) {
      console.error("handleDeleteReview error:", error);
      setMessage("Delete request failed");
    }
  }

  async function handleLike(id, currentLikes) {
    try {
      console.log("Liking review id:", id);

      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: currentLikes + 1
        })
      });

      const data = await res.json();
      console.log("LIKE response:", data);

      if (!res.ok) {
        setMessage(data.error || "Failed to like review");
        return;
      }

      setMessage("Like updated");
      fetchReviews();
    } catch (error) {
      console.error("handleLike error:", error);
      setMessage("Like request failed");
    }
  }

  async function handleDislike(id, currentLikes) {
    try {
      console.log("Disliking review id:", id);

      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: currentLikes - 1
        })
      });

      const data = await res.json();
      console.log("DISLIKE response:", data);

      if (!res.ok) {
        setMessage(data.error || "Failed to dislike review");
        return;
      }

      setMessage("Dislike updated");
      fetchReviews();
    } catch (error) {
      console.error("handleDislike error:", error);
      setMessage("Dislike request failed");
    }
  }

  const bestReview =
    reviews.length > 0
      ? reviews.reduce((max, review) =>
          review.likes > max.likes ? review : max
        )
      : null;

  const worstReview =
    reviews.length > 0
      ? reviews.reduce((min, review) =>
          review.likes < min.likes ? review : min
        )
      : null;

  return (
    <div>
      <h1>Sapir Cohen</h1>

      <h2>Add Review</h2>

      <form onSubmit={handleAddReview}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>City: </label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Content: </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Review</button>
      </form>

      {message && <p>{message}</p>}

      <h2>Reviews List</h2>

      {reviews.map((review) => (
        <div key={review._id}>
          <p>Name: {review.name}</p>
          <p>City: {review.city}</p>
          <p>Content: {review.content}</p>
          <p>Likes: {review.likes}</p>

          <button
            type="button"
            onClick={() => handleLike(review._id, review.likes)}
          >
            Like
          </button>

          <button
            type="button"
            onClick={() => handleDislike(review._id, review.likes)}
          >
            Dislike
          </button>

          <button
            type="button"
            onClick={() => handleDeleteReview(review._id)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}

      {bestReview && worstReview && (
        <p>
          The best business is {bestReview.name} in the city of {bestReview.city} with {bestReview.likes} likes,
          and the worst business is {worstReview.name} in the city of {worstReview.city} with {worstReview.likes} likes.
        </p>
      )}
    </div>
  );
}