"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.message
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    alert("Gửi thông tin thành công!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: ""
    });

  }

  return (

    <section
  className={styles.contact}
  id="contact"
  data-aos="fade-left"
>

      <h2>LIÊN HỆ</h2>

      <div className={styles.container}>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Nội dung"
            value={form.message}
            onChange={handleChange}
          />

          <button>
            Gửi thông tin
          </button>

        </form>

        <div className={styles.info}>

          <h3>CÔNG TY TNHH PCCC THỊNH PHÁT</h3>

          <p>📍 121/6 Nguyễn Văn Cừ, Quận 12, TP.HCM</p>

          <p>
            📞
            <a href="tel:0909999999">
              0909 999 999
            </a>
          </p>

          <p>
            ✉
            <a href="mailto:Phat83515kz@gmail.com">
              info@pcccthinhphat.vn
            </a>
          </p>

          <p>
            🌐
            <a
              href="https://www.facebook.com/groups/1913864658877067/"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          

        </div>

      </div>

    </section>

  );

}