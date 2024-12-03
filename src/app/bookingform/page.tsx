"use client";

import { useState, useEffect } from "react";

const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  // Use useEffect to parse query parameters after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setDate(urlParams.get("date"));
      setSlot(urlParams.get("slot"));
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const bookingData = {
      fullName,
      email,
      phone,
      message,
      venueAddress,
      date,
      slot,
    };

    // Submit the data to your API
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      alert("Your booking has been confirmed!");
       
    }
     else {
      alert("There was an error with your booking. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-5xl font-extralight font text-center text-[#c0a249] mb-6">Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-[#c0a249] mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 border focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label className="text-[#c0a249] mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border  focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label className="text-[#c0a249] mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 border focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label className="text-[#c0a249] mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border focus:outline-none "
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="text-[#c0a249] mb-2">Venue Address</label>
          <input
            type="text"
            value={venueAddress}
            onChange={(e) => setVenueAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border focus:outline-none "
          />
        </div>

        <button type="submit" className="w-full px-6 py-2 bg-[#c0a249] hover:bg-white hover:text-[#c0a249] border-[#c0a249] border-2 text-white font rounded-md">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;









