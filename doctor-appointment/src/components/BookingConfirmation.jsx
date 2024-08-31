import React from 'react';
import { useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const BookingConfirmation = () => {
  const location = useLocation();
  const { doctor, date, time } = location.state;

  // Encode the appointment details for the QR code
  const dataToEncode = JSON.stringify({ doctor, date, time });

  return (
    <div className="booking-confirmation">
      <h2>Appointment Confirmed</h2>
      <p>Doctor: {doctor}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      
      <h3>Scan the QR Code to Save Your Appointment Details:</h3>
      <div className="qr-code">
        <QRCodeSVG value={dataToEncode} size={250} />
      </div>
    </div>
  );
};

export default BookingConfirmation;
