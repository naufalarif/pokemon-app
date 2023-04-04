import isEmpty from 'lodash/isEmpty';

import Footer from '../footer';
import Navbar from '../navbar';
import styles from './layout.module.css';

export default function Layout({ children, active = '' }) {
  return (
    <div className={styles.layout}>
      <Navbar active={active}/>
      {active !== "adventure" || !isEmpty(active) ? (
        <div className="wrapper">
          {children}
        </div>
      ): (
        children
      )}
      <Footer />
    </div>
  );
}