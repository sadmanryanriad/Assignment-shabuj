/* eslint-disable react/prop-types */
const MarqueeComponent = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-4 overflow-hidden">
      {children}{" "}
      <span className="text-3xl mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M16.3993 0.0619372L21.6315 12.1451L34.1247 16.3042L22.0416 21.5364L17.8824 34.0296L12.6502 21.9464L0.157057 17.7873L12.2402 12.5551L16.3993 0.0619372Z"
            fill="#15C5CE"
          />
        </svg>
      </span>
    </div>
  );
};

export default MarqueeComponent;
