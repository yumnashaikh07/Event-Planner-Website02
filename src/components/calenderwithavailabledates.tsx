"use client"

import Link from "next/link";
import { useState } from 'react';
import Flatpickr from 'react-flatpickr'; 
import 'flatpickr/dist/flatpickr.css';
const mockAvailableDatesWithSlots = [
  { date: new Date(2024, 10, 30), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 3), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 4), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 5), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 6), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 7), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 8), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 9), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  { date: new Date(2024, 11, 10), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    {date: new Date(2024, 11, 2), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 20), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 23), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 24), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] }, 
    { date: new Date(2024, 11, 25), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 26), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 27), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 28), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 29), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 11, 30), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 12, 6), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 12, 16), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2024, 12, 26), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2025, 1, 2), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2025, 1, 4), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
    { date: new Date(2025, 1, 6), slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:30 PM"] },
  
];

export default function FlatpickrWithSlots() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const selected = mockAvailableDatesWithSlots.find(
      (entry) => entry.date.toDateString() === date.toDateString()
    );
    setAvailableSlots(selected?.slots || []);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-thin text-center text-[#c0a249] font mb-8">Select Date and Time Slot</h1>
        <Flatpickr
          value={selectedDate}
          onChange={(date) => handleDateChange(date[0])}
          options={{
            inline: true,
            minDate: new Date(),
            dateFormat: 'Y-m-d',
            locale: {
              firstDayOfWeek: 1, 
              weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              },
              months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
              },
            },
          }}
          
          className="w-72 p-4 border mb-5 rounded-lg shadow-lg text-[#c0a249] font "
        />
      {selectedDate && availableSlots.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-thin text-[#c0a249] text-center mb-4">
            Available Slots for {selectedDate.toDateString()}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {availableSlots.map((slot, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-[#c0a249] border-[#c0a249] border-2 rounded-lg hover:bg-[#d6bd73] focus:ring-2 focus:ring-white"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
<div className="mt-8 text-center">
  {selectedDate && availableSlots.length > 0 && (
    <Link
      href={{
        pathname: '/bookingform', 
        query: { date: selectedDate.toDateString(), slot: availableSlots[0] },
      }}
      passHref
    >
      <button className="px-6 py-2 bg-[#d6bd73] text-white rounded-lg hover:bg-[#d6bd73]">
        Next
      </button>
    </Link>
  )}
</div>

  {selectedDate && availableSlots.length === 0 && (
      <p className="mt-4 text-center text-lg text-gray-500">No available slots for this date.</p>
     )}   </div>
 );
 } 





