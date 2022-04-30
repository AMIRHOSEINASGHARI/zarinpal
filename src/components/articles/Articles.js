import React from 'react';
import styles from './Articles.module.css';

//tools
import verifiedIcon from '../../tools/images/verifiedIcon.svg';
import spliteIcon from '../../tools/images/splite.svg';
import supportIcon from '../../tools/images/support.svg';

const Articles = () => {
    return (
        <article className={styles.container}>
            <div className={styles.articleHeading}>
                <h1>ویژگی‌های درگاه پرداخت زرین‌پال</h1>
                <p>
                    درگاه پرداخت اینترنتی زرین‌پال، امکان 
                    مدیریت تراکنش‌های مالی در بستر وب را به راحتی 
                    امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای 
                    راه‌کارهای هوشمندانه، باعث افزایش درصد 
                    تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
                </p>
            </div>
            <div className={styles.items}>
                <div className={styles.firstItem}>
                    <div>
                        <img src={verifiedIcon} alt='verifiedIcon' />
                        <h1>ضمانتِ پرداخت</h1>
                    </div>
                    <p>
                        درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را 
                        به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
                    </p>
                </div>
                <div className={styles.secondItem}>
                    <div>
                        <img src={spliteIcon} alt='spliteIcon' />
                        <h1>مسیردهی هوشمند</h1>
                    </div>
                    <p>
                        استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود 
                        کاربران به بهترین درگاه پرداخت با بالاترین 
                        میزان تراکنش‌های موفق هدایت شوند.
                    </p>
                </div>
                <div className={styles.thirdItem}>
                    <div>
                        <img src={supportIcon} alt='supportIcon' />
                        <h1>پشتیبانی ۲۴/۷</h1>
                    </div>
                    <p>
                        هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، 
                        آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.
                    </p>
                </div>
                <div className={styles.fourthItem}>
                    <div>
                        <img src={supportIcon} alt='supportIcon' />
                        <h1>امنیتِ پرداخت</h1>
                    </div>
                    <p>
                        درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی 
                        افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Articles;