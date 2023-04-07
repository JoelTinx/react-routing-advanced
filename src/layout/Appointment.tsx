import { NavLink, Outlet } from "react-router-dom";
import styles from "./Appointment.module.css";

export const AppointmentLayout = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink to="/appointment/patient">Patient</NavLink>
          </li>
          <li>
            <NavLink to="/appointment/medical-agenda">Medical Agenda</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
