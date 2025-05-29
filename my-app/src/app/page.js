'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';


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
      <div className="mt-10 relative max-w-[580px] max-h-[500px] ml-[2rem]  md:ml-0 max-w-full md:max-w-[900px] lg:ml-15 xl:max-w-full mr-10 ">
        <Image
          src="/ban2.webp"
          width={1300}
          height={400}
          alt="Banner Image"
          className="w-full h-[150px] sm:mx-auto sm:w-[300px]  md:w-full md:h-[250px] xl:w-full  rounded object-cover"
        />

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mt-10 px-4">
          <p className="text-sm sm:text-base ml-35 md:text-xl md:ml-35 xl:text-xl 2xl:text-2xl font-bold whitespace-nowrap text-left sm:text-center md:text-left sm:ml-0 md:ml-10">
            OUR ONLY PLAN IS TO MAKE SURE YOU KEEP YOURS
          </p>

          <p className="text-xs sm:text-sm ml-35 md:text-lg md:ml-35 xl:text-xl 2xl:text-2xl font-bold whitespace-nowrap text-left sm:text-center md:text-left mt-2 sm:ml-0 md:ml-10">
            SAVE 20% or more on pay now rates + an extra <br />
            $15 off when you spend $175+.
          </p>

          <div className="flex justify-start sm:justify-center ml-35 md:justify-start md:ml-35  mt-3 ">
            <button className="btn btn-dark px-3 py-1 text-xs sm:text-sm md:text-base xl:text-xl px-4 py-2 2xl:text-2xl">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>






      {/* offers */}

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between w-[90%] mx-auto gap-4 sm:gap-0">
        {/* Left Content */}
        <div className="w-full sm:w-8/12 md:w-9/12">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 text-left sm:text-left">
            EXPLORE ALL THE WAYS YOU CAN SAVE
          </p>
          <p className="text-sm sm:text-base text-gray-600 text-left sm:text-left">
            Save on your next daily or monthly car rental with these deals and offers.
          </p>
        </div>

        {/* Button */}
        <div className="w-full sm:w-4/12 md:w-3/12 flex sm:justify-end justify-center">
          <a
            href="https://www.avis.com/en/offers/us-offers?ICID=av-all-220322-hp-offerheadbtn-usoffers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto"
            >
              VIEW ALL OFFERS
            </button>
          </a>
        </div>
      </div>

      {/* Sale */}

      <div className="mt-20 mx-5 md:mx-20">
        <div className="flex flex-col sm:flex-col md:flex-row  gap-4">
          {/* Card 1 */}
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 bg-black rounded overflow-hidden">
            <div className="relative h-[200px] md:h-[250px]">
              <Image
                src="/sale1.webp"
                alt="Summer Sale"
                layout="fill"
                objectFit="cover"
                className="rounded-t"
              />
            </div>
            <div className="p-4 bg-white text-center space-y-2">
              <h3 className="text-lg font-bold text-black">LIMITED TIME SUMMER SALE</h3>
              <p className="text-sm text-black">Get a FREE UPGRADE + up to 35% off Pay Now.</p>
              <Link href="https://www.avis.com/en/offers/us-offers/summer-sale?ICID=av-all-250521-hp-s1-summersale">
                <button className="btn btn-primary btn-primary-avis mt-2 px-4 py-2 text-sm">Save now</button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 bg-black rounded overflow-hidden">
            <div className="relative h-[200px] md:h-[250px]">
              <Image
                src="/sale2.webp"
                alt="Summer Sale"
                layout="fill"
                objectFit="cover"
                className="rounded-t"
              />
            </div>
            <div className="p-4 bg-white text-center space-y-2">
              <h3 className="text-lg font-bold text-black">LIMITED TIME SUMMER SALE</h3>
              <p className="text-sm text-black">Get a FREE UPGRADE + up to 35% off Pay Now.</p>
              <Link href="https://www.avis.com/en/offers/us-offers/summer-sale?ICID=av-all-250521-hp-s1-summersale">
                <button className="btn btn-primary btn-primary-avis mt-2 px-4 py-2 text-sm">Save now</button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 bg-black rounded overflow-hidden">
            <div className="relative h-[200px] md:h-[250px]">
              <Image
                src="/sale3.webp"
                alt="Summer Sale"
                layout="fill"
                objectFit="cover"
                className="rounded-t"
              />
            </div>
            <div className="p-4 bg-white text-center space-y-2">
              <h3 className="text-lg font-bold text-black">LIMITED TIME SUMMER SALE</h3>
              <p className="text-sm text-black">Get a FREE UPGRADE + up to 35% off Pay Now.</p>
              <Link href="https://www.avis.com/en/offers/us-offers/summer-sale?ICID=av-all-250521-hp-s1-summersale">
                <button className="btn btn-primary btn-primary-avis mt-2 px-4 py-2 text-sm">Save now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* benifit travel partner */}

      <div className="ml-5 sm:ml-10 md:ml-20 mt-10">
        <h1 className="font-bold text-lg md:text-xl mb-10">
          BENEFITS FROM OUR TRAVEL PARTNERS
        </h1>

        <div className="mx-4 mt-5  sm:mx-8 md:mx-20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row w-full lg:w-2/3 ">
              <div
                className="sm:w-1/3 h-[150px] bg-cover bg-center"
                style={{ backgroundImage: "url('/amazon.webp')" }}
              ></div>
              <div className="p-4 sm:w-2/3 text-left space-y-2 flex flex-col justify-center">
                <p className="text-sm text-black">
                  Get up to 35% OFF your rental when you Pay Now, plus earn more with 10% BACK in an Amazon.com Gift Card.
                </p>
                <Link href="https://www.avis.com/en/offers/partners/amazon-benefits?ICID=av-all-220322-hp-s4-amazon">
                  <button className="btn btn-primary-avis mt-2 px-4 py-2 text-sm font-bold">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row w-full lg:w-2/3 ">
              <div
                className="sm:w-1/3 h-[150px] bg-cover bg-center"
                style={{ backgroundImage: "url('/member.webp')" }}
              ></div>
              <div className="p-4 sm:w-2/3 text-left space-y-2 flex flex-col justify-center">
                <p className="text-sm text-black">
                  Get up to 35% OFF your rental when you Pay Now, plus earn more with 10% BACK in an Amazon.com Gift Card.
                </p>
                <Link href="https://www.avis.com/en/offers/partners/amazon-benefits?ICID=av-all-220322-hp-s4-amazon">
                  <button className="btn btn-primary-avis mt-2 px-4 py-2 text-sm font-bold">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row w-full lg:w-2/3 ">
              <div
                className="sm:w-1/3 h-[150px] bg-cover bg-center"
                style={{ backgroundImage: "url('/usa.webp')" }}
              ></div>
              <div className="p-4 sm:w-2/3 text-left space-y-2 flex flex-col justify-center">
                <p className="text-sm text-black">
                  Get up to 35% OFF your rental when you Pay Now, plus earn more with 10% BACK in an Amazon.com Gift Card.
                </p>
                <Link href="https://www.avis.com/en/offers/partners/amazon-benefits?ICID=av-all-220322-hp-s4-amazon">
                  <button className="btn btn-primary-avis mt-2 px-4 py-2 text-sm font-bold">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sales */}

      <div
        className="bg-cover bg-center bg-no-repeat opacity-100 mt-10"
        style={{
          backgroundImage: "url('/car1.webp')",
        }}
      >
        <div className="text-white   w-50 h-50 text-white px-4 sm:px-10 md:px-20 py-10 space-y-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            AVIS CAR SALES
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Explore our wide selection of top-quality, budget-friendly vehicles.
          </p>
          <a
            href="https://www.aviscarsales.com/?utm_source=avis.com-banner&utm_medium=referral"
            target="_blank"
          >
            <button className="btn bg-danger text-light btn-primary-avis px-6 py-2 text-sm font-semibold mt-2">
              Shop Now
            </button>
          </a>

          <p className="text-3xl sm:text-4xl md:text-5xl font-bold pt-8">
            RUBYCAR.COM
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            100% Online Car Buying Delivered Straight to Your Door!
          </p>
          <a
            href="https://www.ruby-car.com/?utm_source=avis.com-banner&utm_medium=referral"
            target="_blank"
          >
            <button className="btn bg-danger text-light btn-primary-avis px-6 py-2 text-sm font-semibold mt-2">
              Shop Now
            </button>
          </a>
        </div>
      </div>


      {/* cities */}

      <div className="mt-30 flex flex-col sm:flex-row items-start sm:items-center justify-between w-[90%] mx-auto gap-4 sm:gap-0 mb-20">
        {/* Left Content */}
        <div className="w-full sm:w-8/12 md:w-9/12">
          <h1 className="text-lg sm:text-xl font-bold  text-left sm:text-left">
            FIND YOUR CAR RENTAL IN POPULAR CITIES
          </h1>

        </div>

        {/* Button */}
        <div className="w-full sm:w-4/12 md:w-3/12 flex sm:justify-end justify-center">
          <a
            href="https://www.avis.com/en/offers/us-offers?ICID=av-all-220322-hp-offerheadbtn-usoffers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto"
            >
              VIEW ALL LOCATIONS
            </button>
          </a>
        </div>
      </div>

      {/* cities-links */}

      <div className="text-red-600 font-semibold  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 md:px-20 mt-10 ml-10 ">
        {/* Column 1 */}
        <div>
          <Link href="#" className="text-red-600 block  mb-1">Car Rentals in Atlanta, GA</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Boston, MA</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Charlotte, NC</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Albuquerque, NM</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Brooklyn, NY</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Charleston, SC</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Anchorage, AK</Link>
        </div>

        {/* Column 2 */}
        <div>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Austin, TX</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Chicago, IL</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Dallas, TX</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Denver, CO</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Colorado Springs, CO</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Columbus, OH</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Fort Lauderdale, FL</Link>
        </div>

        {/* Column 3 */}
        <div>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Las Vegas, NV</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Miami, FL</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Los Angeles, CA</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Houston, TX</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Kauai, HI</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Honolulu, HI</Link>
          <Link href="#" className="text-red-600 block mb-1">Car Rentals in Nashville, TN</Link>
        </div>
      </div>


      {/* popular airports */}

      <div className="mt-30 flex flex-col sm:flex-row items-start sm:items-center justify-between w-[90%] mx-auto gap-4 sm:gap-0">
        {/* Left Content */}
        <div className="w-full sm:w-8/12 md:w-9/12">
          <h1 className="text-lg sm:text-xl font-bold  text-left sm:text-left ">
            FIND YOUR CAR RENTAL AT POPULAR AIRPORTS
          </h1>

        </div>

        {/* Button */}
        <div className="w-full sm:w-4/12 md:w-3/12 flex sm:justify-end justify-center">
          <a
            href="https://www.avis.com/en/offers/us-offers?ICID=av-all-220322-hp-offerheadbtn-usoffers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto"
            >
              VIEW ALL AIRPORTS
            </button>
          </a>
        </div>
      </div>
      
      {/* airports-link */}

      <div className="font-semibold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 md:px-20 mt-10 ml-10 mb-20">
        {/* Column 1 */}
        <div>
          <Link href="#" className="text-red-600 block  mb-1">Orlando International Airport (MCO)</Link>
          <Link href="#" className="text-red-600 block mb-1">Los Angeles International Airport (LAX)</Link>
          <Link href="#" className="text-red-600 block mb-1">Denver International Airport (DEN)</Link>
         </div>

        {/* Column 2 */}
        <div>
          <Link href="#" className="text-red-600 block mb-1">Atlanta International Airport (ATL)</Link>
          <Link href="#" className="text-red-600 block mb-1">Dallas/Fort Worth International Airport (DFW)</Link>
          <Link href="#" className="text-red-600 block mb-1">San Francisco International Airport (SFO)</Link>
          </div>

        {/* Column 3 */}
        <div>
          <Link href="#" className="text-red-600 block mb-1">Chicago O’Hare International Airport (ORD)</Link>
          <Link href="#" className="text-red-600 block mb-1">Boston Logan International Airport (BOS)</Link>
          <Link href="#" className="text-red-600 block mb-1">San Diego International Airport (SAN)</Link>
          <Link href="#" className="text-red-600 block mb-1">Miami International Airport (MIA)</Link>
        </div>
      </div>

    </div>
  );
}
