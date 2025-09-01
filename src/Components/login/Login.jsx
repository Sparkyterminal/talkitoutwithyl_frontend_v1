import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_BASE_URL, ROLES } from "../../../config";
import axios from "axios";
import { login } from "../../reducers/users";

export default function Login() {
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const textColor = "#F4D8CC";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const apiPayload = { email_id, password };
    const response = await axios.post(`${API_BASE_URL}auth/login`, apiPayload);

    if (response.status === 200) {
      const { token, user } = response.data;
      const { id, name, email_id, role } = user;

      dispatch(
        login({
          id,
          name,
          role,
          email_id,
          access_token: token,
          is_logged_in: true,
        })
      );

      navigate("/dashboard");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Invalid credentials");
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: "#FCF8ED" }}
    >
      <div className="w-full max-w-md">
        <div
          className="rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-[1.02]"
          style={{
            backgroundColor: "#44534C",
            border: "2px solid #F4D8CC",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Header Section */}
          <div className="px-8 pt-8 pb-6 text-center">
            <div className="mb-6">
              <div className="mx-auto h-32 w-32 flex items-center justify-center">
                <div
                  className="flex flex-shrink-0 text-3xl font-comrod-regular select-none"
                  style={{ color: textColor, userSelect: "none" }}
                >
                  talkitoutwithyl
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: textColor }}>
              Welcome Back
            </h1>
            <p className="text-sm animate-fadeIn" style={{ color: "#E3EDE9" }}>
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form className="px-8 pb-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email_id}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "#E3EDE9",
                    border: "1.5px solid #F4D8CC",
                    borderRadius: "12px",
                    color: "#44534C",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F4D8CC";
                    e.target.style.boxShadow = "0 0 8px #F4D8CC";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#F4D8CC";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                      width: "100%",
                      padding: "0.75rem 3rem 0.75rem 1rem",
                      backgroundColor: "#E3EDE9",
                      border: "1.5px solid #F4D8CC",
                      borderRadius: "12px",
                      color: "#44534C",
                      outline: "none",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#F4D8CC";
                      e.target.style.boxShadow = "0 0 8px #F4D8CC";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#F4D8CC";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    style={{ color: "#44534C" }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  className="text-sm"
                  style={{ color: "#F4D8CC", animation: "fadeIn 0.5s ease" }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #F4D8CC 0%, #E3EDE9 100%)",
                  color: "#44534C",
                  fontWeight: "600",
                  padding: "0.75rem",
                  borderRadius: "12px",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: loading ? "none" : "0 4px 6px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) =>
                  !loading && (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  !loading && (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-xs" style={{ color: "#44534C" }}>
            Protected by advanced security measures
          </p>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              from {opacity: 0;}
              to {opacity: 1;}
            }
            .animate-fadeIn {
              animation: fadeIn 0.8s ease forwards;
            }
          `}
        </style>
      </div>
    </div>
  );
}
