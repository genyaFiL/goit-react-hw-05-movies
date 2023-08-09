import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const BackLink = ({ children }) => {
  return (
    <div>
      <Link>
        <button>
          <RiArrowLeftSLine size="16" /> {children}
        </button>
      </Link>
    </div>
  );
};

export default BackLink;
