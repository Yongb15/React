// Heart.jsx
const HeartButton = () => {
  const happy = () => alert("행복");

  return (
    <button onClick={happy} style={{ backgroundColor: "pink" }}>
      💛
    </button>
  );
};

export default HeartButton;
