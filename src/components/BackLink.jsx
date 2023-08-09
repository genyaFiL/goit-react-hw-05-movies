import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const BackLink = ({ children, state }) => {
  return (
    <div>
      <Link to={state}>
        <button>
          <RiArrowLeftSLine size="16" /> {children}
        </button>
      </Link>
    </div>
  );
};

export default BackLink;
