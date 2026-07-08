import styles from "./About.module.css";

export default function About() {
  return (
    
    <section
  className={styles.about}
  id="about"
  data-aos="fade-up"
>

      <div className={styles.left}>

        <img src="/images/anh1.jpg" alt="" />

        <div className={styles.exp}>

          <h2>20+</h2>

          <span>Năm kinh nghiệm</span>

        </div>

      </div>

      <div className={styles.right}>

        <span className={styles.subTitle}>
          GIỚI THIỆU
        </span>

<h2>
    CÔNG TY TNHH
    <br />
    <span>PCCC THỊNH PHÁT</span>
</h2>

        <p>

          Chúng tôi chuyên tư vấn, thiết kế, thi công và bảo trì
          hệ thống phòng cháy chữa cháy cho nhà xưởng,
          khách sạn, tòa nhà và khu dân cư.

        </p>

        <div className={styles.list}>

          <div>
    <span>✔</span>
    Thi công đúng tiêu chuẩn
</div>

          <div>✔ Đội ngũ kỹ sư nhiều kinh nghiệm</div>

          <div>✔ Thiết bị chính hãng</div>

          <div>✔ Bảo hành dài hạn</div>

        </div>
      <a href="#contact" className={styles.btn}>
    Liên hệ ngay
</a>
      </div>


    </section>
    
  );
}