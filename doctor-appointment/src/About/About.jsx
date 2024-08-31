import React, { useState } from 'react';
import './About.css';

const teamMembers = [
  {
    name: 'Dr. Alice Smith',
    photo: 'https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress-370x207.jpg',
    role: 'Chief Medical Officer',
  },
  {
    name: 'Dr. John Doe',
    photo: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww',
    role: 'Senior Surgeon',
  },
  {
    name: 'Dr. Emily Johnson',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eTLGFc9O499Uhj1nLbuK5cCxtPkHaRpa1A&s',
    role: 'Pediatric Specialist',
  },
];

const missionContent = [
  {
    title: 'Enhance Health and Well-Being',
    description: 'We aim to improve the overall health of our community by offering comprehensive medical care, preventive services, and health education.',
    image: 'https://static.vecteezy.com/system/resources/previews/010/516/497/non_2x/national-doctor-day-with-2-doctors-talking-concept-free-vector.jpg', // Add your image URL here
  },
  {
    title: 'Deliver Personalized Care',
    description: 'Every patient is unique, and we are committed to providing personalized care that respects individual needs and preferences. Our team of experts listens to and addresses each patient’s concerns with empathy and professionalism.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*H9Vp25egMx9PAYcw56V3tg.jpeg', // Add your image URL here
  },
  {
    title: 'Patient-Centered Care',
    description: 'We prioritize our patients well-being, offering personalized care plans that meet individual health needs and preferences.',
    image: 'https://guidewaycare.com/wp-content/uploads/2020/01/person-centered-care.jpg', // Add your image URL here
  },
  {
    title: 'Innovative Healthcare Solutions',
    description:'Our commitment to innovation drives us to implement the latest medical technologies and treatment methods for better patient outcomes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7DKvExxijKgTWFxv5TCcucmmjeS1uDR-Kw&s', // Add your image URL here
  },
  {
    title: 'Community Wellness',
    description:'We actively engage with our community to promote health education, preventive care, and wellness programs that benefit everyone',
    image: 'https://cdn.expresshealthcare.in/wp-content/uploads/2020/01/22122412/Doctors-consultation-e1724041879564.jpg', // Add your image URL here
  },
];

const About = () => {
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentMissionIndex((prevIndex) => (prevIndex + 1) % missionContent.length);
    } else {
      setCurrentMissionIndex((prevIndex) => (prevIndex - 1 + missionContent.length) % missionContent.length);
    }
  };

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We are dedicated to providing top-notch healthcare services to our community.</p>
      </section>

      <section className="about-content">
        <h2 className="centered">Our Mission</h2>
        <div className="mission-card-container">
          <div className="mission-card">
            <div className="mission-card-content">
              <h3>{missionContent[currentMissionIndex].title}</h3>
              <p>{missionContent[currentMissionIndex].description}</p>
              <img src={missionContent[currentMissionIndex].image} alt={missionContent[currentMissionIndex].title} />
            </div>
            <div className="mission-card-navigation">
              <button className="swipe-button" onClick={() => handleSwipe('right')}>❮</button>
              <button className="swipe-button" onClick={() => handleSwipe('left')}>❯</button>
            </div>
          </div>
        </div>

  <h2 className="centered">Why Choose Us?</h2>
<div className="centered-list">
  <div className="why-card">
    <h3>Experienced Doctors</h3>
    <p>Our team consists of highly experienced and compassionate professionals.</p>
  </div>
  <div className="why-card">
    <h3>State-of-the-Art Facilities</h3>
    <p>We use the latest technology to ensure the best possible care.</p>
  </div>
  <div className="why-card">
    <h3>Comprehensive Care</h3>
    <p>We offer a wide range of medical services for all age groups.</p>
  </div>
  <div className="why-card">
    <h3>Convenient Appointments</h3>
    <p>Booking appointments is easy and accessible through our platform.</p>
  </div>
</div>


        <h2 className="centered">Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} />
              <div className="team-card-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
