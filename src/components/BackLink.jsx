import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackLink = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={location.state?.from}>
        <button>
          <RiArrowLeftSLine size="16" /> {children}
        </button>
      </Link>
    </div>
  );
};

export default BackLink;
