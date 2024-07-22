import { useEffect, useState } from 'react';
import './darkMode.css'

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Verifica se há uma preferência de tema salva no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Atualiza o localStorage e aplica a classe ao body
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);
    
    return(
        <label className="switch">
            <input
                type="checkbox"
                className="input__check"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
        </label>
    )
}