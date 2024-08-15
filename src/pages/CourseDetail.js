// src/pages/CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/CourseDetail.css';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
