import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import './appoint.css'
const doctors = [
  {
    name: 'Dr. Smith',
    photo: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    availableTimings: '9:00 AM - 5:00 PM',
    feedback: 'Excellent care and patient-friendly.',
    details: 'Dr. Smith is a renowned cardiologist with over 20 years of experience.',
  },
  {
    name: 'Dr. Johnson',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqysf9G0X59qUqc5hgQsY7FGdGfoq7CMy1Aw&s',
    availableTimings: '10:00 AM - 6:00 PM',
    feedback: 'Highly knowledgeable and empathetic.',
    details: 'Dr. Johnson specializes in neurology and has 15 years of experience.',
  },
  {
    name: 'Dr. Johnson',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ335UJpVYYCJ0aP9D1qP_ukOwFqyDDUMahCg&s',
    availableTimings: '10:00 AM - 6:00 PM',
    feedback: 'Highly knowledgeable and empathetic.',
    details: 'Dr. Johnson specializes in neurology and has 15 years of experience.',
  },
  {
    name: 'Dr. Johnson',
    photo: 'https://cdn.punchng.com/wp-content/uploads/2023/09/20144750/Umoh-Michael-e1695217670244.jpeg',
    availableTimings: '10:00 AM - 6:00 PM',
    feedback: 'Highly knowledgeable and empathetic.',
    details: 'Dr. Johnson specializes in neurology and has 15 years of experience.',
  },
  {
    name: 'Dr. Johnson',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaKZculLwBrCdBQHrtJdpRjq5qzwZaMKlXA&s',
    availableTimings: '10:00 AM - 6:00 PM',
    feedback: 'Highly knowledgeable and empathetic.',
    details: 'Dr. Johnson specializes in neurology and has 15 years of experience.',
  },
  {
    name: 'Dr. Johnson',
    photo: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww',
    availableTimings: '10:00 AM - 6:00 PM',
    feedback: 'Highly knowledgeable and empathetic.',
    details: 'Dr. Johnson specializes in neurology and has 15 years of experience.',
  },
];

const AppointmentForm = () => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrData, setQRData] = useState('');
  const dataToEncode = JSON.stringify({ doctor, date, time });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      doctor,
      date,
      time,
      patientName,
      age,
      contact,
    };

    setQRData(JSON.stringify(formData));
    setShowQRCode(true);

    navigate('/confirmation', { state: formData });
  };

  return (
    <>
      <h2>Book a Doctor's Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>Select Doctor:</label>
        <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
          <option value="">Choose a doctor</option>
          {doctors.map((doc) => (
            <option key={doc.name} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>

        <label>Select Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Select Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <label>Patient Name:</label>
        <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />

        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label>Contact Number:</label>
        <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />

        <button type="submit">Book Appointment</button>
      </form>

      {showQRCode && (
        <div className="qr-code">
          <h3>Your Appointment QR Code</h3>
          <QRCodeSVG value={dataToEncode} size={250} />
        </div>
      )}

      <section className="doctor-cards">
        {doctors.map((doc) => (
          <article key={doc.name} className="doctor-card">
            <>
              <header className="doctor-card-head">
                <img src={doc.photo} alt={`${doc.name}`} />
                <h3>{doc.name}</h3>
              </header>
              <div className="doctor-card-body">
                <p><strong>Available Timings:</strong> {doc.availableTimings}</p>
                <p><strong>Feedback:</strong> {doc.feedback}</p>
                <p>{doc.details}</p>
              </div>
            </>
          </article>
        ))}
      </section>
    </>
  );
};

export default AppointmentForm;
