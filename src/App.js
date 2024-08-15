// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import image1 from './assets/images/image1.jpeg'; // Import the image
import image2 from './assets/images/image2.jpeg'; // Import the image

const App = () => {
  const [courses] = useState([
    { id: 1, title: 'Web Development Bootcamp', description: 'Learn to build modern web applications using HTML, CSS, JavaScript, and more.', image: image1 },
    { id: 2, title: 'Data Science with Python', description: 'Master data science concepts and tools with Python.', image: image2 },
    { id: 3, title: 'Introduction to Machine Learning', description: 'Explore the fundamentals of machine learning and build your first models.', image: image1 },
    { id: 4, title: 'UI/UX Design Essentials', description: 'Learn the principles of design to create user-friendly interfaces.', image: image1 },
    { id: 5, title: 'Digital Marketing Masterclass', description: 'Become an expert in digital marketing strategies.', image: image1 },
    { id: 6, title: 'Mobile App Development', description: 'Create your own mobile apps using React Native and Flutter.', image: image1 },
    { id: 7, title: 'Cloud Computing with AWS', description: 'Understand the basics of cloud computing with Amazon Web Services.', image: image1 },
    { id: 8, title: 'Cybersecurity Fundamentals', description: 'Learn how to protect systems and networks from cyber threats.', image: image1 },
    { id: 9, title: 'Blockchain Technology', description: 'Get introduced to blockchain and its applications.', image: image1 },
    { id: 10, title: 'Artificial Intelligence Basics', description: 'An introductory course on AI concepts and practices.', image: image1 },
    { id: 11, title: 'Big Data Analytics', description: 'Learn to analyze and interpret large datasets.', image: image1 },
    { id: 12, title: 'Agile Project Management', description: 'Master Agile methodologies for project management.', image: image1 },
    { id: 13, title: 'Internet of Things (IoT)', description: 'Understand IoT and its role in the future of technology.', image: image1 },
    { id: 14, title: 'Ethical Hacking', description: 'Learn the techniques used by ethical hackers to protect systems.', image: image1 },
    { id: 15, title: 'Game Development with Unity', description: 'Create immersive games using the Unity engine.', image: image1 },
    { id: 16, title: 'Financial Analysis with Excel', description: 'Analyze financial data and make informed decisions using Excel.', image: image1 },
    { id: 17, title: 'E-commerce Business Essentials', description: 'Learn how to set up and manage a successful e-commerce business.', image: image1 },
    { id: 18, title: 'Content Writing and SEO', description: 'Become a skilled content writer and optimize content for search engines.', image: image1 },
    { id: 19, title: 'Photography for Beginners', description: 'Master the basics of photography with practical tips and techniques.', image: image1 },
    { id: 20, title: 'Public Speaking and Presentation Skills', description: 'Enhance your public speaking and presentation skills.', image: image1 },
  ]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/courses/:id" element={<CourseDetail courses={courses} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
