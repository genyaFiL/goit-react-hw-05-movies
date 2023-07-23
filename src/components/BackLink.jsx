// import React, { useRef } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const BackLink = ({ to, children }) => {
  return (
    <div>
      <Link to={to}>
        <button>
          <RiArrowLeftSLine size="16" /> {children}
        </button>
      </Link>
    </div>
  );
};

export default BackLink;
