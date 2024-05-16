import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Slider from "react-slick";
import Modal from "react-modal";
import { FaAngleDoubleRight } from "react-icons/fa";
import './Course.css'

const CourseName = () => {
  const [trainings, setTrainings] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const client = createClient({
    space: "12qkvm4jqb2e",
    accessToken: "pgRRIDXKevCERzwL5l5VyDaygyU70L7PVuCRy4P5FrQ",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setTrainings(entries.items);
      } catch (error) {
        console.log(`Error fetching Training Programs ${error}`);
      }
    };
    getAllEntries();
  }, [client]);

  const openMailto = (training) => {
    if (training && training.fields && training.fields.trainingTitle) {
      const subject = `Enroll in the ${training.fields.trainingTitle} Training Program`;
      const encodedSubject = encodeURIComponent(subject);
      const yourEmail = "infolanze.tech@gmail.com";
      const encodedEmail = encodeURIComponent(yourEmail);
      const mailtoUrl = `mailto:${encodedEmail}?subject=${encodedSubject}`;
      window.location.href = mailtoUrl;
    } else {
      console.error(
        "Training object is undefined or does not contain required fields."
      );
    }
  };

  // Settings for the testimonial slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (training) => {
    setSelectedTraining(training);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTraining(null);
  };

  return (
    <div>
      <div className="bg-white lg:px-28 md:px-20 px-5 py-10">
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-semibold uppercase text-[--second-color] pb-10 text-center">
          Training Programs
        </h1>
        <Slider {...settings}>
          {trainings.map(
            (post, index) =>
              post &&
              post.fields &&
              post.fields.trainingTitle && (
                <div key={index}>
                  <div className="bg-[--main-color] rounded-2xl border border-[#eee] px-8 py-5 lg:m-3 md:m-3">
                    <div className="grid grid-cols-6">
                      <div className="xl:h-[100px] xl:w-[100px] lg:h-[250px] lg:w-[250px] md:h-[200px] h-[250px] w-full col-span-6 lg:col-span-6 xl:col-span-1 my-auto m-auto">
                        <img
                          src={post.fields.trainingImage.fields.file.url}
                          alt=""
                          className="w-full h-full rounded-xl"
                        />
                      </div>
                      <div className="col-span-6 lg:col-span-5 pl-2 md:pl-0 lg:pl-5 pt-2">
                        <h1 className="text-black text-lg md:text-xl lg:text-2xl">
                          {post.fields.trainingTitle}
                        </h1>
                        <p>
                          {post.fields.trainingDescription && (
                            <div className="text-ellipsis overflow-hidden line-clamp-2 text-gray-400 text-sm">
                              {documentToReactComponents(
                                post.fields.trainingDescription
                              )}
                            </div>
                          )}
                        </p>
                        <p className="py-2 flex text-sm">
                          <span>
                            <FaRegUser />
                          </span>
                          &nbsp; : {post.fields.trainingOpenings}
                        </p>
                        <button
                          className="text-[--second-color]"
                          onClick={() => openModal(post)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </Slider>
        {selectedTraining && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Training Details"
            className="modal"
            overlayClassName="overlay"
          >
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg m-auto relative">
              <button
                className="text-[--second-color] text-2xl border-2 border-[--second-color] rounded-md absolute right-5 top-0"
                onClick={closeModal}
              >
                <IoMdClose />
              </button>
              <h2 className="text-2xl mb-4">
                {selectedTraining.fields.trainingTitle}
              </h2>
              <div className="mb-4">
                <img
                  src={selectedTraining.fields.trainingImage.fields.file.url}
                  alt=""
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="mb-4">
                {documentToReactComponents(
                  selectedTraining.fields.trainingDescription
                )}
              </div>
              <p className="py-2 flex text-sm mb-5">
                <span>
                  <FaRegUser />
                </span>
                &nbsp; : {selectedTraining.fields.trainingOpenings}
              </p>
              <button
                className="rounded-full p-3 px-7 text-sm bg-[--second-color] transition duration-300 ease-in-out  text-white hover:text-black hover:border-[--second-color] hover:border hover:bg-white flex items-center"
                onClick={() => openMailto(selectedTraining)}
              >
                Apply Now&nbsp;&nbsp;
                <FaAngleDoubleRight />
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CourseName;
