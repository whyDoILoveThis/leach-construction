import Review from "./Review";

const HomeReviews = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 p-20">
      <h2 className="section-title">Reviews</h2>
      <div className="flex gap-10">
        <Review />
        <Review />
        <Review />
      </div>
      <button className="btn mt-14 text-btn-primary border-btn-primary">
        All Reviews
      </button>
    </div>
  );
};

export default HomeReviews;
