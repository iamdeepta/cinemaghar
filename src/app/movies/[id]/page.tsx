const Movies = ({ params }: any) => {
  const { id } = params;

  return (
    <div
      className="flex justify-center items-center"
      style={{ overflowY: "hidden" }}
    >
      <iframe
        src={`https://2embed.org/embed/movie/${id}`}
        className="w-[100vw] h-[100vh]"
        style={{ overflowY: "hidden" }}
      ></iframe>

      {/* <video
        src="https://2embed.org/embed/movie/tt17048514"
        width="400"
        controls
      >
        <source
          src="https://2embed.org/embed/movie/tt17048514"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};

export default Movies;
