import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import navIcon from '../../assets/images/back.svg';
import './navigation.css';

const Nav = () => {
  const { title } = useSelector((state) => state.crypto);
  const history = '';
  return (
    <nav className="nav">
      <span className="logo">
        <Link to={history}>
          <img src={navIcon} alt="logo" className="back-button" />
        </Link>
      </span>
      <span>
        {title}
      </span>
    </nav>
  );
};

export default Nav;
