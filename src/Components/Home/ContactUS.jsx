import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUS() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const notifySuccess = () => toast.success("Submitted Successfully 🚀");
  const notifyError = () => toast.error("Submission Failed ❌");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit phone required";
      valid = false;
    }

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Valid email required";
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please describe your requirement";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch(
        "https://contact-backend-zeta.vercel.app/api/contact/Infolanze-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        setFormData({ name: "", phone: "", email: "", description: "" });
        setErrors({});
        notifySuccess();
      } else {
        notifyError();
      }
    } catch {
      notifyError();
    }
    setLoading(false);
  };

  return (
    <section className="relative py-24 overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      {/* Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-indigo-500/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="justify-start">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Contact Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let’s Build Something
              <span className="text-blue-400"> Exceptional</span>
            </h2>

            <p className="mt-6 text-blue-100/80 text-lg max-w-xl">
              Share your idea with us. Our experts will help you turn it into a
              scalable, high-performance digital solution.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="relative p-8 rounded-3xl 
            bg-white/5 backdrop-blur-xl border border-white/10
            shadow-[0_0_60px_rgba(59,130,246,0.15)]">

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChangeInput}
                    placeholder="Your Name *"
                    className="w-full h-12 rounded-xl px-5 
                      bg-white/10 text-white placeholder-blue-200/60
                      border border-white/10 outline-none
                      focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChangeInput}
                    placeholder="Phone Number *"
                    className="w-full h-12 rounded-xl px-5 
                      bg-white/10 text-white placeholder-blue-200/60
                      border border-white/10 outline-none
                      focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeInput}
                  placeholder="Email Address *"
                  className="w-full h-12 rounded-xl px-5 
                    bg-white/10 text-white placeholder-blue-200/60
                    border border-white/10 outline-none
                    focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChangeInput}
                  placeholder="Describe your business needs *"
                  rows="4"
                  className="w-full rounded-xl px-5 py-4 
                    bg-white/10 text-white placeholder-blue-200/60
                    border border-white/10 outline-none resize-none
                    focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">{errors.description}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-blue-500 to-cyan-400
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                  transition-all duration-300"
              >
                {loading ? "Submitting..." : "Get Started"}
              </button>

            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}

export default ContactUS;
