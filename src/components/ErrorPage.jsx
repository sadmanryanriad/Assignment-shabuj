import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">There was an error</h1>
        <Link to={"/"}>
          <button className="btn bg-green-400 p-5 rounded-lg hover:text-white m-5 mx-auto text-xl font-semibold">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;