import React, { useState } from "react";

function SimpleInput() {
  const [inputValue, setInputValue] = useState("");
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowError(false); // Hide the error when the user starts typing
  };

  const handleInputBlur = () => {
    setHasBeenFocused(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setShowError(true); // Display the error if input is empty on submit
      return;
    }

    // Continue with your form submission logic
    console.log("Form submitted with input value:", inputValue);
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input Field:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </label>
        {(showError || (hasBeenFocused && inputValue.length === 0)) && (
          <p style={{ color: "red" }}>Please fill in the input field.</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleInput;
