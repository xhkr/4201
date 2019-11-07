import axios from 'axios';

// Constants
import { BASE_URL} from './constants';

const instance = axios.create({
  baseURL: BASE_URL
});

export const fetchTeams = (searchTerm) => {
  return instance
  .get(`/1/searchteams.php`, {
    headers: {},
    params: {
      't': searchTerm
    }
  })
  .then(response => response)
  .catch(error => console.log(error))
}
