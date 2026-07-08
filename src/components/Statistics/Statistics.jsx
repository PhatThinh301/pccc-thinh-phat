import styles from "./Statistics.module.css";

export default function Statistics() {
    return (
        <section className={styles.statistics}>

            <div className={styles.container}>

                <div className={styles.card}>
                    <div className={styles.icon}>🏆</div>
                    <h2>20+</h2>
                    <p>Năm kinh nghiệm</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.icon}>🏢</div>
                    <h2>500+</h2>
                    <p>Công trình hoàn thành</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.icon}>👷</div>
                    <h2>1000+</h2>
                    <p>Khách hàng tin tưởng</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.icon}>☎️</div>
                    <h2>24/7</h2>
                    <p>Hỗ trợ kỹ thuật</p>
                </div>

            </div>

        </section>
    );
}