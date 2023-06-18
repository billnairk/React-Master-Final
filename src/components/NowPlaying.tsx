import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, makeImagePath } from "../api";
import MainContainer from "./styles/MainContainer";
import ListContainer from "./styles/ListContainer";
import CardDiv from "./styles/CardDiv";
import CoverImg from "./styles/CoverImg";
import MovieTitle from "./styles/MovieTitle";

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

function NowPlaying() {
  const { isLoading: nowPlayingDataIsLoading, data: nowPlayingData } = useQuery(
    ["nowPlayingQuery"],
    getNowPlaying
  );
  const nowPlayingDataResults = nowPlayingData?.results;
  return (
    <MainContainer>
      <h1>NowPlaying Page!</h1>
      {!nowPlayingDataIsLoading ? (
        <ListContainer>
          {nowPlayingDataResults?.map((data: IMovie) => (
            <CardDiv key={data.id}>
              <CoverImg src={makeImagePath(data.poster_path)} />
              <MovieTitle>{data.title}</MovieTitle>
            </CardDiv>
          ))}
        </ListContainer>
      ) : (
        "NowPlaying is Loading..."
      )}
    </MainContainer>
  );
}

export default NowPlaying;
