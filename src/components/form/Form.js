import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./styles.module.scss";

export const Form = () => {
  const form = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mmy0dny", "template_8f8lx1j", form.current, {
        publicKey: "fGUjfYAbMK3-i0uZ0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          nameRef.current.value = "";
          phoneRef.current.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={s.form_block}>
      <form ref={form} className={s.form} onSubmit={sendEmail}>
        <input
          className={s.form_input}
          placeholder="Your name"
          type="text"
          name="user_name"
          ref={nameRef}
        />
        <input
          className={s.form_input}
          placeholder="Your phone"
          type="phone"
          name="user_phone"
          ref={phoneRef}
        />
        <input
          type="submit"
          className={s.submit_btn}
          value="Send"
          onSubmit={sendEmail}
        />
      </form>
    </div>
  );
};
