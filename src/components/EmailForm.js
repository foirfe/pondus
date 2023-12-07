import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import marcusNoBackground from "../img/marcus-7-no-background.png";
export default function EmailForm() {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const [numberVal, setNumberVal] = useState(``);
  const [feedbackMessage, setFeedbackMessage] = useState(``);

  function handlefeedbackMessage() {
    return { __html: feedbackMessage };
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      nameInput.current.value === "" ||
      emailInput.current.value === "" ||
      messageInput.current.value === ""
    ) {
      setFeedbackMessage(`Du skal udfylde alle felter for at sende din besked`);
      return;
    } else {
      emailjs
        .sendForm(
          "service_ws4upqa",
          "template_qcxv8aj",
          form.current,
          "claEQoAGh7VK9YxwI"
        )
        .then(
          (result) => {
            setFeedbackMessage(
              `Vi har modtaget din besked! Og vil vende tilbage til dig hurtigst muligt`
            );
          },
          (error) => {
            // show the user an error
          }
        );
    }
  };

  const handleNumberChange = (e) => {
    const result = e.target.value.replace(/\D/g, "");

    setNumberVal(result);
  };

  return (
    <div className="box">
      <form ref={form} onSubmit={sendEmail}>
        <p className="text-center">Få et uforpligtende tilbud!</p>
        <div className="input-container">
          <input type="text" name="user_name" required ref={nameInput} />
          <label>Navn</label>
        </div>
        <div className="input-container">
          <input type="text" name="user_email" ref={emailInput} required />
          <label>Email</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="user_phone"
            required
            maxLength={8}
            value={numberVal}
            onChange={handleNumberChange}
          />
          <label>Telefonnummer</label>
        </div>
        <div className="input-container">
          <label className="label-message">Din Besked</label>
          <textarea name="message" ref={messageInput} required />
        </div>
        <p
          className="feedback-message"
          dangerouslySetInnerHTML={handlefeedbackMessage()}
        ></p>
        <img src={marcusNoBackground} alt="Marcus" className="form-image" />
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
}
