import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Cột 1 */}
        <div className={styles.col}>

          <h2>
            🔥 PCCC <span>THỊNH PHÁT</span>
          </h2>

          <p>
            Chuyên tư vấn, thiết kế, thi công và bảo trì
            hệ thống phòng cháy chữa cháy cho nhà ở,
            nhà xưởng, khách sạn và tòa nhà.
          </p>

        </div>

        {/* Cột 2 */}
        <div className={styles.col}>

          <h3>Liên kết</h3>

          <a href="#">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#services">Dịch vụ</a>
          <a href="#products">Sản phẩm</a>
          <a href="#projects">Dự án</a>
          <a href="#contact">Liên hệ</a>

        </div>

        {/* Cột 3 */}
        <div className={styles.col}>

          <h3>Liên hệ</h3>

          <p>📞 0909 123 456</p>

          <p>✉ info@pcccthinhphat.vn</p>

          <p>📍 Quận 12, TP. Hồ Chí Minh</p>

          <p>🕒 Thứ 2 - Chủ nhật</p>

        </div>
        <div className={styles.map}>
    <h3>Bản đồ</h3>

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18754.55573377057!2d106.6116877096013!3d10.86833570148148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529fe0b42f269%3A0xd4747f2779b6374a!2zVHLGsOG7nW5nIFRydW5nIGPhuqVwIEtpbmggdOG6vyBL4bu5IHRodeG6rXQgUXXhuq1uIDEyIChDUzIp!5e1!3m2!1svi!2s!4v1783491234503!5m2!1svi!2s"
        width="100%"
        height="250"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
    ></iframe>
</div>
        

      </div>

      <div className={styles.bottom}>

        © 2026 PCCC Thịnh Phát | Thiết kế bởi Phát Đẹp Trai

      </div>  
      

    </footer>
  );
}