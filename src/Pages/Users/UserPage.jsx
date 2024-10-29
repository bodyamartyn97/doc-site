import { Link, useLoaderData } from 'react-router-dom';

export const UserPage = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="Main user-page">
      <div>
        <Link to="/users">Back</Link>
      </div>
      <img src={user.img} alt="avatar" />
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.email}</h2>
    </div>
  );
};
