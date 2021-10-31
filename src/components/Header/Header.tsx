import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import useDarkMode from 'use-dark-mode';
import './Header.css';

const Header: React.FC = () => {
  const darkMode = useDarkMode(false);

  return (
    <header className='Header'>
      <h1>Percentage Calculator</h1>
      <DarkModeToggle size='50px' isDarkMode={darkMode.value} onChange={darkMode.toggle} />
    </header>
  );
};

export default Header;
