import { getMovies } from "@/api/movie";
import SeeMoreButton from "@/components/SeeMoreButton";
import Link from "next/link";

const Home = async ({ searchParams }: { searchParams: any }) => {
  const { page } = searchParams;
  // console.log(page);
  const movies = await getMovies(page ?? 1);

  // console.log(movies);

  return (
    <>
      <div className="py-14 px-10 text-center">
        <h1 className="text-3xl">Cinema Ghar</h1>
        <div className="py-14 px-10 flex justify-center items-center flex-wrap gap-2">
          {movies?.results?.map((movie: any) => {
            return (
              <div key={movie?.id} className="mb-2 bg-[teal] p-2">
                <Link href={`/movies/${movie?.id}`} className="p-2">
                  {movie?.original_title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center text-center gap-3">
          <SeeMoreButton page={page} />
        </div>
      </div>

      {/* <video controls src="https://ap.lijit.com/readerinfo/v2"></video> */}
    </>
  );
};

export default Home;
