const Info = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "250px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>차량명</span>
        <span style={{ color: "black" }}>쏘렌토</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>트림</span>
        <span style={{ color: "black" }}>가솔린 터보</span>
      </div>
    </section>
  );
};

export default Info;
