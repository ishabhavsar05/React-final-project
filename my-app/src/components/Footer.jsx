import React from 'react';

export const Footer = () => {
  return (
    <>
      <style>{`
        .footer-link {
          color: white !important;
          text-decoration: none !important;
        }
        .footer-link:hover {
          color: white !important;
          text-decoration: none !important;
        }
        .min-w-150px {
          min-width: 150px;
        }
      `}</style>

      <div className="bg-dark text-white py-4 px-3 px-md-5 w-100">
        <div className="d-flex flex-column ml-10 sm: flex-md-row flex-wrap gap-10 mt-4">
          {/* COLUMN 1 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">TOP DESTINATIONS</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>

          {/* COLUMN 2 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">RENTAL CAR TYPES</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>

          {/* COLUMN 3 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">AVIS EXTRAS</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>

          {/* COLUMN 4 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">AVIS PARTNERS</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>

          {/* COLUMN 5 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">COMPANY INFO</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>

          {/* COLUMN 6 */}
          <div className="min-w-150px mb-3">
            <h2 className="fw-bold fs-5">SECURITY & PRIVACY</h2>
            <a href="#" className="footer-link d-block mt-3 small">Travel Guides</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Las Vegas</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Los Angeles</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Chicago</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Orlando</a>
            <a href="#" className="footer-link d-block mt-2 small">Car Rental Miami</a>
          </div>
        </div>

        {/* SELECT DROPDOWN SECTION */}
        <div className="mt-4 d-flex flex-column flex-sm-row gap-3 gap-sm-4 px-0 ps-sm-3">
          <select className="form-select w-100 w-sm-auto text-dark py-2 px-3 cursor-pointer">
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>---------------------------------</option>
            <option>Argentina</option>
            <option>Armenia</option>
            <option>Austria</option>
            <option>Bahamas</option>
            <option>Belgium</option>
            <option>Bosnia</option>
            <option>Brazil</option>
            <option>China</option>
            <option>Bulgaria</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Croatia</option>
            <option>Denmark</option>
            <option>Dominican Republic</option>
            <option>Ecuador</option>
            <option>El Salvador</option>
            <option>Faroe Islands</option>
            <option>Fiji</option>
            <option>Finland</option>
            <option>France</option>
            <option>Germany</option>
            <option>Guadeloupe</option>
            <option>Guam</option>
            <option>Honduras</option>
            <option>Hong Kong</option>
            <option>Hungary</option>
            <option>India</option>
            <option>Indonesia</option>
            <option>Ireland</option>
            <option>Israel</option>
            <option>Italy</option>
            <option>Jamaica</option>
            <option>Japan</option>
            <option>Korea</option>
            <option>Kuwait</option>
            <option>Lebanon</option>
            <option>Macedonia</option>
            <option>Malaysia</option>
            <option>Martinique</option>
            <option>Mexico</option>
            <option>Mongolia</option>
            <option>Morocco</option>
            <option>Netherlands</option>
            <option>Nicaragua</option>
            <option>Norway</option>
            <option>Pakistan</option>
            <option>Panama</option>
            <option>Peru</option>
            <option>Philippines</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Puerto Rico</option>
            <option>Romania</option>
            <option>Russia</option>
            <option>Saudi Arabia</option>
            <option>Singapore</option>
            <option>South Africa</option>
            <option>Spain</option>
            <option>St Maarten/St Martin</option>
            <option>Suriname</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>Tahiti</option>
            <option>Taiwan</option>
            <option>Thailand</option>
            <option>Turkey</option>
            <option>Turks and Caicos</option>
            <option>Ukraine</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>Vanuatu</option>
            <option>Vietnam</option>
            <option>Virgin Islands</option>
            <option>Yugoslavia</option>
          </select>

          <select className="form-select w-100 w-sm-auto text-dark py-2 px-3 cursor-pointer">
            <option>English</option>
            <option>Francias</option>
            <option>Espanol</option>
            <option>Portugues</option>
          </select>
        </div>
      </div>
    </>
  );
};
