import { Link } from 'react-router-dom';
import data from '../../data/users.json';

export default function Users() {
  return (
    <div className="Main">
      <h1>Users</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/users/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
