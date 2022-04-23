import React from 'react';
import styles from './LandingPage.module.css';

//tools
import landingPageImg from '../../tools/images/home.svg'
import arrowbottom from '../../tools/images/arrowbottom.svg'
import downArrow from '../../tools/images/down-arrow-svgrepo-com.svg'


const LandingPage = () => {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.landingTitles}>
                    <div className={styles.heading}>
                        <h1>بیش از ۱۲ سال</h1>
                        <h1>انتخاب مطمئنِ کسب و کارهای آنلاین</h1>
                    </div>
                    <p className={styles.paragraph}>
                    زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
                    </p>
                    <div className={styles.links}>
                        <a href='#'>ثبت نام</a>
                        <a href='#'>ورود</a>
                    </div>
                </div>
                <img src={landingPageImg} alt='landingPageImg' className={styles.landingImage} />
                <div className={styles.downArrow}>
                    <img src={arrowbottom} alt='arrowbottom' />
                    <img src={downArrow} alt='downArrow' />
                </div>
            </div>
        </main>
    );
};

export default LandingPage;