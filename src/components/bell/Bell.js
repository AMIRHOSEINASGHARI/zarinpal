import React from 'react';
import styles from './Bell.module.css';

//tools
import bell from '../../tools/images/bell.svg'

const Bell = () => {
    return (
        <div className={styles.bell}>
            <img src={bell} alt="bell" />
        </div>
    );
};

export default Bell;