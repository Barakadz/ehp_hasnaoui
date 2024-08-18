import React, { useState, useRef } from 'react';

const OTPInput = ({ length, onChange }) => {
  const [otp, setOTP] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);

    // Join the OTP array into a single string and pass it to the onChange callback
   // onChange(newOTP.join(''));
    
    // Move focus to the next input field
    if (e.target.value !== '' && index < length - 1) {
      inputRefs.current[index + 1].disabled = false;

      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to the previous input field on backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].disabled = false;

      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='d-flex'>
      {otp.map((value, index) => (
        <div className='d-flex'><input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{width:'50px'}} 
           className='mx-1' id={'otp'+index}
 disabled={index}
 required
        />
        
        <b className='mt-3'>{index==5 ? '' :'-' }</b>
        
        
        </div>
        
      ))}
    </div>
  );
};

export default OTPInput;
 
