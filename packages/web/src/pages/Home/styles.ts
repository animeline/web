import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);

  padding: 40px;
`;

export const Category = styled.h3`
  text-transform: uppercase;

  font-size: 16px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.4);
`;

export const AnimeList = styled.section`
  width: 100%;

  margin: 15px 0;

  display: grid;
  grid-template-columns: repeat(5, auto);

  @media (max-width: 1050px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 510px) {
    grid-template-columns: 0;
  }
`;

export const AnimeDetails = styled.div`
  width: 220px;

  margin-top: 10px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.a`
  position: relative;
  display: flex;

  &::before {
    content: attr(data-duration);

    position: absolute;

    right: 0px;
    bottom: 0px;

    padding: 3px 5px;

    font-size: 12px;

    color: white;

    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const AnimeThumbnail = styled.img`
  object-fit: cover;
  object-position: 100% 0;

  width: 220px;
  height: 130px;
`;

export const AnimeTitle = styled.h4`
  grid-column: 1 / -1;

  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
`;

export const AnimeMetaData = styled.div`
  > span {
    color: rgba(0, 0, 0, 0.5);
  }
`;
