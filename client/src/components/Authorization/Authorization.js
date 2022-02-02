import { NavLink } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
import s from './Authorization.module.css';

function Authorization() {
  return (
    <div className={s.container}>
      <NavLink to="/login" className={navData => (navData.isActive ? s.current : s.link)}>
        {/* <LoginIcon /> */}
        <span className={s.text}>Log in</span>
      </NavLink>
      <NavLink to="/register" className={navData => (navData.isActive ? s.current : s.link)}>
        {/* <PersonAddIcon /> */}
        <span className={s.text}>Sign up</span>
      </NavLink>
    </div>
  );
}

export default Authorization;
