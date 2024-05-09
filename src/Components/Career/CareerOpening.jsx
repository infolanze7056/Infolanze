import React, { useState, useEffect } from "react";
import img1 from "../../Images/Superior-Support.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { createClient } from "contentful";

function CareerOpening() {
  const [Jobs, setJobs] = useState([]);
  const client = createClient({
    space: "12qkvm4jqb2e",
    accessToken: "pgRRIDXKevCERzwL5l5VyDaygyU70L7PVuCRy4P5FrQ",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setJobs(entries.items);
      } catch (error) {
        console.log(`Error fetching Jobs ${error}`);
      }
    };
    getAllEntries();
  }, [client]);

  const openPopup = (Jobs) => {
    if (Jobs && Jobs.fields && Jobs.fields.jobTitle) {
      const subject = `Applying for the position of ${Jobs.fields.jobTitle}`;
      const encodedSubject = encodeURIComponent(subject);
      const yourEmail = "infolanze.tech@gmail.com";
      const encodedEmail = encodeURIComponent(yourEmail);
      const mailtoUrl = `mailto:${encodedEmail}?subject=${encodedSubject}`;
      window.location.href = mailtoUrl;
    } else {
      console.error(
        "Job object is undefined or does not contain required fields."
      );
    }
  };

  return (
    <div className="font-family">
      <div className="lg:px-28 md:px-20 px-5 py-16">
        <div>
          <div className="text-4xl font-semibold uppercase text-center pb-10">
            Current Openings Us?
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {Jobs.map(
            (post, index) =>
              post &&
              post.fields &&
              post.fields.jobTitle && (
                <div
                  key={index}
                  className="bg-[--main-color] rounded-lg lg:p-10 md:p-10 p-5"
                >
                  <div>
                    <img className="w-20" src={img1} alt="img" />
                  </div>
                  <div className="pt-4 text-xl font-semibold pb-3">
                    {post.fields.jobTitle}
                  </div>
                  <div className="flex items-center">
                    <div className="border-e-2 border-gray-500 pe-2">
                      Experience: {post.fields.jobRequirements}
                    </div>
                    <div className="ps-2">
                      No. of Openings: {post.fields.jobOpenings}
                    </div>
                  </div>
                  <div className="pt-5">
                    <button
                      className="rounded-full p-3 px-7 text-sm bg-[--second-color] transition duration-300 ease-in-out  text-white hover:text-black hover:bg-white flex items-center"
                      onClick={() => openPopup(post)}
                    >
                      Apply Now&nbsp;&nbsp;
                      <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerOpening;
