import { HiOutlineDocumentText } from "react-icons/hi";

const DocView = ({ docs, setIsDocVisible, setCurrentDocs }) => {
  const handleViewAll = (e) => {
    setCurrentDocs(docs);
    setIsDocVisible(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
      }}
      onClick={(e) => handleViewAll(e)}
      id="docCell"
    >
      <HiOutlineDocumentText size={20} color="#f87d4e" />
      <span style={{ fontSize: 10 }}>View All</span>
    </div>
  );
};

export default DocView;
