/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../../config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    concerns: [],
    otherConcern: "",
    previousTherapy: "",
    communicationMode: "",
    howDidYouKnow: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const concernsOptions = [
    "Anxiety",
    "Depression",
    "Panic disorder",
    "Stress",
    "Relationship",
    "ADHD",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const formFieldVariant = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConcernChange = (concern) => {
    setFormData((prev) => {
      const hasConcern = prev.concerns.includes(concern);
      let updatedConcerns;

      if (hasConcern) {
        updatedConcerns = prev.concerns.filter((c) => c !== concern);
      } else {
        updatedConcerns = [...prev.concerns, concern];
      }

      // Clear otherConcern if Other gets unchecked
      const otherConcernValue =
        concern === "Other" && hasConcern ? "" : prev.otherConcern;

      return {
        ...prev,
        concerns: updatedConcerns,
        otherConcern: otherConcernValue,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    const payload = {
      name: formData.name.trim(),
      gender: formData.gender,
      age: Number(formData.age),
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      concerns: formData.concerns,
      otherConcern: formData.concerns.includes("Other")
        ? formData.otherConcern.trim()
        : "",
      previousTherapy: formData.previousTherapy,
      communicationMode: formData.communicationMode,
      howDidYouKnow: formData.howDidYouKnow.trim(),
    };

    try {
      const res = await fetch(`${API_BASE_URL}form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Submission failed");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        gender: "",
        age: "",
        phone: "",
        email: "",
        concerns: [],
        otherConcern: "",
        previousTherapy: "",
        communicationMode: "",
        howDidYouKnow: "",
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#FCF8ED" }}>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-4xl">
        {/* Back button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center font-poppins-regular text-base transition-all duration-200 hover:opacity-70"
            style={{ color: "#CA8080" }}
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <h2
            className="font-comrod-regular text-4xl lg:text-5xl mb-6"
            style={{ color: "#44534C" }}
          >
            Get started today
          </h2>
          <p
            className="font-poppins-regular text-lg"
            style={{ color: "#DBB378" }}
          >
            Take the first step towards your mental wellness journey
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm p-8 lg:p-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Name */}
            <motion.div variants={formFieldVariant}>
              <label
                className="font-poppins-regular text-base mb-3 block"
                style={{ color: "#44534C" }}
              >
                Name <span style={{ color: "#CA8080" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors"
                style={{ borderColor: "#DBB378", color: "#44534C" }}
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            {/* Gender and Age */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={formFieldVariant}
            >
              <div>
                <label
                  className="font-poppins-regular text-base mb-3 block"
                  style={{ color: "#44534C" }}
                >
                  Gender <span style={{ color: "#CA8080" }}>*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors"
                  style={{ borderColor: "#DBB378", color: "#44534C" }}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label
                  className="font-poppins-regular text-base mb-3 block"
                  style={{ color: "#44534C" }}
                >
                  Age <span style={{ color: "#CA8080" }}>*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors"
                  style={{ borderColor: "#DBB378", color: "#44534C" }}
                  placeholder="Enter your age"
                  min="12"
                  max="40"
                  required
                />
              </div>
            </motion.div>

            {/* Phone and Email */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={formFieldVariant}
            >
              <div>
                <label
                  className="font-poppins-regular text-base mb-3 block"
                  style={{ color: "#44534C" }}
                >
                  Phone number (WhatsApp Number){" "}
                  <span style={{ color: "#CA8080" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors"
                  style={{ borderColor: "#DBB378", color: "#44534C" }}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label
                  className="font-poppins-regular text-base mb-3 block"
                  style={{ color: "#44534C" }}
                >
                  Email <span style={{ color: "#CA8080" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors"
                  style={{ borderColor: "#DBB378", color: "#44534C" }}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </motion.div>

            {/* Your Concern */}
            <motion.div variants={formFieldVariant}>
              <label
                className="font-poppins-regular text-base mb-4 block"
                style={{ color: "#44534C" }}
              >
                Your concern <span style={{ color: "#CA8080" }}>*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {concernsOptions.map((concern) => (
                  <motion.label
                    key={concern}
                    className="flex items-center cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + concernsOptions.indexOf(concern) * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.concerns.includes(concern)}
                      onChange={() => handleConcernChange(concern)}
                      className="mr-8 w-4 h-4 rounded border-2 focus:outline-none"
                      style={{ accentColor: "#CA8080", borderColor: "#DBB378" }}
                    />
                    <span
                      className="font-poppins-regular text-base"
                      style={{ color: "#44534C", marginLeft: "0.5rem" }}
                    >
                      {concern}
                    </span>
                  </motion.label>
                ))}
              </div>

              {/* Other concern input */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <label className="flex flex-col sm:flex-row sm:items-center cursor-pointer w-full gap-2 sm:gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.concerns.includes("Other")}
                      onChange={() => handleConcernChange("Other")}
                      className="mr-3 w-4 h-4 rounded border-2 focus:outline-none"
                      style={{ accentColor: "#CA8080", borderColor: "#DBB378" }}
                    />
                    <span
                      className="font-poppins-regular text-base"
                      style={{ color: "#44534C", marginLeft: "0.5rem" }}
                    >
                      Other:
                    </span>
                  </div>
                  <input
                    type="text"
                    name="otherConcern"
                    value={formData.otherConcern}
                    onChange={handleInputChange}
                    className="mt-2 sm:mt-0 w-full px-3 py-2 border border-gray-200 rounded-lg font-poppins-regular text-sm focus:outline-none focus:border-opacity-50 transition-colors"
                    style={{ borderColor: "#DBB378", color: "#44534C" }}
                    placeholder="Please specify"
                    disabled={!formData.concerns.includes("Other")}
                    required={formData.concerns.includes("Other")}
                  />
                </label>
              </motion.div>
            </motion.div>

            {/* Previous therapy */}
            <motion.div variants={formFieldVariant}>
              <label
                className="font-poppins-regular text-base mb-4 block"
                style={{ color: "#44534C" }}
              >
                Have you been to therapy before?{" "}
                <span style={{ color: "#CA8080" }}>*</span>
              </label>
              <div className="flex gap-6">
                {["yes", "no"].map((val) => (
                  <motion.label
                    key={val}
                    className="flex items-center cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="previousTherapy"
                      value={val}
                      checked={formData.previousTherapy === val}
                      onChange={handleInputChange}
                      className="mr-6 w-4 h-4 focus:outline-none"
                      style={{ accentColor: "#CA8080" }}
                      required
                    />
                    <span
                      className="font-poppins-regular text-base"
                      style={{ color: "#44534C", marginLeft: "0.5rem" }}
                    >
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Preferred communication mode */}
            <motion.div variants={formFieldVariant}>
              <label
                className="font-poppins-regular text-base mb-4 block"
                style={{ color: "#44534C" }}
              >
                Preferred mode of communication?{" "}
                <span style={{ color: "#CA8080" }}>*</span>
              </label>
              <div className="flex flex-wrap gap-6">
                {["Email", "Phone call", "WhatsApp"].map((mode, index) => {
                  const modeValue = mode.toLowerCase().replace(" ", "-");
                  return (
                    <motion.label
                      key={mode}
                      className="flex items-center cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="communicationMode"
                        value={modeValue}
                        checked={formData.communicationMode === modeValue}
                        onChange={handleInputChange}
                        className="mr-6 w-4 h-4 focus:outline-none"
                        style={{ accentColor: "#CA8080" }}
                        required
                      />
                      <span
                        className="font-poppins-regular text-base"
                        style={{ color: "#44534C", marginLeft: "0.5rem" }}
                      >
                        {mode}
                      </span>
                    </motion.label>
                  );
                })}
              </div>
            </motion.div>

            {/* How did you know about us */}
            <motion.div variants={formFieldVariant}>
              <label
                className="font-poppins-regular text-base mb-3 block"
                style={{ color: "#44534C" }}
              >
                How did you know about us?{" "}
                <span style={{ color: "#CA8080" }}>*</span>
              </label>
              <textarea
                name="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins-regular text-base focus:outline-none focus:border-opacity-50 transition-colors resize-vertical"
                style={{ borderColor: "#DBB378", color: "#44534C" }}
                placeholder="Please tell us how you discovered our services..."
                required
              />
            </motion.div>

            {/* Submit button */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 font-poppins-regular text-base font-medium rounded-full transition-all duration-200"
                style={{ backgroundColor: "#CA8080", color: "#FFFFFF" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(202, 128, 128, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </motion.button>
            </motion.div>

            {submitError && (
              <p className="text-red-600 text-center mt-4 font-poppins-regular">
                {submitError}
              </p>
            )}
            {submitSuccess && (
              <p className="text-green-600 text-center mt-4 font-poppins-regular">
                Form submitted successfully!
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
