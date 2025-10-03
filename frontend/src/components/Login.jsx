import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginOtp = () => {
  const { requestOtp, verifyOtp } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequest = async () => {
    setLoading(true);
    try {
      await requestOtp(phone);
      setStep(2);
    } catch (e) {
      alert("Failed to request OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      await verifyOtp(phone, code);
      // after login, redirect to cart or previous route
      navigate("/"); // or to cart
    } catch (e) {
      alert("Invalid/expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20">
      {step === 1 ? (
        <>
          <h2 className="text-xl font-bold mb-4">Login — enter phone</h2>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            placeholder="+911234567890"
          />
          <button onClick={handleRequest} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Enter OTP sent to {phone}</h2>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            placeholder="123456"
          />
          <div className="flex gap-2">
            <button onClick={handleVerify} disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
            <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Back</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginOtp;
