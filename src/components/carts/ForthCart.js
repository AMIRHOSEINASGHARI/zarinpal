import React from 'react';
import styles from './FrothCart.module.css';

//tools
import payout from '../../tools/images/payout.svg';
import arrow from '../../tools/images/arrow.svg';


const ForthCart = () => {
    return (
        <section className={styles.forthSection}>
            <div className={styles.titles}>
                <h3>تسهیم</h3>
                <h1>درگاه پرداخت اشتراکی</h1>
                <p>
                تسهیم بهترین روش برای مدیریت مالی کسب‌ و 
                کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل 
                از فروش محصولات یا خدمات، در سهم‌های ثابت 
                یا متغیر میان شرکای تجاری تقسیم شده و به 
                صورت جداگانه به حساب هر شخص واریز می‌‌شود.
                </p>
                <div className={styles.buttons}>
                    <a href='#' className={styles.firstBtn}>درخواست فعال‌سازی تسهیم</a>
                    <a href='#' className={styles.secondBtn}>
                        بیش‌تر بدانید
                        <img src={arrow} alt='arrow' />
                    </a>
                </div>
            </div>
            <div className={styles.image}>
                <img src={payout} alt='socialImage' />
            </div>
        </section>
    );
};

export default ForthCart;