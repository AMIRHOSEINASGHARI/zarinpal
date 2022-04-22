import React from 'react';
import styles from './navbar.module.css'

//tools
import logo from '../../tools/images/logo-white.svg'
import downArrow from '../../tools/images/down-arrow-svgrepo-com.svg'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className={styles.navbarLogo}>
                    <img src={logo} alt='logo' />
                </div>
                <nav>
                    <ul className={styles.headerUl}>
                        <li className={styles.moreProducts}>
                            <a href='#'>محصولات</a>
                            <img src={downArrow} alt='down arrow' className={styles.navbarDownArrow} />
                        </li>
                        <li>
                            <a href='#'>تعرفه‌ها</a>
                        </li>
                        <li>
                            <a href='#'>توسعه‌دهنگان</a>
                        </li>
                        <li>
                            <a href='#'>تماس با ما</a>
                        </li>
                        <li className={styles.moreDetails}>
                            <a href='#'>بیش‌تر</a>
                            <img src={downArrow} alt='down arrow' className={styles.navbarDownArrow} />
                        </li>
                        <li className={styles.navbarActive}>
                            <a href='#'>زرین‌پال من</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;