import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [message,   setMessage]   = useState("");
  const [confirmationText, setConfirmationText] = useState("");

  const allFilled = firstName && lastName && email && message;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allFilled) return;

    setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);

    // velden leegmaken
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label htmlFor="first">First name:</label>
        <input
          id="first"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="last">Last name:</label>
        <input
          id="last"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="msg">Message:</label>
        <textarea
          id="msg"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" disabled={!allFilled}>Send</button>
      </div>

      {confirmationText && (
        <p className={styles.confirmation} role="status">{confirmationText}</p>
      )}
    </form>
  );
}
