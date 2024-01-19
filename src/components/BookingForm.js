import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="name">Name:*</label>
              <input
                type="text"
                id="book-name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:*</label>
              <input
                type="email"
                id="book-email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="book-date">Date:*</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Time:*</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:*</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type={"number"}
                placeholder={2}
                max={10}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>
            <div>
              <p>Select a Seating Option:</p>
              <div style={styles.container}>
                <ul style={styles.list}>
                  <CustomRadioButton
                    label="Indoor"
                    selected={selectedValue === "option1"}
                    onSelect={() => setSelectedValue("option1")}
                  />
                  <CustomRadioButton
                    label="Outdoor"
                    selected={selectedValue === "option2"}
                    onSelect={() => setSelectedValue("option2")}
                  />
                </ul>
              </div>
            </div>
            <div>
              <label htmlFor="message">Special Requests:</label>
              <textarea
                className="form-control"
				id="book-textarea"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Confirm Reservation"}
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;

const styles = {
  radioButton: {
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "8px",
    background: "#bdbdbd43",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    fontWeight: "300",
  },
  selected: {
    background: "#495E57",
    color: "#fff",
    borderColor: "#007BFF",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
	margin: 0
  },
};

const CustomRadioButton = ({ label, selected, onSelect }) => (
  <li>
    <button
	type="button"
      style={{
        ...styles.radioButton,
        ...(selected ? styles.selected : {}),
      }}
      onClick={onSelect}
    >
      {label}
    </button>
  </li>
);
