import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { IAnimeEpisode } from '../../interfaces';
import { Container } from './styles';

interface Params {
  video_id: string;
}

const Episode: React.FC = () => {
  const { video_id }: Params = useParams();

  const { data } = useFetch<IAnimeEpisode[]>(
    `https://appanimeplus.tk/api-animesbr-10.php?episodios=${video_id}`,
  );

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      {data.map(episode => (
        <div key={episode.video_id}>
          <h1>{episode.title}</h1>

          {episode.location ? (
            <div>
              <video src={episode.location} controls>
                Seu navegador não suporta o elemento <code>video</code>.
              </video>
            </div>
          ) : (
            ''
          )}

          <br />

          {episode.locationhd ? (
            <div>
              <video src={episode.locationhd} controls>
                Seu navegador não suporta o elemento <code>video</code>.
              </video>
            </div>
          ) : (
            ''
          )}

          <br />

          {episode.locationsd ? (
            <div>
              <video src={episode.locationsd} controls>
                Seu navegador não suporta o elemento <code>video</code>.
              </video>
            </div>
          ) : (
            ''
          )}

          <br />
        </div>
      ))}
    </Container>
  );
};

export default Episode;
