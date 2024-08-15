// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import '../assets/styles/Home.css';

const Home = ({ courses }) => {
  const featuredCourses = courses.slice(0, 10); // Display only the first 10 courses

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Digital Edukh</h1>
          <p>Your trusted platform for mastering the art of teaching and learning. Join us and start your journey to becoming a professional educator.</p>
          <Link to="/about" className="hero-button">Learn More About Us</Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me-section">
        <h2>About Me</h2>
        <p>As a professional educator with years of experience, I am passionate about teaching and helping students achieve their goals. My expertise includes web development, data science, machine learning, and more.</p>
        <ul>
          <li>💻 Web Development: Mastered full-stack web development with HTML, CSS, JavaScript, and React.</li>
          <li>📊 Data Science: Proficient in Python, data analysis, and machine learning.</li>
          <li>🧠 Machine Learning: Experienced in building and deploying machine learning models.</li>
          <li>🎨 UI/UX Design: Skilled in designing user-friendly and aesthetically pleasing interfaces.</li>
        </ul>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses-section">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <Link to="/courses" className="see-more-button">See More Courses</Link>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
