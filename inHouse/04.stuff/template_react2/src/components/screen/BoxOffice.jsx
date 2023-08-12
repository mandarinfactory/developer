import { useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function BoxOffice({ isBoxOffice, setNotUpdatedInfos }) {
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const clickHandler = (v) => {
    const clickedTitle = v.target.innerText.replace(/1?2?3?4?5?./, "");
    MovieInfosCtx.setSearchMovieKeyword(clickedTitle);
    MovieInfosCtx.setIsBoxClicked(true);
  };
  if (MovieInfosCtx.isBoxClicked) {
    const filteredTitle = MovieInfosCtx.boxesMoviesInfo?.find((e) => {
      return (
        e.titleEtc.substring(0, e.titleEtc.indexOf("^")) ==
        MovieInfosCtx.searchMovieKeyword?.replace(/ /g, "")
      );
    });
    if (filteredTitle !== undefined) {
      MovieInfosCtx.setMovieVal(filteredTitle);
      MovieInfosCtx.setDetailMovieInfos(true);
      setNotUpdatedInfos(false);
    } else {
      setNotUpdatedInfos(true);
    }
  }

  return (
    <>
      {isBoxOffice ? (
        <div className="w-[50%]">
          {MovieInfosCtx.isLoading ? (
            <h1 className="p-10 text-3xl">로딩중......</h1>
          ) : (
            <div className="w-full p-5 my-3 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
              {MovieInfosCtx.moviesInfo.map((movie, i) => (
                <div
                  className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100 hover:bg-slate-200 cursor-pointer"
                  data-key={movie.movieCd}
                  key={movie.movieCd}
                  onClick={clickHandler}
                >
                  <h3 className="mx-10 my-3 text-3xl">
                    {i + 1}. {movie.movieNm}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}