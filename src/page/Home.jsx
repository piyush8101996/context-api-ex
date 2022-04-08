import { useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext';
import Square from '../components/Square/Square';

const Home = () => {

    const {toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <h1> Welcome</h1>
            <Square />
            <div><button onClick={toggleTheme}>Toggle Theme</button></div>
        </div>
    );
};

export default Home;