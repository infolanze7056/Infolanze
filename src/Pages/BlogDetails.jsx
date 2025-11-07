import React from "react";
import img1 from "../Images/appdev.jpg";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-28 md:px-20 px-6">
        {/* LEFT SIDE MAIN IMAGE + CONTENT */}
        <div className="col-span-2">
          {/* MAIN IMAGE */}
          <img
            src={img1}
            alt="Main Blog"
            className="w-full h-[520px] object-cover rounded-md mb-10"
          />

          {/* BLOG CONTENT */}
          <div className="leading-relaxed text-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Impact on Hearing After COVID-19
            </h2>
            <p className="mb-4">
              After recovering from a COVID-19 infection, some individuals may experience an impact on their hearing.
              This impact can manifest in various ways, and while not everyone will encounter hearing issues,
              it's crucial to be aware of the potential consequences.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Here are some common ways in which COVID-19 can affect hearing:
            </h3>

            <h4 className="font-semibold mt-4 mb-1 text-[#0077b6]">Sudden Hearing Loss:</h4>
            <p>
              Some COVID-19 survivors may experience sudden hearing loss in one or both ears.
              This abrupt reduction in hearing ability can be distressing and requires immediate medical attention.
            </p>

            <h4 className="font-semibold mt-4 mb-1 text-[#0077b6]">Tinnitus:</h4>
            <p>
              Tinnitus is a condition characterized by a persistent ringing, buzzing, or humming sound in the ears.
              COVID-19 has been associated with an increased risk of tinnitus, which can be bothersome and impact
              concentration and sleep quality.
            </p>

            <h4 className="font-semibold mt-4 mb-1 text-[#0077b6]">Dizziness and Balance Problems:</h4>
            <p>
              COVID-19 can affect the vestibular system, responsible for balance and spatial orientation.
              As a result, some individuals may experience dizziness or balance problems after infection.
            </p>

            <h4 className="font-semibold mt-4 mb-1 text-[#0077b6]">Auditory Processing Issues:</h4>
            <p>
              Some COVID-19 survivors may find it challenging to process and understand sounds, particularly
              in noisy environments. This can lead to communication problems and frustration.
            </p>

            <h4 className="font-semibold mt-4 mb-1 text-[#0077b6]">Exacerbation of Existing Hearing Issues:</h4>
            <p>
              For those with pre-existing hearing conditions, COVID-19 may worsen hearing problems or lead
              to additional complications.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              Preventive Measures Individuals Can Take:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Protect Your Ears:</strong> Limit exposure to loud noises and wear ear protection in noisy environments.
              </li>
              <li>
                <strong>Follow Medical Advice:</strong> Seek immediate help if you experience hearing-related symptoms after COVID.
              </li>
              <li>
                <strong>Avoid Self-Medication:</strong> Always consult a healthcare professional before taking medications.
              </li>
              <li>
                <strong>Manage Stress:</strong> Stress can exacerbate tinnitus and hearing issues. Try relaxation or mindfulness exercises.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE — POPULAR POSTS + CONTACT BOX */}
        <div className="space-y-8">
          {/* POPULAR POSTS */}
          <div className="bg-gray-100 p-7 rounded-lg shadow-sm">
            <h1 className="text-gray-800 text-xl font-semibold pb-3 border-b border-gray-300">
              Popular Posts
            </h1>

            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="py-3 flex gap-5 border-b border-gray-300 last:border-none"
              >
                <img
                  src={img1}
                  alt="Popular Post"
                  className="w-[160px] h-[80px] object-cover rounded-md"
                />
                <div>
                  <h1 className="text-gray-800 text-lg font-semibold">
                    Popular Post {item}
                  </h1>
                  <p className="text-gray-700 text-sm">
                    Building seamless and modern digital experiences.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT BOX */}
          <div className="bg-[--main-color] backdrop-blur-md p-8 text-center rounded-xl shadow-md">
            {/* Phone */}
            <div className="flex items-center justify-center space-x-4 mb-6 pr-14">
              <div className="bg-[#00bfff]/20 p-3 rounded-full text-2xl">📞</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black">Contact Us Free</h3>
                <p className="text-black font-medium">+91 9558231515</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-[#00bfff]/20 p-3 rounded-full text-2xl">✉️</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black">Mail Us Free</h3>
                <p className="text-black font-medium break-all">nandkishor45@gmail.com</p>
              </div>
            </div>

            {/* Button */}
            <button 
            onClick={() => navigate("/contact")}
            className="mt-2 bg-[#00bfff] hover:bg-[#0099cc] text-white font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
