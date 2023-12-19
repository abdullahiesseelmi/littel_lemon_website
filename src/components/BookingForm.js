import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setData] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuest] = useState("");
  const [ocasion, setOcasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setData(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value=""></option>
                {props.avaliableTimes.avaliableTimes.map((avaliableTimes) => {
                  return <option key={avaliableTimes}>{avaliableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guest">Number of guests:</label>
              <input
                id="book-guest"
                min="1"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                type="number"
                required
              />
            </div>

            <div>
              <label htmlFor="book-ocasion">Ocasion:</label>
              <select
                id="book-ocasion"
                key={ocasion}
                value={ocasion}
                onChange={(e) => setOcasion(e.target.value)}
              >
                <option>BirthDay</option>
                <option>Anaversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
