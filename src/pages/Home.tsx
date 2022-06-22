import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;
