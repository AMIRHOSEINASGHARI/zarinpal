import React from 'react';
import styles from './ThirdCart.module.css';

//tools
import zarincard from '../../tools/images/zarincard.svg';
import arrow from '../../tools/images/arrow.svg'

const ThirdCart = () => {
    return (
        <section className={styles.thirdSection}>
            <div className={styles.image}>
                <img src={zarincard} alt='zarincard' />
            </div>
            <div className={styles.titles}>
                <h3>زرین‌کارت</h3>
                <h1>طلایی‌ترین کارتِ بانکی </h1>
                <p>
                زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به 
                یک حساب بانکی است که از تمام ویژگی‌‌ها و 
                امکانات یک حساب بانکی تمام عیار برخوردار 
                است. زرین‌‌کارت این امکان را برای کاربران 
                خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد 
                کم‌‌تر در روزهای عادی و کارمزد رایگان در 
                سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.
                </p>
                <div className={styles.buttons}>
                    <a href='#' className={styles.firstBtn}>درخواست زرین‌کارت</a>
                    <a href='#' className={styles.secondBtn}>
                        بیش‌تر بدانید
                        <img src={arrow} alt='arrow' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ThirdCart;