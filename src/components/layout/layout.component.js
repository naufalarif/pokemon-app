import Footer from '../footer';
import Navbar from '../navbar';
import styles from './layout.module.css';

export default function Layout({ children, active = '' }) {
  return (
    <div className={styles.layout}>
      <Navbar active={active}/>
      {active === "adventure" || active === "" ? (
        children
      ): (
        <div className="wrapper">
          {children}
        </div>
      )}
      <Footer />
    </div>
  );
}