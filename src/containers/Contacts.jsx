import React from "react";

const Contacts = () => {
  return (
    <main className="main-contacts">
      <h1>
        <span className="number-title">04.</span> CONTACTEZ MOI
      </h1>
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom :</label>
        <input type="text" name="name" />

        <label for="email">Email :</label>
        <input type="email" name="email" />

        <label for="message">Message :</label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
};

export default Contacts;
