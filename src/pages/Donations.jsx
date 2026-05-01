import React, { useState, useRef, useEffect } from 'react';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

const Donations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    donation_amount: '',
    category_id: '',
  });
  const [categories, setCategories] = useState([]);
  const [receiptImage, setReceiptImage] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://gramekta.pythonanywhere.com/categories/');
        if (response.ok) {
          const result = await response.json();
          // The API returns { "status": "success", "message": "...", "data": [...] }
          if (result && Array.isArray(result.data)) {
            setCategories(result.data);
          } else {
            setCategories([]);
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreset = (amount) => {
    setFormData({ ...formData, donation_amount: String(amount) });
  };

  const handleImageChange = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setStatusMessage({ type: 'error', text: 'Please upload a valid image file (JPG, PNG, etc.)' });
      return;
    }
    setReceiptImage(file);
    setReceiptPreview(URL.createObjectURL(file));
    setStatusMessage(null);
  };

  const handleFileInput = (e) => {
    handleImageChange(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleImageChange(e.dataTransfer.files[0]);
  };

  const removeImage = () => {
    setReceiptImage(null);
    setReceiptPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('donation_amount', formData.donation_amount);
      payload.append('category_id', formData.category_id);
      if (receiptImage) {
        payload.append('image', receiptImage);
      }

      const response = await fetch('https://gramekta.pythonanywhere.com/donations/', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) throw new Error('Failed');

      setStatusMessage({ type: 'success', text: 'Thank you for your generous donation! Your contribution will make a real difference.' });
      setFormData({ name: '', email: '', mobile: '', donation_amount: '', category_id: '' });
      removeImage();
      setTimeout(() => setStatusMessage(null), 7000);
    } catch {
      setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9fafb] min-h-[calc(100vh-200px)] font-sans">

      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] bg-[#17745f] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Decorative blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#f5b000]/10 rounded-full blur-3xl" />
        {/* Doodle lines */}
        <svg className="absolute left-0 bottom-0 w-48 opacity-10" viewBox="0 0 200 120" fill="none">
          <path d="M0 80 C50 40, 100 100, 150 60 C180 40, 200 60, 200 80" stroke="white" strokeWidth="2" />
          <path d="M0 100 C60 60, 120 110, 200 70" stroke="white" strokeWidth="2" />
        </svg>
        <svg className="absolute right-0 top-0 w-48 opacity-10" viewBox="0 0 200 120" fill="none">
          <circle cx="160" cy="40" r="50" stroke="white" strokeWidth="2" />
          <circle cx="180" cy="20" r="25" stroke="#f5b000" strokeWidth="2" />
        </svg>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#f5b000] font-semibold italic text-lg" style={{ fontFamily: "'Georgia', serif" }}>
              Make a Difference
            </span>
            <span className="h-px w-12 bg-[#f5b000]" />
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            Donate &amp; Change Lives
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto text-sm sm:text-base">
            Your generosity empowers communities and brings hope to those in need. Every rupee counts.
          </p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Lives Impacted', value: '50,000+' },
            { label: 'Active Donors', value: '12,000+' },
            { label: 'Projects Funded', value: '340+' },
            { label: 'Villages Reached', value: '180+' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#17745f]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">

          {/* ── LEFT: Info Panel ── */}
          <div className="lg:w-[40%] flex flex-col gap-6">
            {/* Bank Transfer Details */}
            <div className="bg-[#17745f] text-white rounded-2xl p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#f5b000]/20 rounded-full blur-xl" />
              <div className="relative z-10 flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#f5b000]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#f5b000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5b000]">Bank Transfer Details</h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 relative z-10">
                You can donate directly via bank transfer. Use the details below and upload your payment receipt in the form.
              </p>
              <div className="space-y-3 relative z-10">
                {[
                  { label: 'Account Name', value: 'GRAM Ekta Foundation' },
                  { label: 'Bank Name', value: 'IDBI Bank' },
                  { label: 'Account Number', value: '2055102000002950' },
                  { label: 'IFSC Code', value: 'IBKL0002055' },
                  { label: 'Branch', value: 'Paud Mulshi, Pune' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 bg-white/10 rounded-xl px-4 py-3">
                    <span className="text-[#f5b000] font-semibold text-xs uppercase tracking-wide w-36 flex-shrink-0">{item.label}</span>
                    <span className="text-white font-medium text-sm break-all">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6">
              <h4 className="font-bold text-gray-800 mb-4">You Can Trust Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🔒', label: 'Secure Payments' },
                  { icon: '📜', label: 'Tax Benefits' },
                  { icon: '✅', label: 'Govt. Certified' },
                  { icon: '📊', label: 'Full Transparency' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-xs font-semibold text-gray-700">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Donation Form ── */}
          <div className="lg:w-[60%]">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-7 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-1">Make Your Donation</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in your details and choose an amount to donate.</p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/40 focus:border-[#17745f] transition-all duration-200 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/40 focus:border-[#17745f] transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col">
                  <label htmlFor="mobile" className="text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/40 focus:border-[#17745f] transition-all duration-200 text-sm"
                  />
                </div>

                {/* Category Selection */}
                <div className="flex flex-col">
                  <label htmlFor="category_id" className="text-sm font-semibold text-gray-700 mb-2">Donate For (Category)</label>
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    required
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/40 focus:border-[#17745f] transition-all duration-200 text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                  >
                    <option value="" disabled>Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Donation Amount */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-3">Donation Amount (₹)</label>
                  {/* Preset buttons */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {PRESET_AMOUNTS.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => handlePreset(amt)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                          formData.donation_amount === String(amt)
                            ? 'bg-[#17745f] text-white border-[#17745f] shadow-md'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#17745f] hover:text-[#17745f]'
                        }`}
                      >
                        ₹{amt.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    id="donation_amount"
                    name="donation_amount"
                    value={formData.donation_amount}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Or enter custom amount"
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/40 focus:border-[#17745f] transition-all duration-200 text-sm"
                  />
                </div>

                {/* Payment Receipt Upload */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Payment Receipt
                    <span className="ml-2 text-xs font-normal text-gray-400">(Optional – upload screenshot/photo of payment)</span>
                  </label>

                  {!receiptPreview ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      className={`relative flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl py-8 px-4 cursor-pointer transition-all duration-200 ${
                        dragOver
                          ? 'border-[#17745f] bg-[#f0faf7]'
                          : 'border-gray-200 bg-gray-50 hover:border-[#17745f] hover:bg-[#f0faf7]'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#17745f]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#17745f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-gray-700">Click to upload or drag & drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP — max 5MB</p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img
                        src={receiptPreview}
                        alt="Payment Receipt Preview"
                        className="w-full max-h-52 object-contain bg-gray-50"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-white/90 hover:bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow transition-all"
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow transition-all"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="bg-[#f0faf7] border-t border-[#17745f]/10 px-4 py-2.5 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#17745f] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-[#17745f] font-medium truncate">{receiptImage?.name}</span>
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

                {/* Selected Amount Display */}
                {formData.donation_amount && (
                  <div className="bg-[#f0faf7] border border-[#17745f]/20 rounded-xl px-5 py-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Your Donation</span>
                    <span className="text-2xl font-extrabold text-[#17745f]">
                      ₹{Number(formData.donation_amount).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {/* Status message */}
                {statusMessage && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {statusMessage.type === 'success' ? (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="font-medium text-sm">{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 bg-[#f5b000] text-white font-bold text-base rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,176,0,0.4)] flex items-center justify-center gap-3 ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e0a200] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,176,0,0.35)]'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Donate Now</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  🔒 Your payment information is securely encrypted. Gram Ekta Foundation is a registered NGO.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
