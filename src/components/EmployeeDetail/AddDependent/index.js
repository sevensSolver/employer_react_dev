import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Main from "../../../template";
import FormSection from "./FormSection";

const Index = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <div style={{ width: "90%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 65,
          }}
        >
          <HiOutlineArrowLeft
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/employees")}
            size={30}
          />
          <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Add Dependent</h3>
        </div>
        <div style={{ marginLeft: 75 }}>
          <FormSection />
        </div>
      </div>
    </Main>
  );
};

export default Index;
