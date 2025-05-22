    "use client";

    import React, { useState } from "react";

    const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastname: "",
        mobile: "",
        email: "",
    });

    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [awdNumber, setAwdNumber] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState({
        email: "",
        address1: "",
        address2: "",
        zipCode: "",
        awdNumber: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [smsOptIn, setSmsOptIn] = useState(false);
    const [emailOffers, setEmailOffers] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email") {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            setError((prev) => ({ ...prev, email: "Email is required." }));
        } else if (value.length < 6) {
            setError((prev) => ({
            ...prev,
            email: "Email should be at least 6 characters.",
            }));
        } else if (!regex.test(value)) {
            setError((prev) => ({
            ...prev,
            email: "Please enter a valid email address.",
            }));
        } else {
            setError((prev) => ({ ...prev, email: "" }));
        }
        }
    };

    const handleAddress1Change = (e) => {
        const value = e.target.value;
        setAddress1(value);
        setError((prev) => ({
        ...prev,
        address1: value.trim() === "" ? "Address Line 1 is required." : "",
        }));
    };

    const handleAddress2Change = (e) => {
        const value = e.target.value;
        setAddress2(value);
        setError((prev) => ({
        ...prev,
        address2:
            value.length > 100 ? "Address Line 2 is too long." : "",
        }));
    };

    const handleZipCodeChange = (e) => {
        const value = e.target.value;
        setZipCode(value);
        if (!value.trim()) {
        setError((prev) => ({
            ...prev,
            zipCode: "Zip/Postal Code is a required field.",
        }));
        } else if (!/^\d{4,10}$/.test(value)) {
        setError((prev) => ({
            ...prev,
            zipCode: "Zip/Postal Code must be 4 to 10 numerals.",
        }));
        } else {
        setError((prev) => ({ ...prev, zipCode: "" }));
        }
    };

    const handleAWDChange = (e) => {
        const value = e.target.value;
        setAwdNumber(value);
        const alphanumericRegex = /^[a-zA-Z0-9]*$/;
        if (value.length > 0 && !alphanumericRegex.test(value)) {
        setError((prev) => ({
            ...prev,
            awdNumber: "AWD must be letters and numbers only.",
        }));
        } else if (value.length > 0 && (value.length < 7 || value.length > 8)) {
        setError((prev) => ({
            ...prev,
            awdNumber: "AWD must be 7 to 8 characters.",
        }));
        } else {
        setError((prev) => ({ ...prev, awdNumber: "" }));
        }
    };

    const togglePassword = () => setShowPassword(!showPassword);

    const getStrength = (pwd) => {
        let score = 0;
        if (pwd.length >= 10) score += 20;
        if (/[A-Z]/.test(pwd)) score += 20;
        if (/[a-z]/.test(pwd)) score += 20;
        if (/[0-9]/.test(pwd)) score += 20;
        if (/[@#$]/.test(pwd)) score += 20;
        return score;
    };

    const strength = getStrength(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid =
        !error.email &&
        !error.address1 &&
        !error.address2 &&
        !error.zipCode &&
        !error.awdNumber;

        if (!isValid) {
        alert("Please fix errors before submitting.");
        return;
        }

        console.log({
        ...formData,
        address1,
        address2,
        zipCode,
        awdNumber,
        smsOptIn,
        emailOffers,
        password,
        });

        alert("Account Saved!");

        // After saving, reset the form data and other states
        setFormData({
        firstName: "",
        lastname: "",
        mobile: "",
        email: "",
        });

        setAddress1("");
        setAddress2("");
        setZipCode("");
        setAwdNumber("");
        setPassword("");
        setSmsOptIn(false);
        setEmailOffers(false);
        setError({
        email: "",
        address1: "",
        address2: "",
        zipCode: "",
        awdNumber: "",
        });

        alert("Account Saved and form reset!");
    };

    return (
        <form onSubmit={handleSubmit} className="md:ml-80 mt-10 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold font-black mb-4">Join Avis Preferred®</h1>

        <p className="text-base md:text-xl">
            If you already have a 6-character Avis Wizard Number, go here to upgrade to Avis Preferred.<br />
            Please enter your First Name and Last Name below as it appears on your Driver's License.
        </p>

        <hr className="mt-6 md:mt-10 w-full md:w-250 text-gray-500"/>

        <div className='mt-6 md:mt-15 mb-6 md:mb-10'>
            <h2><b>Country</b></h2>
            <select className='border border-3 bg-gray-200 py-2 px-4 md:px-10 mt-4 md:mt-10 w-full md:w-auto'>
            <option value="united state" className='bg-white text-black'>U S A</option>
            <option value="Canada" className='bg-white text-black'>Canada</option>
            <option value="New Zealand" className='bg-white text-black'>New Zealand</option>
            <option value="Austraila" className='bg-white text-black'>Austraila</option>
            <option value="Puerto Rico" className='bg-white text-black'>Puerto Rico</option>
            <option value="US Virgin Islands (St Ctoix)" className='bg-white text-black'>US Virgin Islands (St Ctoix)</option>
            <option value="US Virgin Islands (St Thomas)" className='bg-white text-black'>US Virgin Islands (St Thomas)</option>
            <option value="Anguilla" className='bg-white text-black'>Anguilla</option>
            <option value="Antigua" className='bg-white text-black'>Antigua</option>
            <option value="Argentina" className='bg-white text-black'>Argentina</option>
            <option value="Aruba" className='bg-white text-black'> Aruba</option>
            <option value="Bahamas" className='bg-white text-black'>Bahamas</option>
            <option value="Barbados" className='bg-white text-black'>Barbados</option>
            <option value="Belize" className='bg-white text-black'>Belize</option>
            <option value="Bermuda" className='bg-white text-black'>Bermuda</option>
            <option value="Bolivia" className='bg-white text-black'>Bolivia</option>
            <option value="Bonaire" className='bg-white text-black'>Bonaire</option>
            <option value="Brazil" className='bg-white text-black'>Brazil</option>
            <option value="Cayman Islands" className='bg-white text-black'>Cayman Islands</option>
            <option value="Chile" className='bg-white text-black'>Chile</option>
            <option value="Costa Rica" className='bg-white text-black'>Costa Rica</option>
            <option value="Curacao (Netherland Antilles)" className='bg-white text-black'>Curacao (Netherland Antilles)</option>
            <option value="Dominica" className='bg-white text-black'>Dominica</option>
            <option value="Guadeloupe(French WestIndies)" className='bg-white text-black'>Guadeloupe(French WestIndies)</option>
            <option value="Guatemala" className='bg-white text-black'>Guatemala</option>
            <option value="Haiti" className='bg-white text-black'>Haiti</option>
            <option value="Honduras" className='bg-white text-black'>Honduras</option>
            <option value="Jamaica" className='bg-white text-black'>Jamaica</option>
            <option value="Mexico" className='bg-white text-black'>Mexico</option>
            <option value="Nicaragua" className='bg-white text-black'>Nicaragua</option>
            <option value="Panama" className='bg-white text-black'>Panama</option>
            <option value="Paraguay" className='bg-white text-black'>Paraguay</option>
            <option value="Peru" className='bg-white text-black'>Peru</option>
            <option value="St Barthelemy" className='bg-white text-black'>St Barthelemy</option>
            <option value="St Eustatius" className='bg-white text-black'>St Eustatius</option>
            <option value="St John" className='bg-white text-black'>St John</option>
            <option value="St Kitts,Nevis" className='bg-white text-black'>St Kitts,Nevis</option>
            <option value="St Lucia" className='bg-white text-black'>St Lucia</option>
            <option value="St Martin/St Maarten" className='bg-white text-black'>St Martin/St Maarten</option>
            <option value="St Vincent" className='bg-white text-black'>St Vincent</option>
            <option value="Suriname" className='bg-white text-black'>Suriname</option>
            <option value="Tortola(British Virhin Isl)" className='bg-white text-black'>Tortola(British Virhin Isl)</option>
            <option value="Trinidada & Tobago" className='bg-white text-black'>Trinidada & Tobago</option>
            <option value="Turks and Caicos" className='bg-white text-black'>Turks and Caicos</option>
            <option value="Uruguay" className='bg-white text-black'>Uruguay</option>
            <option value="Venezuela" className='bg-white text-black'>Venezuela</option>
            </select>
        </div>
    
        <label className="mt-6 md:mt-20 block"><b>First Name (As it appears on your Driver's License)</b></label>
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-4 mt-2"
            required
        />

        <label className="mt-6 md:mt-20 block"><b>Last Name (As it appears on your Driver's License)</b></label>
        <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-4"
            required
        />

        <label className="mt-6 md:mt-30 block"><b>Mobile Number</b></label>
        <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-4"
            required
        />

        <p className="mb-4">If you provide your mobile phone number you can opt-in to receiving text messages about your reservations.</p>
        
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 mt-6 p-4 max-w-md gap-4 md:gap-10 bg-white">
            <label htmlFor="smsOptIn" className="text-sm text-gray-700 font-medium flex-1">
            <b>Receive texts about reservations and rentals? 
            See our{" "}</b> 
            <a
                href="#"
                className="text-red-800 underline hover:text-blue-800"
                onClick={(e) => {
                e.preventDefault();
                alert("Show Terms and Conditions");
                }}
            >
                Terms and Conditions
            </a>.
            </label>

            <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                <input
                    id="smsOptIn"
                    type="checkbox"
                    className="sr-only"
                    checked={smsOptIn}
                    onChange={() => setSmsOptIn(!smsOptIn)}
                />
                <div
                    className={`block w-14 h-8 rounded-full transition ${
                    smsOptIn ? "bg-green-500" : "bg-gray-300"
                    }`}
                ></div>
                <div
                    className={`dot a.bsolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                    smsOptIn ? "translate-x-6" : ""
                    }`}
                ></div>
                </div>
                <span className="ml-3 text-sm text-gray-800">{smsOptIn ? "YES" : "NO"}</span>
            </label>
            </div>
        </div>

        <label className="mt-6 md:mt-40 block"><b>Email Address</b></label>
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full md:w-200 border rounded py-2 px-3 mb-1 ${
            error.email ? "border-red-500" : "border-black"
            }`}
        />
        {error.email && <p className="text-red-500 text-sm mb-2">{error.email}</p>}

        <div className="relative mb-4">
            <label className="mt-6 md:mt-40 block"><b>Password</b></label>
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full md:w-200 border border-black rounded py-2 px-3"
            />
            <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 md:right-105 bottom-2 md:bottom-8 text-sm text-blue-600"
            >
            {showPassword ? "Hide" : "Show"}
            </button>
        </div>

        {showRules && (
            <ul className="text-sm text-gray-700 mb-4 pl-5 list-disc">
            <li className={password.length >= 10 ? "text-green-600" : "text-red-600"}>At least 10 characters</li>
            <li className={/[A-Z]/.test(password) ? "text-green-600" : "text-red-600"}>1 uppercase letter</li>
            <li className={/[a-z]/.test(password) ? "text-green-600" : "text-red-600"}>1 lowercase letter</li>
            <li className={/[0-9]/.test(password) ? "text-green-600" : "text-red-600"}>1 number</li>
            <li className={/[@#$]/.test(password) ? "text-green-600" : "text-red-600"}>1 special char (@#$)</li>
            </ul>
        )}
        <button
            type="button"
            onClick={() => setShowRules(!showRules)}
            className="text-sm text-blue-600 mb-4"
        >
            {showRules ? "Hide Rules" : "Show Password Rules"}
        </button>

        <label className="mt-6 md:mt-40 block"><b>Address Line 1</b></label>
        <input
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={handleAddress1Change}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-1"
        />
        {error.address1 && <p className="text-red-500 text-sm mb-2">{error.address1}</p>}
        
        <label className="mt-6 md:mt-40 block"><b>Address Line 2 (optional)</b></label>
        <input
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={handleAddress2Change}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-1"
        />
        {error.address2 && <p className="text-red-500 text-sm mb-2">{error.address2}</p>}

        <label className="mt-6 md:mt-40 block"><b>Zip/Postal Code</b></label>
        <input
            type="text"
            placeholder="Zipcode"
            value={zipCode}
            onChange={handleZipCodeChange}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-1"
        />
        {error.zipCode && <p className="text-red-500 text-sm mb-2">{error.zipCode}</p>}

        <label className="mt-6 md:mt-40 block"><b>AWD Number (optional)</b></label>
        <input
            type="text"
            placeholder="7 digit letter and number combo"
            value={awdNumber}
            onChange={handleAWDChange}
            className="w-full md:w-200 border border-black rounded py-2 px-3 mb-1"
        />
        {error.awdNumber && <p className="text-red-500 text-sm mb-2">{error.awdNumber}</p>}

        <button
            type="submit"
            className="bg-red-800 text-white py-2 px-6 font-semibold hover:bg-[#005999] rounded mb-10"
        >
            SAVE
        </button>
        </form>
    );
    };

    export default SignUp;