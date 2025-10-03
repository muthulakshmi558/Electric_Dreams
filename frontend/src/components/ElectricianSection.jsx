// src/components/ElectricianSection.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { sendCallbackRequest } from "../api/callbackService";

// Import images
import emergencyThumb from "../assets/images/emergency.jpg";
import warrantyIcon from "../assets/images/warranty.png";
import moneyIcon from "../assets/images/money.png";
import ambulanceIcon from "../assets/images/emergencyservice.png";
import starsIcon from "../assets/images/review.png";
import awardIcon from "../assets/images/award.png";

export default function ElectricianSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendCallbackRequest(data);
      alert("Request sent — confirmation email will be sent to user.");
      reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send. Check console & server.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT */}
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-2">
            Professional Emergency Electrician - Fast & Reliable
          </h2>
          <p className="mb-6 text-gray-700">
            24-hour Electrician In Electric dreams. Call Our Professional Electricians Now To Get Help Fast
          </p>

          {/* Stars + reviews */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.965c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.448 2.687c-.785.57-1.84-.196-1.54-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.545 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </div>
            <div className="text-orange-500 font-medium">Over 215 google reviews</div>
          </div>

          {/* image + call row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={emergencyThumb}
              alt="emergency"
              className="w-56 h-40 object-cover rounded-md shadow-sm"
            />
            <div className="flex-1 flex justify-center sm:justify-start">
              <a
                href="tel:+911234567890"
                className="bg-[#F65616] text-white px-6 py-3 rounded-full inline-block self-center"
              >
                Call: (+91)1234567890
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - REQUEST A CALLBACK */}
        <div className="bg-[#0056B3] text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Request a call back</h3>
          <p className="mb-6 text-blue-100">
            Fill-in your details below and we will get back to you within 30 minutes or less!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Min 2 chars" },
              })}
              placeholder="Name"
              className={`w-full rounded-md p-3 ${errors.name ? "ring-2 ring-red-300" : ""}`}
            />
            {errors.name && <div className="text-sm text-black-200">{errors.name.message}</div>}

            <input
              {...register("mobile", {
                required: "Mobile is required",
                pattern: { value: /^[0-9]{7,15}$/, message: "Enter valid mobile" },
              })}
              placeholder="Mobile"
              className={`w-full rounded-md p-3 ${errors.mobile ? "ring-2 ring-red-300" : ""}`}
            />
            {errors.mobile && <div className="text-sm text-black-200">{errors.mobile.message}</div>}

            <input
              {...register("email", {
                required: "Email required",
                pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email" },
              })}
              placeholder="Email address"
              className={`w-full rounded-md p-3 ${errors.email ? "ring-2 ring-red-300" : ""}`}
            />
            {errors.email && <div className="text-sm text-black-200">{errors.email.message}</div>}

            <select
              {...register("service", { required: "Select service" })}
              className={`w-full rounded-md p-3 text-black ${errors.service ? "ring-2 ring-red-300" : ""}`}
              defaultValue=""
            >
              <option value="" disabled>
                Services
              </option>
              <option value="repair">General repair</option>
              <option value="installation">Installation</option>
              <option value="emergency">Emergency</option>
            </select>
            {errors.service && <div className="text-sm text-black-200">{errors.service.message}</div>}

            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#F2652A] px-8 py-3 rounded-full font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SECOND SECTION - WHY CHOOSE US */}
      <div className="mt-12">
        <h4 className="text-lg font-semibold mb-6">Why choose our electrician?</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: "Lifetime Workmanship Warranty", img: warrantyIcon },
            { title: "Money Back Guarantee", img: moneyIcon },
            { title: "24/7 Emergency Service", img: ambulanceIcon },
            { title: "190+ 5-Star Customer Reviews", img: starsIcon },
            { title: "Awarded For Service Excellence", img: awardIcon },
          ].map((c, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-6 text-center"
              style={{ borderColor: "#F65616" }}
            >
              <img
                src={c.img}
                alt={c.title}
                className="mx-auto mb-4 w-12 h-12 object-contain"
              />
              <p className="text-sm">{c.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
