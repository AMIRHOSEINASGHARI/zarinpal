import React from 'react';
import styles from './FirstCart.module.css'

//tools
import pg from '../../tools/images/pg.svg';
import arrow from '../../tools/images/arrow.svg'

const FirstCart = () => {
    return (
        <section className={styles.firstSection}>
            <div className={styles.image}>
                <img src={pg} alt='pg' />
            </div>
            <div className={styles.titles}>
                <h3>درگاه پرداخت اینترنتی</h3>
                <h1>مهندسی شده برای رشد و فروش بیش‌تر</h1>
                <p>
                درگاه پرداخت زرین‌پال، با اتصالِ همزمان 
                به درگاه‌های متنوع و معتبر بانکی(PSPها)
                ،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند 
                و به واسطه‌ی قابلیت مسیردهی هوشمند، 
                باعث افزایش درصد تراکنش‌های موفق می‌شود.
                </p>
                <div className={styles.buttons}>
                    <a href='#' className={styles.firstBtn}>ساخت درگاه پرداخت</a>
                    <a href='#' className={styles.secondBtn}>
                        بیش‌تر بدانید
                        <img src={arrow} alt='arrow' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FirstCart;