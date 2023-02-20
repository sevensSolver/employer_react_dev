const ColorRound = ({ height, width, status }) => {
  let color =
    status === "Inactive" ? "#FEC828" : status === "Active" ? "green" : "red";
  return (
    <div
      style={{
        height: height ? height : 10,
        width: width ? width : 10,
        backgroundColor: color,
        borderRadius: "50%",
      }}
    />
  );
};

export default ColorRound;
