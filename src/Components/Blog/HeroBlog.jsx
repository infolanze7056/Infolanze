// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createBucketClient } from "@cosmicjs/sdk";

// const HeroBlog = () => {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([]);

//   const bucket = createBucketClient({
//     bucketSlug: "dashboard-production",
//     readKey: "ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp",
//   });

//   useEffect(() => {
//     bucket.objects
//       .find({ type: "blogs" })
//       .then(({ objects }) => setBlogs(objects))
//       .catch(console.error);
//   }, [bucket]);

//   return (
//     <div className="py-16">
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-28 md:px-20 px-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog.slug}
//             onClick={() => navigate(`/blogDetails/${blog.slug}`)}
//             className="cursor-pointer content-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3"
//           >
//             <img
//               src={blog.metadata?.main_image?.url}
//               alt={blog.title}
//               className="w-full h-64 object-cover rounded-xl"
//             />
//             <h1 className="text-gray-800 font-bold text-xl text-center pt-3">
//               {blog.metadata?.main_title || blog.title}
//             </h1>
//             <p className="text-gray-600 font-medium text-sm text-center pt-1">
//               {blog.metadata?.meta_description?.slice(0, 80)}...
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroBlog;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBucketClient } from "@cosmicjs/sdk";

const HeroBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const bucket = createBucketClient({
    bucketSlug: "dashboard-production",
    readKey: "ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp",
  });

  useEffect(() => {
    bucket.objects
      .find({ type: "blogs" })
      .then(({ objects }) => {
        setBlogs(objects);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Skeleton count = number of blogs OR default 3
  const skeletons = Array(blogs.length || 3).fill(0);

  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-28 md:px-20 px-6">

        {/* ---------- Loading Skeletons ---------- */}
        {loading &&
          skeletons.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-3 animate-pulse"
            >
              <div className="w-full h-64 bg-gray-200 rounded-xl"></div>

              <div className="mt-4 h-6 w-3/4 bg-gray-200 rounded"></div>

              <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          ))}

        {/* ---------- Actual Blog Cards ---------- */}
        {!loading &&
          blogs.map((blog) => (
            <div
              key={blog.slug}
              onClick={() => navigate(`/blogDetails/${blog.slug}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3"
            >
              <img
                src={blog.metadata?.main_image?.url}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              <h1 className="text-gray-800 font-bold text-xl text-center pt-3">
                {blog.metadata?.main_title || blog.title}
              </h1>

              <p className="text-gray-600 font-medium text-sm text-center pt-1">
                {blog.metadata?.meta_description?.slice(0, 80)}...
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroBlog;
