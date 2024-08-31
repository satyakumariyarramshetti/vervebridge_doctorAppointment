import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import AppointmentForm from './components/AppointmentForm';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
