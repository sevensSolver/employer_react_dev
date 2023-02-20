import { Divider } from "antd";
import styles from "./index.module.css";

const CustomDropDown = ({ setFilter, statusArr, setPage }) => {
  const handleClick = (text) => {
    setFilter(text);
    setPage(0);
  };
  return (
    <div
      style={{
        padding: 10,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        cursor: "pointer",
      }}
    >
      {statusArr?.map((item, index) => (
        <div key={index}>
          <div
            className={styles.customDropdownItem}
            onClick={() => handleClick(item.text)}
          >
            <p className="mbZero">{item.text?.replace("_", " ")}</p>
          </div>
          {statusArr.length - 1 !== index && <Divider />}
        </div>
      ))}
    </div>
  );
};

export default CustomDropDown;
