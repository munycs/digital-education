// src/pages/Courses.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import '../assets/styles/Courses.css';

const Courses = ({ courses }) => {
  return (
    <div>
      <h1>Our Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
