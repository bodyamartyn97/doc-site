import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="Main">
      <h1>Oops!</h1>
      <h3>This page doesn't exist.</h3>
    </div>
  );
};

export default ErrorPage;
