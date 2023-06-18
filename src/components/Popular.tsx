import { getPopular, makeImagePath } from "../api";
import { useQuery } from "@tanstack/react-query";
import MainContainer from "./styles/MainContainer";
import ListContainer from "./styles/ListContainer";
import CardDiv from "./styles/CardDiv";
import CoverImg from "./styles/CoverImg";
import MovieTitle from "./styles/MovieTitle";
import { useState } from "react";
import DetailDiv from "./styles/DetailDiv";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function Popular() {
  const { isLoading: popularIsLoading, data: popularData } = useQuery(
    ["popularQuery"],
    getPopular
  );
  const [clicked, setClicked] = useState(false);
  const onClicked = () => setClicked((prev) => !prev);
  const popularDataResults = popularData?.results;
  console.log(popularDataResults);
  return (
    <MainContainer>
      <h1>Popular Page!</h1>
      {!popularIsLoading ? (
        <ListContainer>
          {popularDataResults?.map((data: IMovie) => (
            <CardDiv onClick={onClicked} key={data.id}>
              <CoverImg src={makeImagePath(data.poster_path)} />
              <MovieTitle>{data.title}</MovieTitle>
            </CardDiv>
          ))}
        </ListContainer>
      ) : (
        "is Loading..."
      )}
      {clicked ? <DetailDiv /> : null}
    </MainContainer>
  );
}

export default Popular;
