import { useState } from "react";
import "./PhoneModel.css";

export const PhoneModel = () => {
  const initialState = {
    brand: "",
    model: "",
    color: "",
    storage: "",
    country: "",
  };

  const [currentPhone, setCurrentPhone] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCurrentPhone({ ...currentPhone, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { brand, color, country, model, storage } = currentPhone;

    return brand && color && country && model && storage
      ? alert(JSON.stringify(currentPhone, null, 2))
      : alert("Please fill out all fields");
  };

  return (
    <div className="phoneModel">
      <div className="registration">
        <form>
          <label>
            <p>Brand:</p>
            <input
              type="text"
              name="brand"
              value={currentPhone.brand}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <p>Model:</p>
            <input
              type="text"
              name="model"
              value={currentPhone.model}
              onChange={handleInputChange}
            />
          </label>
          <form onSubmit={handleSubmit} />
          <label>
            <p>Color:</p>
            <input
              type="text"
              name="color"
              value={currentPhone.color}
              onChange={handleInputChange}
            />
          </label>
          <form onSubmit={handleSubmit} />
          <label>
            <p>Storage:</p>
            <input
              type="text"
              name="storage"
              value={currentPhone.storage}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <p> Country:</p>
            <input
              type="text"
              name="country"
              value={currentPhone.country}
              onChange={handleInputChange}
            />
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
