import React, { useState } from 'react';

function NewShipmentForm() {
  const [formData, setFormData] = useState({
    NewLocation: '',
    cargoHandler: '',
    CustomRemarks: '',
    Status: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log(formData);
  };

  return (
    <div className="new-shipment-container">
      <form onSubmit={handleSubmit}>
        <h2>Update Location</h2>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="input-group">
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={key} // Placeholder can be more descriptive
            />
          </div>
        ))}
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default NewShipmentForm;
