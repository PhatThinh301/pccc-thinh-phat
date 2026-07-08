import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.overlay}></div>

      <div className={styles.content}>

        <span className={styles.badge}>
          CÔNG TY TNHH PCCC THỊNH PHÁT
        </span>

        <h1>
          GIẢI PHÁP
          <br />
          PHÒNG CHÁY CHỮA CHÁY
        </h1>

        <p>
          Chuyên tư vấn, thiết kế, thi công và bảo trì hệ thống
          phòng cháy chữa cháy cho nhà xưởng, chung cư,
          khách sạn và công trình dân dụng.
        </p>

        <div className={styles.buttons}>

          <a
            href="#contact"
            className={styles.primary}
          >
            Nhận báo giá
          </a>

          <a
            href="#services"
            className={styles.secondary}
          >
            Xem dịch vụ
          </a>

        </div>

      </div>

    </section>
  );
}