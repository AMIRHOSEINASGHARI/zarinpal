import React from 'react';
import styles from './FivthCart.module.css';

//tools
import zarinplus from '../../tools/images/zarinplus.svg';
import arrow from '../../tools/images/arrow.svg'

const FivthCart = () => {
    return (
        <section className={styles.fivthSection}>
            <div className={styles.image}>
                <img src={zarinplus} alt='zarinplus' />
            </div>
            <div className={styles.titles}>
                <h3>زرین‌پلاس</h3>
                <h1>ابزار هوشمند سوددهی</h1>
                <p>
                زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب 
                و کارها در هر اندازه و دسته‌بندی شغلی، با در دست 
                داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و 
                افزایش فروش محصولات خود، بتوانند کسب و کار خود 
                را به بهترین شکل توسعه و گسترش دهند و جایگاه 
                برترین فروشگاه منطقه را به خود اختصاص دهند.
                </p>
                <div className={styles.buttons}>
                    <a href='#' className={styles.firstBtn}>پیوستن به زرین‌پلاس</a>
                    <a href='#' className={styles.secondBtn}>
                        بیش‌تر بدانید
                        <img src={arrow} alt='arrow' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FivthCart;