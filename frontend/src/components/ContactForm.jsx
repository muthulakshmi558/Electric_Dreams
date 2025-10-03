import { useState } from "react";
import api from "../api/axios";

const ContactForm = () => {
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
  <div className="w-[90%] mx-auto bg-[#E25C26] rounded-xl p-8 md:p-12">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left Info */}
      <div className="text-white space-y-4">
        <h3 className="font-semibold text-lg">Get in Touch</h3>
        <h2 className="text-2xl font-bold mb-6">Contact Electric Dreams</h2>

        <div className="space-y-4">
          <div className="flex items-center bg-white rounded-lg p-4 text-black">
            <div className="w-10 h-10 rounded-full bg-[#E25C26] flex items-center justify-center text-white mr-4">
              📞
            </div>
            <div>
              <p className="font-semibold">Call us 24/7</p>
              <p>(+91)1234567890</p>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-lg p-4 text-black">
            <div className="w-10 h-10 rounded-full bg-[#E25C26] flex items-center justify-center text-white mr-4">
              💲
            </div>
            <div>
              <p className="font-semibold">Callout Free</p>
              <p>During business hours (7.00AM - 5.00PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 text-black"
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

export default ContactForm;
