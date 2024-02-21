import userMock from "/src/assets/user-mock.png";

const Review = () => {
  return (
    <div>
      <div className="name flex items-center">
        <img className="w-20 h-20" src={userMock} alt="" />
        <p className="p-4">Jimmy Ass</p>
      </div>
      <p className="mb-6 mt-2">⭐⭐⭐⭐⭐ 6/9/23</p>
      <p className="tag-home">
        Top notch service bitch im tellin ya i had this big ass job an they did
        that shit like a mf.
      </p>
    </div>
  );
};

export default Review;
