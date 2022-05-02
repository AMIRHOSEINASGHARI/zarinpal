import React from 'react';
import styles from './Report.module.css';

//tools
import arrow from '../../tools/images/arrow.svg';

const Report = () => {
    return (
        <section className={styles.container}>
            <div className={styles.texts}>
                <h1>
                    پشتیبانی ۲۴ ساعته، ۷ روز هفته
                </h1>
                <div className={styles.line}></div>
                <div className={styles.number}>
                    <h1>شماره تماس: <span>۴۱۲۳۹-۰۲۱</span></h1>
                </div>
            </div>
            <a href="#">
                درخواست پشتیبانی
                <img src={arrow} alt="arrow" />
            </a>
        </section>
    );
};

export default Report;