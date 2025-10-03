import { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const sendOtp = async () => {
    try {
      const res = await api.post("/auth/send_otp/", { phone_number: phone });
      setOtpSent(true);
      setMessage("OTP sent successfully!");
      console.log("OTP (dev mode):", res.data.otp);
    } catch {
      setMessage("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await api.post("/auth/verify_otp/", {
        phone_number: phone,
        otp: otp,
      });
      setMessage(res.data.message);
    } catch {
      setMessage("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4">
          {otpSent ? "Enter OTP" : "Login with Mobile"}
        </h2>

        {!otpSent ? (
          <>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Verify OTP
            </button>
          </>
        )}

        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
