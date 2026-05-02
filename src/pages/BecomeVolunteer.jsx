import React, { useState, useRef } from 'react';
import SuccessModal from '../components/common/SuccessModal';

const BecomeVolunteer = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile_number: '',
    date_of_birth: '',
    gender: '',
    address: '',
    designation: '',
  });

  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setStatusMessage({ type: 'error', text: 'Please upload a valid image file (JPG, PNG, etc.)' });
      return;
    }
    setProfilePic(file);
    setPreviewUrl(URL.createObjectURL(file));
    setStatusMessage(null);
  };

  const handleFileInput = (e) => {
    handleFileChange(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  const removeImage = () => {
    setProfilePic(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const data = new FormData();
      data.append('full_name', formData.full_name);
      data.append('email', formData.email);
      data.append('mobile_number', formData.mobile_number);
      data.append('date_of_birth', formData.date_of_birth);
      data.append('gender', formData.gender);
      data.append('address', formData.address);
      data.append('designation', formData.designation);
      if (profilePic) {
        data.append('profile_pic', profilePic);
      }

      const response = await fetch('https://gramekta.pythonanywhere.com/volunteers/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setStatusMessage({ 
        type: 'success', 
        text: 'Successfully registered! Thank you for joining us as a volunteer.' 
      });
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        mobile_number: '',
        date_of_birth: '',
        gender: '',
        address: '',
        designation: '',
      });
      removeImage();
      
      setTimeout(() => setStatusMessage(null), 7000);
    } catch (error) {
      setStatusMessage({ 
        type: 'error', 
        text: error.message || 'Something went wrong. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen font-sans">
      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[300px] sm:h-[350px] bg-[#17745f] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#f5b000]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#f5b000] font-semibold italic text-lg" style={{ fontFamily: "'Georgia', serif" }}>
              Join the Movement
            </span>
            <span className="h-px w-12 bg-[#f5b000]" />
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Become a Volunteer
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Your time and skills can change lives. Join our community of dedicated volunteers 
            working together for a better tomorrow.
          </p>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-10 md:p-12">
          
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Registration Form</h2>
            <p className="text-gray-500 text-sm">Please fill in your details below to apply as a volunteer.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="full_name" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm"
                />
              </div>
            </div>

            {/* Mobile & DOB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="mobile_number" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile_number"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date_of_birth" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm"
                />
              </div>
            </div>

            {/* Gender & Designation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="gender" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="designation" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                  Designation / Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Student, Social Worker"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-bold text-gray-700 flex items-center gap-1">
                Full Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                placeholder="Enter your complete address"
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/30 focus:border-[#17745f] transition-all text-sm resize-none"
              ></textarea>
            </div>

            {/* Profile Picture Upload */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700">
                Profile Picture <span className="text-red-500">*</span>
              </label>
              
              {!previewUrl ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl py-10 px-6 text-center cursor-pointer transition-all duration-200 ${
                    dragOver 
                      ? 'border-[#17745f] bg-[#f0faf7]' 
                      : 'border-gray-200 bg-gray-50 hover:border-[#17745f] hover:bg-[#f0faf7]'
                  }`}
                >
                  <div className="w-16 h-16 bg-[#17745f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#17745f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-semibold mb-1">Upload a profile photo</p>
                  <p className="text-gray-400 text-xs">PNG, JPG or WEBP up to 2MB</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    required
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-sm mx-auto group">
                  <img
                    src={previewUrl}
                    alt="Profile Preview"
                    className="w-full h-64 object-cover rounded-2xl shadow-md border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              )}
            </div>

            {/* Status Messages */}
            {statusMessage && (
              <div className={`p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
                statusMessage.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {statusMessage.type === 'success' ? (
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <p className="text-sm font-medium">{statusMessage.text}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-[#f5b000] text-white font-bold text-lg rounded-xl shadow-[0_10px_20px_rgba(245,176,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e0a200] hover:shadow-[0_15px_25px_rgba(245,176,0,0.4)] hover:-translate-y-1 active:translate-y-0'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting this form, you agree to our terms and conditions. 
              Our team will review your application and get back to you soon.
            </p>
          </form>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)}
        title="Application Received!"
        message="Thank you for your interest in volunteering with Gram Ekta Foundation. Our team will review your application and contact you shortly."
        buttonText="Back to Home"
      />
    </div>
  );
};

export default BecomeVolunteer;
