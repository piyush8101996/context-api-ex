import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext';
import styles from './Square.module.css';

const Square = () => {

    const {isDark} = useContext(ThemeContext);

    return (
        <div className={isDark ? `${styles.base} ${styles.darkTheme}`: styles.base }>
            <h1>Current Theme is {isDark? 'Dark': 'Light'}</h1>
        </div>
    );
};

export default Square;