import { AlbumPayload } from "./AlbumPayload";
import { ArtistPayload } from "./ArtistPayload";

export interface SearchMusicItemPayload {
  id: number;
  title: string;
  title_short: string;
  link: string;
  md5_image: string;
  artist: ArtistPayload;
  album: AlbumPayload;
  preview: string;
  type: string;
}
