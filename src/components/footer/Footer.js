import React from 'react';
import styles from './Footer.module.css';

//tools
import instagram from '../../tools/images/instagram.svg';
import linkedin from '../../tools/images/linkedin.svg';
import telegram from '../../tools/images/telegram.svg';
import twitter from '../../tools/images/twitter.svg';
import aparat from '../../tools/images/aparat.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.lists}>
                <ul className={styles.products}>
                    <li><h1>محصولات</h1></li>
                    <li><a href="#">زرین‌لینک</a></li>
                    <li><a href="#">درگاه پرداخت اینترنتی</a></li>
                    <li><a href="#">زرین‌کارت</a></li>
                    <li><a href="#">تسهیم</a></li>
                </ul>
                <ul className={styles.production}>
                    <li><h1>آشنایی با زرین‌پال</h1></li>
                    <li><a href="#">تعرفه‌ها</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">سوالات متداول</a></li>
                    <li><a href="#">همکاری در فروش</a></li>
                </ul>
                <ul className={styles.moreCommunication}>
                    <li><h1>ارتباط بیشتر</h1></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">قوانین و مقررات</a></li>
                    <li><a href="#">حریم خصوصی</a></li>
                </ul>
                <ul className={styles.refrences}>
                    <li><h1>منابع</h1></li>
                    <li><a href="#">دریافت شماره شبا</a></li>
                    <li><a href="#">زرین‌بین</a></li>
                    <li><a href="#">توسعه‌دهندگان</a></li>
                    <li><a href="#">وبلاگ</a></li>
                </ul>
            </div>
            <div className={styles.socialNetworks}>
                <h1>زرین‌پال در شبکه‌های اجتماعی:</h1>
                <div className={styles.socialIcons}>
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={telegram} alt="telegram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={aparat} alt="aparat" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;