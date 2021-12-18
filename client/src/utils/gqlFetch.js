import axios from 'axios';
import nprogress from 'nprogress';

const gqlFetch = async ({
  query,
  variables = {},
  beforeFetch = () => { },
  afterFetch = () => { },
}) => {
  nprogress.start();
  beforeFetch();
  const result = await axios({
    url: 'http://localhost:4000/graphql',
    method: 'post',
    data: { query, variables },
  });
  afterFetch();
  nprogress.done();
  return result;
};

export default gqlFetch;
