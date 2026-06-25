import styles from './NavbarStyles.module.css';

const links = [
  { label: 'Projects',    href: '#projects' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Contact',     href: '#contact' },
];

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>MK</a>
        <div className={styles.links}>
          {links.map(l => (
            <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
