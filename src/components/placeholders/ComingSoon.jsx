import {} from "react";
import Loading from "../svgs/Loading";

const ComingSoon = () => {
  return (
    <div className="p-8 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
      <h1 className="mb-4 text-5xl font-bold text-gray-800 dark:text-gray-400">
        Coming Soon
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        We&apos;re working hard to bring you something amazing!
      </p>
      <div className="flex justify-center">
        <Loading />
      </div>
    </div>
  );
};

export default ComingSoon;
