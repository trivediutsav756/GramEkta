import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('https://gramekta.pythonanywhere.com/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatusMessage({ type: 'success', text: 'Thank you for contacting us! Your message has been successfully sent.' });
      setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatusMessage(null), 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9fafb] py-16 px-5 sm:px-10 lg:px-20 font-sans min-h-[calc(100vh-200px)]">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-4">Get In Touch</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Fill out the form below and our team will be in contact with you shortly.
          </p>
        </div>

        {/* Contact Container */}
        <div className="flex flex-col lg:flex-row gap-0 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          
          {/* Left Info Side */}
          <div className="lg:w-2/5 bg-[#17745f] p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-[#f5b000]">Contact Info</h3>
              <p className="mb-10 text-gray-100 text-sm leading-relaxed">
                Reach out to us for any inquiries, partnerships, or support. Our dedicated team is here to assist you every step of the way.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#f5b000] transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Call Us Anytime</p>
                    <p className="font-semibold text-lg">+91 9172605333</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#f5b000] transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email Us</p>
                    <p className="font-semibold text-lg">gramektafoundation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#f5b000] transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Locate Us</p>
                    <p className="font-semibold text-lg text-sm leading-tight">Gat. No. 710, At.Post. Kasar Amboli, Ambarvet, Mulshi, Pune-412115</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-64 h-64 bg-[#1f8d57] rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#f5b000] rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-14">
            <h3 className="text-2xl font-bold text-[#111827] mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/50 focus:border-[#17745f] transition-all duration-200" 
                    placeholder="John Doe" 
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/50 focus:border-[#17745f] transition-all duration-200" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/50 focus:border-[#17745f] transition-all duration-200" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/50 focus:border-[#17745f] transition-all duration-200" 
                    placeholder="How can we help?" 
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  className="px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#17745f]/50 focus:border-[#17745f] transition-all duration-200 resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className={`p-4 rounded-lg flex items-center gap-3 ${statusMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {statusMessage.type === 'success' ? (
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                  )}
                  <span className="font-medium text-sm">{statusMessage.text}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full sm:w-auto px-10 py-4 bg-[#f5b000] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,176,0,0.39)] hover:shadow-[0_6px_20px_rgba(245,176,0,0.23)] flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : 'transform hover:-translate-y-1'}`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
