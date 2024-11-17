// LikeButton.jsx
const LikeButton = () => {
  const animal = "강아지";

  const hello = (guest) => `${guest || "guest"}님 환영합니다!`;

  return (
    <div>
      <button>{hello("백종원")}</button>
      <button>{animal} 좋아요!</button>
      <button>{animal} 싫어요ㅠ</button>
      <button>{5 > 3 ? "헉" : "혹"}</button>
    </div>
  );
};

export default LikeButton;
