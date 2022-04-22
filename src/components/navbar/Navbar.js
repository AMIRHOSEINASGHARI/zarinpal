import React , { useState } from 'react';
import styles from './navbar.module.css'

//tools
import logo from '../../tools/images/logo-white.svg'
import downArrow from '../../tools/images/down-arrow-svgrepo-com.svg'
import hamburgerIcon from '../../tools/images/hamburger.svg'
import crossIcon from '../../tools/images/cross.svg'
import leftArrow from '../../tools/images/arrow.svg'

const Navbar = () => {
    const [dropDown , setDropDown] = useState();
    const menuDropDownHandler = () => {
        setDropDown(true)
    }

    const menuDropUpHandler = () => {
        setDropDown(false)
    }

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
                <img src={hamburgerIcon} alt='hamburger menu' className={styles.hamburgerIcon} onClick={menuDropDownHandler} />
                <div className={dropDown ? styles.hamburgerMenuTrue : styles.hamburgerMenuFalse}>
                    <div className={styles.crossIcon}>
                        <img src={crossIcon} alt='cross' onClick={menuDropUpHandler} />
                    </div>
                    <div className={styles.hamburgerMenuItems}>
                        <ul>
                            <li>
                                <a href='#'>تعرفه‌ها</a>
                            </li>
                            <li>
                                <a href='#'>اپلیکیشن</a>
                            </li>
                            <div></div>
                            <li>
                                <a href='#'>سوالات متداول</a>
                            </li>
                            <li>
                                <a href='#'>محصولات</a>
                            </li>
                            <li>
                                <a href='#'>تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.hamburgerMenuMoreItem}>
                        <a href='#'>زرین‌پال من</a>
                        <img src={leftArrow} alt='left arrow' />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;