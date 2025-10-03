import { useState } from "react";
import api from "../api/axios";

// ✅ Import image and store in variable
import mapImage from "../assets/images/map.jpg";

const ContactPageForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let errs = {};
    if (!form.first_name) errs.first_name = "First name is required";
    if (!form.last_name) errs.last_name = "Last name is required";
    if (!form.phone) errs.phone = "Phone number is required";
    if (!form.email) errs.email = "Email is required";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      await api.post("/contacts/", form);
      setSuccess("Your message has been sent!");
      setForm({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white py-12 pb-20 font-[Lato]">
      <div className="w-[90%] mx-auto rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6">
            {/* First Row: Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="border rounded-lg p-6 text-center bg-white text-black shadow-md">
                <div className="text-3xl mb-3">📞</div>
                <p className="font-semibold">Call out Team</p>
                <p className="text-[#E25C26] font-bold">+91-1234567890</p>
              </div>

              {/* Card 2 */}
              <div className="border rounded-lg p-6 text-center bg-white text-black shadow-md">
                <div className="text-3xl mb-3">✉️</div>
                <p className="font-semibold">Reach out to us</p>
                <p>Send email</p>
                <div className="text-left">
                <p className="text-[#E25C26] text-sm font-bold">
                    support@electric
                    dreams.com
                </p>
                </div>
              </div>
            </div>

            {/* Second Row: Map */}
            <div className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={mapImage}
                alt="Location Map"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4 text-black border"
          >
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  className="border p-3 rounded-md w-full text-black placeholder-gray-600"
                />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  className="border p-3 rounded-md w-full text-black placeholder-gray-600"
                />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border p-3 rounded-md w-full text-black placeholder-gray-600"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border p-3 rounded-md w-full text-black placeholder-gray-600"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium mb-1">Address (Optional)</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="border p-3 rounded-md w-full text-black placeholder-gray-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">How can we help?</label>
              <textarea
                placeholder="Type your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border p-3 rounded-md w-full h-24 text-black placeholder-gray-600"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#E25C26] text-white py-3 rounded-full font-semibold hover:bg-[#CD3A00] transition"
            >
              Send Message
            </button>

            {success && <p className="text-green-600 mt-2">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPageForm;
