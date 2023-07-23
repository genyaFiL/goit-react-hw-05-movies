import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
