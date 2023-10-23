import { useState } from "react";
import "./Registration.css";

export const Registration = () => {
  const initialFormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { confirmPassword, email, name, password, username } = formData;
    if (name && username && email && password && confirmPassword) {
      alert(
        `Name:${name}, Username:${username}, Email:${email}, Password:${password}, ConfirmPassword:${confirmPassword}`
      );
      setFormData(initialFormData);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} />
      <label>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <form onSubmit={handleSubmit} />
      <label>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <form onSubmit={handleSubmit} />
      <label>
        <p>Email:</p>
        <input
          type="text"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <form onSubmit={handleSubmit} />
      <label>
        <p>Password:</p>
        <input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <form onSubmit={handleSubmit} />
      <label>
        <p> Confirm Password:</p>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};
