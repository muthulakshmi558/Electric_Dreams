import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import PaymentPopup from "../components/PaymentPopup";

const Checkout = () => {
  const { state } = useLocation(); // data from ServiceViewDetails
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    service_date: "",
    payment_method: "upi",
  });

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!state) return <p className="p-6">Service data not found</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
    // Basic validation
    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.phone_number ||
      !form.address ||
      !form.service_date
    ) {
      alert("Please fill all fields before payment");
      return;
    }

    setIsSubmitting(true);
    try {
      // Make sure field names match Django serializer
      const payload = {
        service: state.service_id,
        quantity: state.quantity,
        amount: state.amount,
        customer_first_name: form.first_name,
        customer_last_name: form.last_name,
        email: form.email,
        phone_number: form.phone_number,
        address: form.address,
        service_date: form.service_date,
        payment_method: form.payment_method,
      };

      const res = await axiosInstance.post("/orders/create_order/", payload);

      if (res.data.success) {
        setShowPaymentPopup(true);
      } else {
        alert("Payment failed. Please check details.");
        console.error(res.data);
      }
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Payment failed. Check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-24 md:items-stretch">
      {/* Left Side */}
      <div className="md:w-1/2 flex justify-center items-start p-6">
        <div className="bg-[#F65616] text-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col justify-between">
          <div className="space-y-4">
            <img
              src={state.image || ""}
              alt={state.title}
              className="w-full h-48 object-contain rounded"
            />
            <h2 className="text-2xl font-bold">{state.title}</h2>
            <hr className="border-white" />
            <h3 className="text-lg font-semibold">Payment Summary</h3>
            <p>Item Total: ₹{state.amount}</p>
            <p>Visitation fees: ₹60</p>
            <p>Taxes and fees: ₹19</p>
            <hr className="border-white" />
            <h3 className="text-xl font-bold">
              Total Amount: ₹{state.amount + 79}
            </h3>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Select Service Date:</label>
            <input
              type="date"
              name="service_date"
              value={form.service_date}
              onChange={handleChange}
              className="p-2 rounded text-black w-full"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Customer Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <h2 className="text-2xl font-bold mt-4">Payment Details</h2>
        <select
          name="payment_method"
          value={form.payment_method}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="upi">Pay with UPI</option>
          <option value="netbanking">Pay with Netbanking</option>
          <option value="card">Pay with Card (Visa)</option>
        </select>

        <button
          onClick={handlePayNow}
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-4"
        >
          {isSubmitting ? "Processing..." : "Pay Now"}
        </button>
      </div>

      {/* Payment Popup */}
      {showPaymentPopup && (
        <PaymentPopup
          onClose={() => {
            setShowPaymentPopup(false);
            navigate("/"); // back to home
          }}
        />
      )}
    </div>
  );
};

export default Checkout;
