import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/appdev.jpg";

const HeroBlog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      img: img1,
      title: "Creative App Development",
      subtitle: "Building seamless and modern digital experiences.",
      description:
        "Our app development services combine innovation and strategy to deliver cutting-edge mobile experiences. We focus on performance, design, and scalability to ensure your app stands out in the digital market.",
    },
    {
      id: 2,
      img: img1,
      title: "Digital Marketing Mastery",
      subtitle: "Smart strategies that elevate your brand online.",
      description:
        "From SEO to social media marketing, our data-driven approach ensures your business reaches the right audience at the right time. We create impactful campaigns that boost engagement and conversions.",
    },
    {
      id: 3,
      img: img1,
      title: "Innovative Web Solutions",
      subtitle: "Turning ideas into high-performing web platforms.",
      description:
        "We design and build responsive, user-friendly, and fast web solutions that bring your vision to life. Our team ensures flawless functionality and modern UI for a seamless digital presence.",
    },
  ];

  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-28 md:px-20 px-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate("/blogDetails", { state: blog })}
            className="cursor-pointer content-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h1 className="text-gray-800 font-bold text-xl text-center pt-3">
              {blog.title}
            </h1>
            <p className="text-gray-600 font-medium text-sm text-center pt-1">
              {blog.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBlog;
