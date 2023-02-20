const ColorRound = ({ height, width, color }) => {
  return (
    <div
      style={{
        height: height ? height : 10,
        width: width ? width : 10,
        backgroundColor: color,
        borderRadius: '50%',
      }}
    />
  );
};

export default ColorRound;
