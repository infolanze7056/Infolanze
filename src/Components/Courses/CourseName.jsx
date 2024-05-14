import React,{useEffect,useState} from 'react';
import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaAngleDoubleRight } from "react-icons/fa";
const CourseName = () => {
    const [Trainings, setTrainings] = useState([]);
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
        console.log(`Error fetching Trainings Programs ${error}`);
      }
    };
    getAllEntries();
  }, [client]);

  const openPopup = (Trainings) => {
    if (Trainings && Trainings.fields && Trainings.fields.trainingTitle) {
      const subject = `Enroll This Training Programs  of ${Trainings.fields.trainingTitle}`;
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
    <div>
       <div className='bg-white lg:px-28 md:px-20 px-5 py-10'>
        <h1 className='lg:text-4xl md:text-4xl text-2xl font-semibold uppercase text-[--second-color] pb-10 text-center'>Training Programs</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
            {Trainings.map((post,index) => post && post.fields && post.fields.trainingTitle &&(
              <div key={index} className="flex">
              <div className="border border-[#eeeeee]  rounded-2xl flex-1">
                <div className='w-full h-[250px] md:h-52 lg:h-72'>
              <img
                      src={post.fields.trainingImage.fields.file.url}
                      alt=""
                      className="rounded-t-2xl w-full h-full"
                    />
                    </div>
                    <div className='px-5 py-3'>
                    <h1 className="text-2xl  text-[--second-color] pb-2">{post.fields.trainingTitle}</h1>
<p className='text-sm'> {documentToReactComponents(post.fields.trainingDescription)}</p>
<div className="py-5">
                    <button
                      className="rounded-full p-3 px-7 mt text-sm bg-[--second-color] transition duration-300 ease-in-out  text-white hover:text-black hover:bg-[--main-color] flex items-center"
                      onClick={() => openPopup(post)}
                    >
                      
                      Enroll Now&nbsp;&nbsp;
                      <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
                </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default CourseName
