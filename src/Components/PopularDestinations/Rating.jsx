import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

export default function Rating({rating}) {
  if (rating < 1) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
      </div>
    );
  } else if (rating >= 1 && rating < 2) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStar />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
      </div>
    );
  } else if (rating >= 2 && rating < 3) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
      </div>
    );
  } else if (rating >= 3 && rating < 4) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStarBorder />
        <MdOutlineStarBorder />
      </div>
    );
  } else if (rating >= 4 && rating < 5) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStarBorder />
      </div>
    );
  } else if (rating >= 5) {
    return (
      <div className="flex flex-row justify-center items-center">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </div>
    );
  }
}
