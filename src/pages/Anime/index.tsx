import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { IAnimeDetails, IAnimeEpisodes } from '../../interfaces';
import { Container } from './styles';

interface Params {
  anime_id: string;
}

const Anime: React.FC = () => {
  const { anime_id }: Params = useParams();

  const animes = useFetch<IAnimeDetails[]>(
    `https://appanimeplus.tk/api-animesbr-10.php?info=${anime_id}`,
  );
  const episodes = useFetch<IAnimeEpisodes[]>(
    `https://appanimeplus.tk/api-animesbr-10.php?cat_id=${anime_id}`,
  );

  if (!(animes.data && episodes.data)) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <ul>
        {animes.data.map(anime => (
          <li key={anime.id}>
            <img
              src={`https://cdn.appanimeplus.tk/img/${anime.category_image}`}
              alt={anime.category_name}
              height="300"
              style={{ borderRadius: 25 }}
            />

            <h1>{anime.category_name}</h1>

            <br />

            <strong>{anime.ano}</strong>

            <br />

            <span>{anime.category_genres}</span>

            <br />
            <br />

            <p>{anime.category_description}</p>

            <br />

            <h3>Episódios</h3>

            <br />

            <ul>
              {episodes.data?.map(episode => (
                <li key={episode.video_id}>
                  <Link to={`/animes/${anime.id}/episode/${episode.video_id}`}>
                    {episode.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Anime;
