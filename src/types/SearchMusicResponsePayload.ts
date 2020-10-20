import { SongPayload } from "./SongPayload";

export interface SearchMusicResponsePayload {
  data: SongPayload[];
  total: string;
  next: string;
}
