import styles from "./Projects.module.css";

const projects = [
  {
    img: "/images/project1.jpg",
    title: "Chung cư Green City",
    location: "TP. Hồ Chí Minh",
  },
  {
    img: "/images/project2.jpg",
    title: "Nhà máy ABC",
    location: "Bình Dương",
  },
  {
    img: "/images/project3.jpg",
    title: "Chung Tâm Thương Mại",
    location: "Đà Nẵng",
  },
];

export default function Projects() {
  return (
    <section
  className={styles.projects}
  id="projects"
  data-aos="fade-up"
>

      <span className={styles.subTitle}>
        DỰ ÁN
      </span>

      <h2>Công trình tiêu biểu</h2>

      <p className={styles.desc}>
        Một số dự án phòng cháy chữa cháy mà chúng tôi đã thực hiện.
      </p>

      <div className={styles.grid}>

        {projects.map((item, index) => (

          <div className={styles.card} key={index}>

            <img src={item.img} alt={item.title} />

            <div className={styles.info}>
              <h3>{item.title}</h3>
              <span>{item.location}</span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}