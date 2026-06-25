import { Link } from 'react-scroll';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

const NAV_LINKS = ['projects', 'skills', 'experience', 'opensource', 'contact'];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>MK</span>
      <div className={styles.links}>
        {NAV_LINKS.map(link => (
          <Link key={link} to={link} smooth duration={500} className={styles.link}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;