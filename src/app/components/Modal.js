import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";




const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectTestFor: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation example, you can customize it according to your requirements
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleModalClose = () => {
    // Clear form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      selectTestFor: "",
      message: "",
    });
    setErrors({});
    onClose();
  };
  const handleModalSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      try {
        setIsClicked(true);
        // Send form data to the serverless function
        const responseData = await axios.post("/api/appoiment", formData);
        if (responseData.status == 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            selectTestFor: "",
            message: "",
          });

          toast.success(responseData.data.message, {
            style: { backgroundColor: "#fff", color: "#257378" },
          });
          onClose();
          setIsClicked(false);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0  z-50 overflow-auto bg-black/50  ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen rounded-t-md ">
        <div className="bg-white border w-full max-w-md rounded-md shadow-lg">
          <div className="text-white bg-theme1 block rounded-t-md px-8">
            <div className="flex items-center h-20 justify-between gap-4">
              <h1 className="lg:text-2xl text-xl font-semibold">
                Book an Appointment
              </h1>
              <button
                className="hover:shadow-none shadow-md shadow-white text-theme1light border border-theme1light font-poppins py-1 px-3  rounded-lg "
                onClick={handleModalClose}
              >
               <svg  viewBox="0 0 329.26933 329" width="12px" fill="#fff" height="22px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
              </button>
            </div>
          </div>
          <div className="p-8 ">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full rounded px-3 py-1.5 border focus:border-gray-500 outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded px-3 py-1.5 border focus:border-gray-500 outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full rounded px-3 py-1.5 border focus:border-gray-500 outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="text"
                className="block text-gray-700 font-semibold mb-2"
              >
                Select Test For:
              </label>
              <div className="relative inline-block w-64">
                <select
                  id="selectTestFor"
                  name="selectTestFor"
                  value={formData.selectTestFor}
                  onChange={handleInputChange}
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Single Blood Test">Single Blood Test</option>
                  <option value="Full Blood Test">Full Blood Test</option>
                  <option value="4 Pathogen Screen">4 Pathogen Screen</option>
                  <option value="7 Pathogen Screen">7 Pathogen Screen</option>

                  <option value="13 Pathogen Screen">13 Pathogen Screen</option>
                  <option value="17 Pathogen Screen">17 Pathogen Screen</option>
                  <option value="22 Pathogen Screen">22 Pathogen Screen</option>
                  <option value="28 Pathogen Screen">28 Pathogen Screen</option>
                  <option value="33 Pathogen Screen">33 Pathogen Screen</option>
                  <option value="Gonorrhoea">Gonorrhoea</option>
                  <option value="Chlamydia">Chlamydia</option>
                  <option value="Syphilis">Syphilis</option>
                  <option value="Trichomonas">Trichomonas</option>
                  <option value="Human Papillomavirus (HPV)">
                    Human Papillomavirus (HPV)
                  </option>
                  <option value="Genital Herpes">Genital Herpes</option>
                  <option value="Hepatitis B and C">Hepatitis B and C</option>
                  <option value="Human Immunodeficiency Virus (HIV)">
                    Human Immunodeficiency Virus (HIV)
                  </option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                  </svg>
                </div>
              </div>
             
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-1.5 focus:border-gray-500 outline-none"
                placeholder="Enter your message"
                rows="2"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                disabled={isClicked}
                className="bg-theme1 text-white px-4 py-2 rounded-sm hover:bg-theme1h"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
