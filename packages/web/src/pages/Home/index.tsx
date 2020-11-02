import React from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { ILatest } from '../../interfaces';
import {
  Container,
  Category,
  AnimeList,
  AnimeDetails,
  Thumbnail,
  AnimeThumbnail,
  AnimeTitle,
  AnimeMetaData,
} from './styles';

const Home: React.FC = () => {
  const { data } = useFetch<ILatest[]>(
    'https://appanimeplus.tk/api-animesbr-10.php?latest',
  );

  return (
    <Container>
      <Category>Lançamentos da Temporada</Category>

      <AnimeList>
        {data?.map(anime => (
          <AnimeDetails key={anime.category_id}>
            <Link to={`/animes/${anime.category_id}/episode/${anime.video_id}`}>
              <Thumbnail data-duration="00:00">
                <AnimeThumbnail
                  src={`https://cdn.appanimeplus.tk/img/${anime.category_image}`}
                  alt={anime.title}
                />
              </Thumbnail>

              <AnimeTitle>{anime.title}</AnimeTitle>

              <AnimeMetaData>
                <span>0 views</span>
              </AnimeMetaData>
            </Link>
          </AnimeDetails>
        ))}
      </AnimeList>
    </Container>
  );
};

export default Home;
