import { SearchMusicItemPayload } from "./SearchMusicItemPayload";

export interface SearchMusicResponsePayload {
  data: SearchMusicItemPayload[];
  total: string;
  next: string;
}
