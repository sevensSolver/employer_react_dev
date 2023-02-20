import React from "react";
import styles from "./index.module.css";

const UpcomingAppoinments = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 15,
      }}
    >
      {data.map((item, index) => (
        <div key={index} className={styles.upcommingBox}>
          <img
            src={item.img}
            alt=""
            style={{
              height: 100,
              borderTopLeftRadius: "10%",
              borderTopRightRadius: "10%",
            }}
          />

          <div
            style={{
              position: "relative",
              paddingLeft: 15,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <img
              src={item.icon}
              style={{ height: 28, position: "absolute", top: -30 }}
              alt=""
            />

            <p
              style={{
                fontSize: 8,
                fontWeight: 300,
                marginBottom: 3,
              }}
            >
              05 Jan 2020
            </p>

            <p
              style={{
                fontSize: 11,
                lineHeight: 1,
                fontWeight: 700,
                marginBottom: 3,
              }}
            >
              Biometric Screening
            </p>

            <p
              style={{
                fontSize: 8,
                fontWeight: 300,
                marginBottom: 3,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAppoinments;
