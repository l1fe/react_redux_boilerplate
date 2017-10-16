import { apiPath } from 'configuration';
import { createApi } from 'components/Http';

export default createApi({
  items: {
    url: `${apiPath}/items`,
  },
});
