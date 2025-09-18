'use client'
import React, { useState, useEffect } from 'react';

export default function Form() {
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        message: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }

        if (success) setSuccess(false);
    };

    const resetForm = () => {
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            message: ''
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
  if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await fetch("https://formspree.io/f/xovngqro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        resetForm();
        setSuccess(true);
      } else {
        setErrors({ submit: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Error submitting form. Please try later." });
    }
  }
};

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    return (
        <form onSubmit={handleSubmit} className="w-[80%] md:w-[60%] space-y-6 px-2 md:px-4 py-6 md:py-12">
            {success && (
                <p className="text-green-500 text-sm transition-opacity duration-500">
                    Form submitted successfully!
                </p>
            )}

            <div>
                <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full border-0 border-b ${errors.fullName ? 'border-red-500' : 'border-gray-300'} bg-transparent px-0 py-3 focus:outline-none focus:border-[#448AFF] placeholder-gray-500`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-[#448AFF] placeholder-gray-500"
                />
            </div>

            <div>
                <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className={`w-full border-0 border-b ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} bg-transparent px-0 py-3 focus:outline-none focus:border-[#448AFF] placeholder-gray-500`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-[#448AFF] placeholder-gray-500"
                />
            </div>

            <div>
                <textarea
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 h-32 resize-none focus:outline-none focus:border-[#448AFF] placeholder-gray-500"
                />
            </div>

            <button
                type="submit"
                className="group bg-[#448AFF] hover:bg-white text-white px-6 py-3 rounded mt-4 flex items-center space-x-2 transition-colors duration-300 cursor-pointer"
            >
                <span className="transition-colors duration-300 group-hover:text-[#448AFF]">
                    Send
                </span>
                <svg
                    className="w-6 h-6 text-white transition-transform duration-300 group-hover:text-[#448AFF] -rotate-45 group-hover:rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
            </button>
        </form>
    );
}
