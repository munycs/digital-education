// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`}>Learn More</Link>
    </div>
  );
};

export default CourseCard;
