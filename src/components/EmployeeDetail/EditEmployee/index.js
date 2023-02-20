import React, { useEffect } from "react";
import Main from "../../../template";
import EditEmployee from "./EditProfile";

import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetails } from "../../../store/employeeDetails";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let employeeDetail = useSelector((state) => state.employeeDetail);

  useEffect(() => {
    if (id) {
      dispatch(getProfileDetails(id));
    }
  }, [id, dispatch]);

  return (
    <Main pageName="Employees">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <HiOutlineArrowLeft
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
          size={30}
        />
        <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Edit Employee</h3>
      </div>
      {employeeDetail.loading !== true && employeeDetail.data && (
        <EditEmployee data={employeeDetail.data} />
      )}
    </Main>
  );
};

export default Index;
