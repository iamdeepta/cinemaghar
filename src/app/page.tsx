import { getMovies } from "@/api/movie";
import Searchbar from "@/components/Searchbar";
import SeeMoreButton from "@/components/SeeMoreButton";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: { searchParams: any }) => {
  const { page, title } = searchParams;
  // console.log(page);
  const movies = await getMovies(page ?? 1, title ?? "");

  // console.log(movies);

  return (
    <>
      <div className="py-14 px-10 text-center">
        <div style={{ position: "sticky", top: "10px", zIndex: 999 }}>
          <h1 className="text-3xl">Cinema Ghar</h1>
          <Searchbar title={title} />
        </div>
        <div className="py-14 px-10 flex justify-center items-center flex-wrap gap-2">
          {movies?.results?.map((movie: any) => {
            return (
              <div key={movie?.id} className="">
                <Link
                  href={`/movies/${movie?.id}?title=${title}&page=${page}`}
                  className="p-2"
                >
                  {/* {movie?.original_title} */}
                  {movie?.poster_path && (
                    <div>
                      <Image
                        alt="movie image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        style={{ objectFit: "cover", borderRadius: "6px" }}
                        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      />
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center text-center gap-3">
          <SeeMoreButton page={page} title={title} movies={movies?.results} />
        </div>
      </div>

      {/* <video controls src="https://ap.lijit.com/readerinfo/v2"></video> */}
    </>
  );
};

export default Home;
