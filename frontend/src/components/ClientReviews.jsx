import React from "react";
import { Star } from "lucide-react"; // For star icons (or you can use Heroicons/FontAwesome)

// Example data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/40?img=1",
    content: "Amazing service! The team was professional, quick, and reliable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Lee",
    image: "https://i.pravatar.cc/40?img=2",
    content: "Affordable pricing and top-notch quality. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Smith",
    image: "https://i.pravatar.cc/40?img=3",
    content: "They responded so fast and solved my issue perfectly.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://i.pravatar.cc/40?img=4",
    content: "Very trustworthy and reliable. I’ll definitely use them again.",
    rating: 5,
  },
];

const ClientReview = () => {
  return (
    <section className="w-full bg-[#0056B3] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-2">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-200 mb-10">
          Hear from our happy customers who trust our services.
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full"
            >
              {/* Stars */}
              <div className="flex mb-3 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm mb-4">{review.content}</p>

              {/* Profile */}
              <div className="flex items-center justify-center gap-2 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
