// src/Components/Portfolio/TestimonialsSection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import avatars (Vite/CRA compatible)
// import sarah from "../../../Images/avatars/sarah.jpg";
// import michael from "../../../Images/avatars/michael.jpg";
// import emma from "../../../Images/avatars/emma.jpg";
// import james from "../../../Images/avatars/james.jpg";

// Star Rating with Gradient
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg transition-all ${
            i < rating
              ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-sm"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const AvatarFallback = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1189bd] to-[#25aae1] text-sm font-bold text-white">
      {initials}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text:
        "Infolanze transformed our entire digital infrastructure. Their expertise in web development and attention to detail exceeded our expectations completely.",
      name: "Sarah Johnson",
      title: "CEO at TechVenture Inc",
    //   avatar: sarah,
    },
    {
      id: 2,
      text:
        "The team delivered our app in record time without compromising quality. They truly understand modern development practices.",
      name: "Michael Chen",
      title: "Product Lead at InnovateLabs",
    //   avatar: michael,
    },
    {
      id: 3,
      text:
        "Outstanding communication throughout the entire project. Infolanze is a trusted partner.",
      name: "Emma Williams",
      title: "CTO at ScaleUp Solutions",
    //   avatar: emma,
    },
    {
      id: 4,
      text:
        "Their blockchain solutions helped us scale to 100x more users. Professional, innovative, and reliable.",
      name: "James Lee",
      title: "Founder at CryptoNest",
    //   avatar: james,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-6 py-20 md:px-16 lg:px-28">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#25aae1]/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#1189bd]/5 blur-3xl"></div>

      <div className="relative z-10 mb-16 text-center">
        <h2 className="bg-gradient-to-r from-[#1189bd] to-[#25aae1] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
          Trusted by innovative companies worldwide. Hear from our partners about their
          experience working with Infolanze.
        </p>
        <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#25aae1] to-[#1189bd] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} {...t} index={i} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-8 bg-gradient-to-r from-[#1189bd] to-[#25aae1]"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="mt-16 text-center">
        <Link
          to="/testimonials"
          className="inline-block rounded-full bg-gradient-to-r from-[#1189bd] to-[#25aae1] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Read All Testimonials
        </Link>
      </div> */}
    </section>
  );
};

const TestimonialCard = ({ text, name, title, avatar, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-[#25aae1]/30 md:p-8"
      style={{
        transform: `rotate(${index % 2 === 0 ? "-1" : "1"}deg)`,
      }}
    >
      {/* Quote Icon */}
      <div className="absolute -right-3 -top-3 text-6xl text-[#25aae1]/10">“</div>

      <StarRating rating={5} />

      <p className="relative z-10 mt-4 text-gray-700 italic leading-relaxed">
        "{text}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-[#25aae1]/20 transition-transform group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.replaceWith(
                <AvatarFallback name={name} />
              );
            }}
          />
        ) : (
          <AvatarFallback name={name} />
        )}
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;