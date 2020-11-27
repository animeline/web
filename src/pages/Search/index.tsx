import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { IAnime } from '../../interfaces';
import { Container } from './styles';

interface Params {
  anime_name: string;
}

const Search: React.FC = () => {
  const { anime_name }: Params = useParams();

  const { data } = useFetch<IAnime[]>(
    `https://appanimeplus.tk/api-animesbr-10.php?search=${anime_name}`,
  );

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <h1>Resultados para {anime_name}</h1>

      <ul>
        {data.map(anime => (
          <li key={anime.id}>
            <Link to={`/animes/${anime.id}`}>
              <img
                src={`https://cdn.appanimeplus.tk/img/${anime.category_image}`}
                alt={anime.category_name}
                height="300"
                style={{ borderRadius: 25 }}
              />

              <h1>{anime.category_name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Search;
