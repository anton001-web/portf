import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./styles.module.scss";

export const Form = () => {
  const form = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const nameTgRef = useRef();

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
          nameTgRef.current.value = "";
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
          placeholder="Your name - Anton"
          type="text"
          name="user_name"
          ref={nameRef}
        />
        <input
          className={s.form_input}
          placeholder="Your phone - +777 7777 7777"
          type="phone"
          name="user_phone"
          ref={phoneRef}
        />
        <input
          className={s.form_input}
          placeholder="Your telegramm name - @nickname"
          type="phone"
          name="user_nickname"
          ref={nameTgRef}
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
