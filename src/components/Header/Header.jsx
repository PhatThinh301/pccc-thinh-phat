"use client";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <span>PCCC</span>
        <h2>THỊNH PHÁT</h2>
      </div>

      <nav>

        <a href="#">Trang chủ</a>

        <a href="#about">Giới thiệu</a>

        <a href="#services">Dịch vụ</a>

        <a href="#products">Sản phẩm</a>

        <a href="#projects">Dự án</a>

        <a href="#contact">Liên hệ</a>

      </nav>

      <a
        href="tel:0909999999"
        className={styles.hotline}
      >
        ☎ 0909 999 999
      </a>

    </header>
  );
}