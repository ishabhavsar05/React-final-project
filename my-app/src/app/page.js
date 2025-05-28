'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Home() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState('12:00 PM');
  const [returnTime, setReturnTime] = useState('12:00 PM');
  const [age, setAge] = useState('');
  const [showReturnSection, setShowReturnSection] = useState(false);

  const timeOptions = [
    '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM',
    '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM',
    '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
  ];

  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 18);

  function handlePickupFocus() {
    setShowReturnSection(true);
  }

  function handleSelectCar() {
    const data = {
      pickupLocation,
      dropLocation,
      pickupDate: format(pickupDate, 'MM/dd/yyyy'),
      returnDate: format(returnDate, 'MM/dd/yyyy'),
      pickupTime,
      returnTime,
      age,
    };
    console.log('Selected Details:', data);
    alert('Car selected! Check console for details.');
  }

  return (
    <div>
      {/* ban1 */}
      <div className="pt-5 bg-red-700 pb-4" style={{ minHeight: '80vh' }}>
        <div className="container pt-5 mt-10">
          <h1 className="text-center text-white fw-bold mb-4 ">
            FIND YOUR BEST CAR RENTAL WITH AVIS
          </h1>

          {/* Background only behind this container */}
          <div
            className="rounded p-4 mx-auto"
            style={{
              maxWidth: '960px',

              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              zIndex: 0,
            }}
          >
            {/* Add a semi-transparent white overlay for readability */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '0.25rem',
                padding: '1rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Pick-up Section */}
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <input
                    type="text"
                    placeholder="Enter pick-up location or zip code"
                    className="form-control"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    onFocus={handlePickupFocus}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => setPickupDate(date)}
                    className="form-control"
                    placeholderText="mm/dd/yyyy"
                  />
                  <small className="text-muted d-block mt-1">
                    Selected: {format(pickupDate, 'MM/dd/yyyy')}
                  </small>
                </div>
                <div className="col-12 col-md-4">
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="form-select"
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Return Section */}
              <div
                className={`overflow-hidden transition-all mt-4 ${showReturnSection ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{
                  maxHeight: showReturnSection ? '600px' : '0',
                  transition: 'all 0.5s ease-in-out',
                }}
              >
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-4">
                    <input
                      type="text"
                      placeholder="Return to same location"
                      className="form-control"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                      className="form-control"
                      placeholderText="mm/dd/yyyy"
                    />
                    <small className="text-muted d-block mt-1">
                      Selected: {format(returnDate, 'MM/dd/yyyy')}
                    </small>
                  </div>
                  <div className="col-12 col-md-4">
                    <select
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      className="form-select"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <label htmlFor="ageSelect" className="form-label">
                    Age:
                  </label>
                  <select
                    id="ageSelect"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select your age</option>
                    {ageOptions.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Select Car Button */}
          <div className="text-center mt-4">
            <button onClick={handleSelectCar} className="btn btn-dark px-4 py-2">
              Select My Car
            </button>
          </div>
        </div>
      </div>

      {/* ban2 */}
      <div>
        <div className="mt-10 relative max-w-full overflow-hidden ml-[6.25rem] sm:ml-[0rem] md:ml-[0rem]">
          {/* ml-25 નું equivalent Tailwind માં ml-[100px] કે custom value આપો, Tailwind default ના scaleમાં ml-25 નથી, એટલે custom value આપી */}

          <Image
            src="/ban2.webp"
            width={1300}
            height={500}
            alt="Banner Image"
            className="w-full h-auto rounded object-cover"
          />

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mt-10 px-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap sm:ml-5 md:ml-10">
              OUR ONLY PLAN IS TO MAKE SURE YOU KEEP YOURS
            </p>
            <p className="text-sm sm:text-lg md:text-xl font-bold whitespace-nowrap sm:ml-5 md:ml-10 text-left mt-2">
              SAVE 20% or more on pay now rates + an extra <br className="hidden sm:block" />
              $15 off when you spend $175+.
            </p>

            <button className="btn btn-dark px-3 py-2 mt-3 text-sm md:text-base">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>





      {/* offers */}

      <div className='ml-20'>
        <div>
          <h1>
            EXPLORE ALL THE WAYS YOU CAN SAVE
          </h1>
          <p>

          </p>
        </div>
      </div>
    </div>
  );
}
