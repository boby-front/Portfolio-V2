import React, { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);

  return (
    <main className="main-contacts">
      <h1>
        <span className="number-title">04.</span> CONTACTEZ MOI
      </h1>
      <form
        name="contact"
        method="POST"
        onSubmit="submit"
        className="form-contacts"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom :</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="email">Email :</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
};

export default Contacts;
