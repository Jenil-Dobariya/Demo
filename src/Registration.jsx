import React, { useState } from "react";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const RegistrationPage = () => {
  const [isSelectedIndividual, setIsSelectedIndividual] = useState(false);
  const [isSelectedContingent, setIsSelectedContingent] = useState(false);

  const handleIndividualClick = () => {
    setIsSelectedIndividual(true);
    setIsSelectedContingent(false);
  };

  const handleContingentClick = () => {
    setIsSelectedIndividual(false);
    setIsSelectedContingent(true);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <span
        onClick={handleIndividualClick}
        style={{ textDecoration: isSelectedIndividual ? "underline" : "none" }}
      >
        Register as Individual
      </span>
      <span> &nbsp; </span>
      <span
        onClick={handleContingentClick}
        style={{ textDecoration: isSelectedContingent ? "underline" : "none" }}
      >
        Register as Contingent
      </span>

      {isSelectedIndividual && <IndividualRegistrationForm />}
      {isSelectedContingent && <ContingentRegistrationForm />}
    </div>
  );
};

const IndividualRegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [parentName, setParentName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedPool, setSelectedPool] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studentMobile, setStudentMobile] = useState("");
  const [parentMobile, setParentMobile] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: fullName,
      dateOfBirth: dateOfBirth,
      parentName: parentName,
      selectedClass: selectedClass,
      selectedPool: selectedPool,
      schoolName: schoolName,
      studentMobile: studentMobile,
      parentMobile: parentMobile,
      whatsappNumber: whatsappNumber,
      parentEmail: parentEmail,
      selectedState: selectedState,
      city: city,
    };

    console.log(formData);

    await setDoc(doc(db, "individual reistration", fullName), formData);

    setFullName("");
    setDateOfBirth("");
    setParentName("");
    setSelectedClass("");
    setSelectedPool("");
    setSchoolName("");
    setStudentMobile("");
    setParentMobile("");
    setWhatsappNumber("");
    setParentEmail("");
    setSelectedState("");
    setCity("");
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Parent/Guardian's Name:
        <input
          type="text"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Select Class:
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </label>
      <br />

      <label>
        Select Pool:
        <select
          value={selectedPool}
          onChange={(e) => setSelectedPool(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Youngsters(class 5-6)">Pool Youngsters(class 5-6)</option>
          <option value="Rising Stars(class 7-8)">Pool Rising Stars(class 7-8)</option>
          <option value="Champions(class 9-10)">Pool Champions(class 9-10)</option>
          <option value="Pioneers(class 11-12)">Pool Pioneers(class 11-12)</option>
        </select>
      </label>
      <br />

      <label>
        School Name:
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Student's Mobile Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={studentMobile}
          onChange={(e) => setStudentMobile(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Parent/Guardian's Mobile Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={parentMobile}
          onChange={(e) => setParentMobile(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        WhatsApp Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Parent/Guardian's Email Address:
        <input
          type="email"
          value={parentEmail}
          onChange={(e) => setParentEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Select State:
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          required
        >
          <option value="">Select</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

const ContingentRegistrationForm = () => {
  const [schoolName, setSchoolName] = useState("");
  const [principalName, setPrincipalName] = useState("");
  const [pocName, setPocName] = useState("");
  const [principalMobile, setPrincipalMobile] = useState("");
  const [pocMobile, setPocMobile] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [principalEmail, setPrincipalEmail] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      schoolName,
      principalName,
      pocName,
      principalMobile,
      pocMobile,
      whatsappNumber,
      principalEmail,
      pocEmail,
      schoolAddress,
      selectedState,
      city,
    };

    await setDoc(doc(db, "Contingent reistration", schoolName), formData);
    console.log(formData);

    setSchoolName("");
    setPrincipalName("");
    setPocName("");
    setPrincipalMobile("");
    setPocMobile("");
    setWhatsappNumber("");
    setPrincipalEmail("");
    setPocEmail("");
    setSchoolAddress("");
    setSelectedState("");
    setCity("");
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        School's Name:
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Principal's Name:
        <input
          type="text"
          value={principalName}
          onChange={(e) => setPrincipalName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        POC's Name:
        <input
          type="text"
          value={pocName}
          onChange={(e) => setPocName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Principal's Mobile Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={principalMobile}
          onChange={(e) => setPrincipalMobile(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        POC's Mobile Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={pocMobile}
          onChange={(e) => setPocMobile(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        WhatsApp Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Principal's Email Address:
        <input
          type="email"
          value={principalEmail}
          onChange={(e) => setPrincipalEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        POC's Email Address:
        <input
          type="email"
          value={pocEmail}
          onChange={(e) => setPocEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        School Address:
        <textarea
          value={schoolAddress}
          onChange={(e) => setSchoolAddress(e.target.value)}
          required
        ></textarea>
      </label>
      <br />

      <label>
        Select State:
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          required
        >
          <option value="">Select</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};
export default RegistrationPage;
