import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE = "https://gramekta.pythonanywhere.com";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/blogs/${id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        
        // The API returns { status, message, data: [...] }
        const actualData = json.data && json.data.length > 0 ? json.data[0] : null;
        
        if (actualData) {
          setBlog(actualData);
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        console.error("Failed to fetch blog detail:", err);
        setError("Failed to load blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
    window.scrollTo(0, 0);
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-800"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{error || "Blog Not Found"}</h2>
        <Link to="/blogs" className="px-6 py-3 bg-teal-800 text-white rounded-full font-semibold hover:bg-teal-900 transition shadow-lg">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen font-sans pb-20 overflow-x-hidden">
      {/* Hero Header */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] bg-gray-900 overflow-hidden">
        <img 
          src={blog.featured_image ? (blog.featured_image.startsWith('http') ? blog.featured_image : `${API_BASE}${blog.featured_image}`) : 'https://images.unsplash.com/photo-1504812808825-08ddcb4f4aca?w=1200&auto=format&fit=crop&q=80'} 
          alt={blog.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 max-w-5xl mx-auto">
          <div className="bg-amber-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-widest mb-4 sm:mb-6">
            {blog.hashtag ? blog.hashtag.split(' ')[0] : 'Community'}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-xl px-2">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-gray-200 text-[12px] sm:text-sm md:text-base font-medium">
            <span className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(blog.publish_date || blog.created_at)}
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Gram Ekta Admin
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 md:-mt-16 relative z-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100">
          
          {/* Introduction / Short Description */}
          {blog.short_description && (
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 italic border-l-4 border-amber-500 pl-4 sm:pl-6 mb-8 sm:mb-12 leading-relaxed">
              {blog.short_description}
            </div>
          )}

          {/* Full Content */}
          <div 
            className="prose prose-sm sm:prose-base md:prose-lg prose-teal max-w-none text-gray-700 leading-relaxed space-y-4 sm:space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Footer Info */}
          <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {blog.hashtag && blog.hashtag.split(' ').map((tag, index) => (
                <span key={index} className="text-[12px] sm:text-sm font-medium text-teal-800 bg-teal-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Share:</span>
              <div className="flex gap-2 sm:gap-3">
                {['facebook', 'twitter', 'linkedin'].map((social) => (
                  <button key={social} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-teal-800 hover:text-white hover:border-teal-800 transition-all shadow-sm">
                    <i className={`fab fa-${social} text-sm`}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back to List Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-teal-800 font-bold hover:gap-4 transition-all duration-300 group text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
