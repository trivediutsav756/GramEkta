import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://gramekta.pythonanywhere.com";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/blogs/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const blogData = data?.data || (Array.isArray(data) ? data : []);
        setBlogs(blogData);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-[#f9fafb] min-h-[calc(100vh-200px)] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 sm:mb-5 leading-tight">
            Our Latest <span className="text-[#17745f]">Blogs</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Stay updated with our latest news, articles, and insights about our initiatives and community impact.
          </p>
          <div className="w-20 sm:w-24 h-1.5 bg-[#f5b000] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-transparent border-t-[#17745f] border-b-[#f5b000]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 px-4">
            <p className="text-lg sm:text-xl text-red-500 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-[#17745f] text-white font-semibold rounded-lg hover:bg-[#125e4c] transition shadow-md"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg sm:text-xl text-gray-500">No blogs found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col group border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={blog.featured_image ? (blog.featured_image.startsWith('http') ? blog.featured_image : `${API_BASE}${blog.featured_image}`) : 'https://images.unsplash.com/photo-1504812808825-08ddcb4f4aca?w=800&auto=format&fit=crop&q=60'} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1504812808825-08ddcb4f4aca?w=800&auto=format&fit=crop&q=60';
                    }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-[#f5b000] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Article
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow relative">
                  {/* Author / Date Info */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 gap-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#17745f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {formatDate(blog.created_at || blog.publish_date)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#17745f] transition-colors duration-200">
                    {blog.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-5 sm:mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {blog.short_description || blog.content}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 sm:pt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link to={`/blogs/${blog.slug || blog.id}`} className="inline-flex items-center text-[#17745f] font-bold text-[14px] sm:text-[15px] hover:text-[#125e4c] transition-colors group-hover:gap-2 gap-1.5 duration-300">
                      Read More 
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
