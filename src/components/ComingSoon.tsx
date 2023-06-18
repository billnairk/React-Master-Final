import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath } from "../api";
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

function ComingSoon() {
  const { isLoading, data } = useQuery(["comingSoonQuery"], getComingSoon);
  const comingSoonData = data?.results;
  return (
    <MainContainer>
      <h1>ComingSoon Page!</h1>
      {!isLoading ? (
        <ListContainer>
          {comingSoonData?.map((data: IMovie) => (
            <CardDiv key={data.id}>
              <CoverImg src={makeImagePath(data.poster_path)} />
              <MovieTitle>{data.title}</MovieTitle>
            </CardDiv>
          ))}
        </ListContainer>
      ) : (
        "ComingSoon is Loading..."
      )}
    </MainContainer>
  );
}

export default ComingSoon;
