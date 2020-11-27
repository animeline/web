import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { ILatest } from '../../interfaces';
import { Container } from './styles';

const Latest: React.FC = () => {
  const { data } = useFetch<ILatest[]>(
    'https://appanimeplus.tk/api-animesbr-10.php?latest',
  );

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <ul>
        {data.map(anime => (
          <li key={anime.category_id}>
            <Link to={`/animes/${anime.category_id}`}>
              <img
                src={`https://cdn.appanimeplus.tk/img/${anime.category_image}`}
                alt={anime.title}
                height="300"
                style={{ borderRadius: 25 }}
              />

              <h1>{anime.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Latest;
