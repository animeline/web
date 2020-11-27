import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { ILatest } from "../../interfaces";

import {
  Container,
  Category,
  AnimeList,
  AnimeDetails,
  Thumbnail,
  AnimeThumbnail,
  AnimeTitle,
  AnimeMetaData,
  PaginationContainer,
  PaginationItem,
  ArrowLeft,
  ArrowRight,
} from "./styles";

const GET_LATEST_RELEASES = gql`
  query AllAnimes($limit: Float!, $page: Float!) {
    findByLatest(limit: $limit, page: $page) {
      total
      perPage
      data {
        video_id
        category_image
        category_id
        title
      }
    }
  }
`;

type AllAnimesData = {
  findByLatest: {
    total: number;
    perPage: number;
    data: ILatest[];
  };
}

type AllAnimesVars = {
  limit: number;
  page: number;
}

const Home: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { loading, data: { findByLatest } = {}, error } = useQuery<
    AllAnimesData,
    AllAnimesVars
  >(GET_LATEST_RELEASES, { variables: { limit: 10, page: currentPage } });

  useEffect(() => {
    setTotal(Number(findByLatest?.total));

    const totalPages = Math.ceil(total / Number(findByLatest?.perPage));
    const arrayPages: number[] = [];
    for (let i = 1; i <= totalPages; i++) arrayPages.push(i);

    setPages(arrayPages);
  }, [currentPage, findByLatest, total]);

  if (!findByLatest || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <Category>Lançamentos da Temporada</Category>

      <AnimeList>
        {findByLatest.data.map(
          ({ category_id, video_id, category_image, title }, index) => (
            <AnimeDetails key={index}>
              <Link to={`/animes/${category_id}/episode/${video_id}`}>
                <Thumbnail data-duration="00:00">
                  <AnimeThumbnail
                    src={`https://cdn.appanimeplus.tk/img/${category_image}`}
                    alt={title}
                  />
                </Thumbnail>

                <AnimeTitle>{title}</AnimeTitle>

                <AnimeMetaData>
                  <span>0 views</span>
                </AnimeMetaData>
              </Link>
            </AnimeDetails>
          )
        )}
      </AnimeList>

      <PaginationContainer>
        {currentPage > 1 && (
          <ArrowLeft onClick={() => setCurrentPage(currentPage - 1)} />
        )}

        {pages.map((page) => (
          <PaginationItem
            isSelect={page === currentPage}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationItem>
        ))}

        {currentPage < pages.length && (
          <ArrowRight onClick={() => setCurrentPage(currentPage + 1)} />
        )}
      </PaginationContainer>
    </Container>
  );
};

export default Home;
