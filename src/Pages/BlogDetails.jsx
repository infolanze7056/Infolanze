import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createBucketClient } from "@cosmicjs/sdk";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  console.log("blog", blog)
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 For image modal
  const [selectedImage, setSelectedImage] = useState(null);

  const bucket = createBucketClient({
    bucketSlug: "dashboard-production",
    readKey: "ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp",
  });

useEffect(() => {
  setLoading(true); // 👈 when slug changes, start loading
  
  bucket.objects
    .findOne({ type: "blogs", slug })
    .then(({ object }) => setBlog(object))
    .catch((err) => console.error("Error fetching blog:", err))
    .finally(() => setLoading(false));

  bucket.objects
    .find({ type: "blogs", limit: 4, props: "slug,title,metadata" })
    .then(({ objects }) => {
        const filtered = objects.filter((b) => b.slug !== slug);
        setPopularPosts(filtered);
      })
    .catch(console.error);
}, [slug]);

  // 🔹 Close modal on Esc
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-600 text-lg">
        Loading blog details...
      </div>
    );

  if (!blog)
    return <div className="text-center py-20 text-red-600">Blog not found.</div>;

  const sections = blog.metadata?.sections || [];

const formatEditorHtml = (html) => {
  if (!html) return "";

  let formatted = html;

  // 1️⃣ Convert <h1> to bold section title
  formatted = formatted.replace(
    /<h1>(.*?)<\/h1>/g,
    `<h2 class="text-xl font-semibold text-gray-800 mb-4">$1</h2>`
  );

  // 2️⃣ Add a break after each paragraph
  formatted = formatted.replace(/<\/p>/g, "</p><br/>");

  return formatted;
};


  return (
    <div>
      <Helmet>
        <title>
          {blog?.metadata?.meta_title
            ? `BlogDetails - ${blog.metadata.meta_title} | Infolanze`
            : "BlogDetails | Infolanze"}
        </title>
        <meta
          name="description"
          content={blog?.metadata?.meta_description || "Read the latest blog from Infolanze."}
        />
        <meta name="keywords" content={blog?.metadata?.meta_tags || "Infolanze, Blog"} />
      </Helmet>
      <div className="py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-28 md:px-20 px-6">
          <div className="col-span-2">
            {blog.metadata?.main_image?.url && (
              <img
                src={blog.metadata.main_image.url}
                alt={blog.title}
                className="w-full h-[550px] object-cover rounded-xl shadow-md mb-8"
              />
            )}

            <div className="border-l-4 border-[#00bfff] pl-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 text-[#00bfff]">
                {blog.metadata?.main_title || blog.title}
              </h1>
              <p className="text-gray-700 text-sm font-medium">
                {new Date(blog.created_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {sections[0]?.section_images?.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {sections[0].section_images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    onClick={() => setSelectedImage(img.url)}
                    className="w-28 h-20 overflow-hidden rounded-md shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={img.url}
                      alt={`Preview ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-12">
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <div key={index} className="pb-8">
                    {section.section_title && (
                      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        {section.section_title}
                      </h2>
                    )}
                    <div
                      className="prose max-w-none text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-a:text-[#00bfff] prose-a:no-underline hover:prose-a:underline"
                     dangerouslySetInnerHTML={{ __html: formatEditorHtml(section.paragraphs) }}
                    />
                  </div>
                ))
              ) : (
                <div
                  className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatRichText(blog.content) }}

                />
              )}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-gray-100 p-7 rounded-xl shadow-sm">
              <h2 className="text-gray-800 text-xl font-semibold pb-3 border-b border-gray-300">
                Popular Posts
              </h2>

              {popularPosts.map((item) => (
                <div
                  key={item.slug}
                  onClick={() => navigate(`/blogDetails/${item.slug}`)}
                  className="py-3 flex gap-4 border-b border-gray-300 last:border-none cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 rounded-lg"
                >
                  <img
                    src={item.metadata?.main_image?.url}
                    alt={item.title}
                    className="w-[90px] h-[70px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-gray-800 font-semibold text-base line-clamp-2">
                      {item.metadata?.main_title || item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {item.metadata?.meta_description?.slice(0, 60)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#00bfff]/10 border border-[#00bfff]/30 p-8 text-center rounded-2xl shadow-md">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 pr-28">
                  <div className="bg-[#00bfff]/20 p-3 rounded-full text-2xl">📞</div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
                    <p className="text-gray-700 font-medium">+91 70161 60435</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-[#00bfff]/20 p-3 rounded-full text-2xl">✉️</div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-700 font-medium break-all">
                      techteam.infolanze@gmail.com
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-2 bg-[#00bfff] hover:bg-[#0099cc] text-white font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[40%] max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/20"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 text-xl font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogDetails;
