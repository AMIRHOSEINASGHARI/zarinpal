import React from 'react';
import styles from './StartingBox.module.css';

const StartingBox = () => {
    return (
        <section className={styles.container}>
            <div>
                <h1>
                    به خانواده‌ی یک میلیونی زرین‌پال بپیوندید.
                </h1>
                <h2>
                    یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما 
                </h2>
                <a href='#'>شروع کنید</a>
            </div>
        </section>
    );
};

export default StartingBox;