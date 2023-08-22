import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>This is the home website</h1>
    </div>
  );
};

export const History = () => {
  return (
    <div>
      <p>This is our History</p>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h2>This is the about section</h2>
      <Outlet />
    </div>
  );
};

export const Contact = () => {
  return <h2>This is the contact section</h2>;
};

export const NewApp = () => {
  return (
    <>
      <Home />
    </>
  );
};
