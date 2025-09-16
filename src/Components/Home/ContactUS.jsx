import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUS.css";

function ContactUS() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const notifySuccess = () => toast.success("Submit Successfully");
  const notifyError = () => toast.error("Failed to Submit");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);   // start loader
      setSubmitted(false);

      try {
        const response = await fetch(
          "https://contact-backend-zeta.vercel.app/api/contact/Infolanze-contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              description: formData.description, // maps to description in backend
            }),
          }
        );

        const data = await response.json();

        if (data.success) {
          console.log("SUCCESS!", data);
          setFormData({
            name: "",
            phone: "",
            email: "",
            description: "",
          });
          setErrors({
            name: "",
            phone: "",
            email: "",
            description: "",
          });
          notifySuccess();
        } else {
          console.log("FAILED...", data);
          notifyError();
        }
      } catch (error) {
        console.log("FAILED...", error);
        notifyError();
      }
    } else {
      console.log("Form contains errors, cannot submit.");
    }
  };


  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (
      !/^\d{10}$/.test(formData.phone)
    ) {
      newErrors.phone = "Invalid phone number";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Company name validation
    if (!formData.description.trim()) {
      newErrors.description = "Company name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="bg-[--main-color] svg-1 font-family">
      <div className="lg:px-36 md:px-20 px-5 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
          <div className=" lg:px-10 md:px-4">
            <div className="text-4xl font-bold pb-5">
              Explore how to our services can be integrated with <span className="text-[--second-color]">Your Business.</span>
            </div>
            <div className="font-semibold">We're just a conversation away!</div>
          </div>
          <div>
            <div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="mx-auto py-6 px-4"
              >
                <div className="lg:flex md:flex ">
                  <div className="lg:pe-5 md:pe-4 pt-3">
                    <label className="text-sm font-semibold">Your Name *</label>
                    <input
                      onChange={handleChangeInput}
                      value={formData.name}
                      name="name"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">{errors.name}</span>
                    )}
                  </div>
                  <div className="pt-3">
                    <label className="text-sm font-semibold" >Your Number *</label>
                    <input
                      onChange={handleChangeInput}
                      value={formData.phone}
                      name="phone"
                      type="tel"
                      placeholder=""
                      className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pt-3">
                  <label className="text-sm font-semibold">Your Email *</label>
                  <input
                    onChange={handleChangeInput}
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder=""
                    className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none border-none"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>
                <div className="pt-3">
                  <label className="text-sm font-semibold">Please Describe your business needs</label>
                  <textarea
                    onChange={handleChangeInput}
                    value={formData.description}
                    name="description"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md h-28 px-6  bg-white text-sm outline-none border-none"
                  />
                  {errors.description && (
                    <span className="text-red-500 text-xs">
                      {errors.description}
                    </span>
                  )}
                </div>

                <div>
                  <button
                    className="text-white bg-[--second-color] hover:bg-[rgb(105,145,221)] font-semibold rounded-md text-sm px-6 py-3 mt-4 block flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Get Started"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUS;
