import React from 'react'
import HeroCourses from '../Components/Courses/HeroCourses';
import OfferedCourses from '../Components/Courses/OfferedCourses';
import DetailedCourse from '../Components/Courses/DetailedCourse';
import KeypointCourse from '../Components/Courses/KeypointCourse';
import CourseName from '../Components/Courses/CourseName';

const Courses = () => {
  return (
    <div className='font-family'>
        <HeroCourses />
        <OfferedCourses/>
        <DetailedCourse/>
        <KeypointCourse/>
        <CourseName/>
    </div>
  )
}

export default Courses;