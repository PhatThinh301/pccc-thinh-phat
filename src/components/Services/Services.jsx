import styles from "./Services.module.css";

export default function Services() {
  return (
    <section
  className={styles.services}
  id="services"
  data-aos="fade-up"
>

      <span className={styles.subTitle}>
        DỊCH VỤ
      </span>

      <h2>
        Dịch vụ <span>PCCC</span> chuyên nghiệp
      </h2>

      <p className={styles.desc}>
        Chúng tôi cung cấp giải pháp toàn diện từ tư vấn,
        thiết kế, thi công đến bảo trì hệ thống phòng cháy
        chữa cháy theo tiêu chuẩn hiện hành.
      </p>

      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={styles.icon}>🔥</div>
          <h3>Thiết kế hệ thống</h3>
          <p>Thiết kế hệ thống PCCC đạt tiêu chuẩn.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🚒</div>
          <h3>Thi công lắp đặt</h3>
          <p>Thi công nhanh chóng, an toàn.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🧯</div>
          <h3>Bảo trì định kỳ</h3>
          <p>Kiểm tra và bảo dưỡng hệ thống.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🚨</div>
          <h3>Hệ thống báo cháy</h3>
          <p>Lắp đặt thiết bị báo cháy tự động.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>💧</div>
          <h3>Hệ thống chữa cháy</h3>
          <p>Sprinkler, Foam, FM200...</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>📋</div>
          <h3>Tư vấn hồ sơ</h3>
          <p>Tư vấn nghiệm thu và pháp lý PCCC.</p>
        </div>

      </div>

    </section>
  );
}