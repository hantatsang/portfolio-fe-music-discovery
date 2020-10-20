import { RAPID_API_KEY } from "../../config";
import { SearchMusicRequestPayload } from "../../types/SearchMusicRequestPayload";

export default function getSearchDeezer(params: SearchMusicRequestPayload) {
  const apiKey = RAPID_API_KEY;
  if (!apiKey) {
    throw new Error('Missing API key');
  }
  return fetch(`https://rapidapi.p.rapidapi.com/search?q=${params.query}`, {
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
      'useQueryString': 'true',
    }
  })
    .then(res => res.json());
}
