import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const tips = [
  {
    name: 'Dr. Alice Smith',
    tip: 'Stay hydrated. Aim for at least 8 glasses of water a day.',
    contact: 'alice.smith@example.com',
    phone: '123-456-7890',
    availability: 'Monday - Friday, 10:00 AM - 2:00 PM',
  },
  {
    name: 'Dr. John Doe',
    tip: 'Engage in 30 minutes of exercise daily.',
    contact: 'john.doe@example.com',
    phone: '123-456-7891',
    availability: 'Tuesday - Saturday, 8:00 AM - 12:00 PM',
  },
  {
    name: 'Dr. Emily Johnson',
    tip: 'Eat a balanced diet with a variety of foods.',
    contact: 'emily.johnson@example.com',
    phone: '123-456-7892',
    availability: 'Monday - Thursday, 9:00 AM - 1:00 PM',
  },
];

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor === selectedDoctor ? null : doctor);
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to HealthCare</h1>
        <p>Your health is our priority. Book an appointment with our experienced doctors today.</p>
        <Link to="/appointment" className="cta-button">Get Appointment</Link>
      </section>

      <section className="blood-donation">
        <h2>Blood Donation & Blood Banks</h2>
        <div className="card-container">
          <article className="card">
            <h3>Find a Blood Bank</h3>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvJcSJ2toCjLhWrxiXov3vZDonSxVkq229Q&s' alt='Blood Bank'/>
            <p>Locate nearby blood banks and make a lifesaving donation today.</p>
            <Link to="/blood-banks" className="card-link">Find Blood Banks</Link>
          </article>
          <article className="card">
            <h3>Donate Blood</h3>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdSRm5q6F1y4oqZmwEDosMAAWoCWr_rK3mA&s' alt='Donate Blood'/>
            <p>Your blood donation can save lives. Learn how you can help.</p>
            <Link to="/donate-blood" className="card-link">Donate Blood</Link>
          </article>
        </div>
      </section>

      <section className="daily-tips">
        <h2>Daily Tips from Our Doctors</h2>
        <div className="card-container">
          {tips.map((doctor, index) => (
            <article
              key={index}
              className={`card ${selectedDoctor === doctor ? 'active' : ''}`}
              onClick={() => handleCardClick(doctor)}
            >
              <h3>{doctor.name}</h3>
              <p>{doctor.tip}</p>
              <div className={`card-layer ${selectedDoctor === doctor ? 'visible' : ''}`}>
                <p><strong>Contact:</strong> {doctor.contact}</p>
                <p><strong>Phone:</strong> {doctor.phone}</p>
                <p><strong>Availability:</strong> {doctor.availability}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="user-feedback">
        <h2>What Our Users Say</h2>
        <div className="card-container">
          <article className="card">
            <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2pvYjYwMi01OC5qcGc.jpg' alt='User Feedback' width='100px' height='150px' style={{borderRadius:"10%"}}/>
            <p>"The doctors were very attentive and provided excellent care."</p>
            <p>- Sarah W.</p>
          </article>
          <article className="card">
            <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2pvYjYwMi01OC5qcGc.jpg' alt='User Feedback'/>
            <p>"Booking an appointment was so easy and quick!"</p>
            <p>- John D.</p>
          </article>
          <article className="card">
            <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2pvYjYwMi01OC5qcGc.jpg' alt='User Feedback'/>
            <p>"I appreciate the health tips shared by the doctors."</p>
            <p>- Emily R.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
