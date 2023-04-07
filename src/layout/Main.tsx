import { NavLink, Outlet } from "react-router-dom";
import styles from "./Main.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.verticalContainer}>
      <div className={styles.navBar}>
        <div>LOGO</div>
      </div>
      <div className={styles.horizontalContainer}>
        <section className={styles.sideMenu}>
          <h1>
            Hola, <strong>Dennis</strong>
          </h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/appointment">Appointment</NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.mainContent}>
          <Outlet />
        </section>
      </div>
    </div>
  );
};
