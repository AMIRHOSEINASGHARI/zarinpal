import React from 'react';
import styles from './SecondCart.module.css'

//tools
import socialImage from '../../tools/images/social-image.svg'
import arrow from '../../tools/images/arrow.svg'

const SecondCart = () => {
    return (
        <section className={styles.secondSection}>
            <div className={styles.titles}>
                <h3>زرین‌لینک</h3>
                <h1>پرداخت در شبکه‌های اجتماعی</h1>
                <p>
                زرین‌لینک با مدیریت فرآیند فروش به روشی 
                هوشمندانه و سریع، باعث افزایش فروش محصولات و 
                خدمات، از طریق شبکه‌های اجتماعی مانند 
                اینستاگرام، تلگرام یا وب‌سایت می‌شود.
                </p>
                <div className={styles.buttons}>
                    <a href='#' className={styles.firstBtn}>ساخت زرین‌لینک</a>
                    <a href='#' className={styles.secondBtn}>
                        بیش‌تر بدانید
                        <img src={arrow} alt='arrow' />
                    </a>
                </div>
            </div>
            <div className={styles.image}>
                <img src={socialImage} alt='socialImage' />
            </div>
        </section>
    );
};

export default SecondCart;