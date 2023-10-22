import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const today = new Date();
      const birth = new Date(birthDate);
      const ageInMilliseconds = today - birth;
      const ageDate = new Date(ageInMilliseconds);
      const years = ageDate.getUTCFullYear() - 1970;

      setAge(years);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div>
        <label>Enter your date of birth</label><br/><br/>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
        />
      </div><br/>
      <button onClick={calculateAge} className='btning'>Calculate Age</button>
      {age !== null && <h3>Your are {age} years old</h3>}
    </div>
  );
}

export default AgeCalculator;
