import { useContext } from "react";
import { GenreContext } from "../context/GenreContext";
/* eslint-disable react/prop-types */

function Genre ({ genre }) {
  const { allGenre } = useContext(GenreContext);
  return (
    <div className="absolute right-1 bottom-1 flex flex-col ">
      {!allGenre
        ? null
        : genre.map((g) => {
            return (
              <span
                className="text-sm bg-[#0072B1] text-white  m-0.5 p-1 flex items-center justify-center rounded-full font-semibold "
                key={g}
              >
                {allGenre[g]?.name}
              </span>
            );
          })}
    </div>
  );
}
export default Genre;
