import { BiSolidStar } from "react-icons/bi";
/* eslint-disable react/prop-types */
function Rating({ data }) {
  return (
    <div>
      <span className="text-base md:text-lg bg-[#0072B1] text-white w-14  flex items-center justify-center rounded-full  font-semibold absolute left-1 bottom-1">
        <BiSolidStar />
        {data.toFixed(2)}
      </span>
    </div>
  );
}

export default Rating;
