/* eslint-disable react/prop-types */
import quote from "../assets/quotation.png";

const SuccessCard = ({ img, name, description }) => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-center">
      <div className="self-start">
        <img src={quote} alt="quotation" />
      </div>
      <div className="w-44 h-44 rounded-2xl">
        <img
          className="w-full rounded-2xl"
          src={img}
          alt="profile picture"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold leading-9 my-4 capitalize">{name}</h1>
      </div>
      <div>
        <p className="text-base">
          {description.slice(0, 200)}{description.length > 200 && "..."}
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
