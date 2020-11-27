export interface ILatest {
  video_id: string;
  category_id: string;
  title: string;
  category_image: string;
}

export interface IAnime {
  id: string;
  category_name: string;
  category_image: string;
}

export interface IAnimeDetails {
  id: string;
  category_name: string;
  category_image: string;
  category_description: string;
  category_genres: string;
  ano: string;
  count: string;
  off: string;
}

export interface IAnimeEpisode {
  video_id: string;
  category_id: string;
  title: string;
  location: string;
  locationsd: string;
  locationhd: string;
}

export interface IAnimeEpisodes {
  video_id: string;
  category_id: string;
  title: string;
}

export interface ICategory {
  id: string;
  category_name: string;
  category_image: string;
}
