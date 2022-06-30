import React, { useState } from "react";

function Age() {
  const [note, setNote] = useState("");
  const [entry, setEntry] = useState(0);

  function handleClick() {
    setEntry(new Date().getFullYear() - note);
  }

  return (
    <>
      <main>
        <div className="heading">Age calculator</div>
        <div className="wrap">
          <input
            onChange={(e) => setNote(e.target.value)}
            className="input_field"
          />
          <button onClick={handleClick}>check</button>
          <br />
          {note && entry && (
            <p>
              {entry} <br /> this is your age!
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Age;
