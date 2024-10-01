import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';
import { Link } from 'react-router-dom';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            users?.map(user => <p><Link to={`/profiles/${user._id}`}>{user.username}</Link></p>)
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
