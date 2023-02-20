// import { Button, Collapse } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// const { Panel } = Collapse;
// const text = `
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
// `;

// const CollapseComponent = () => {
//   const onChange = (key) => {
//     console.log(key);
//   };

//   return (
//     <Collapse
//       expandIcon={() => (
//         <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
//       )}
//       accordion
//       ghost
//       defaultActiveKey={["1"]}
//       onChange={onChange}
//     >
//       <Panel
//         header="What is the process of adding members on cover using the portal? "
//         key="1"
//       >
//         {<Button>Click here</Button>}
//         {/* <p style={{ marginLeft: 33, color: "gray" }}>{text}</p> */}
//       </Panel>
//       <Panel header="DC Benefits" key="2">
//         <p style={{ marginLeft: 33, color: "gray" }}> {text}</p>
//       </Panel>
//       <Panel header="Payment" key="3">
//         <p style={{ marginLeft: 33, color: "gray" }}>{text}</p>
//       </Panel>
//       <Panel header="Categories" key="4">
//         <p style={{ marginLeft: 33, color: "gray" }}>{text}</p>
//       </Panel>
//     </Collapse>
//   );
// };

// export default CollapseComponent;

import { Collapse, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FaFingerprint } from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

const CollapseComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenInPreAuth = () => {
    navigate("/inpatients");
  };
  const handleOpenOutPreAuth = () => {
    navigate("/pre-auths");
  };
  const handleNewClaim = () => {
    navigate("/claims");
  };

  const manual = (
    <a href="/ServiceProviderUserManual.pdf" target="_blank">
      User Manual
    </a>
  );

  return (
    <Collapse
      expandIcon={({ isActive }) =>
        !isActive ? (
          <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
        ) : (
          <MinusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
        )
      }
      accordion
      ghost
      style={{ overflowY: "scroll" }}
    >
      <Panel header="Claims" key="1">
        <Collapse
          ghost
          accordion
          expandIcon={({ isActive }) =>
            !isActive ? (
              <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            ) : (
              <MinusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            )
          }
          style={{ borderLeft: "1px solid #F87D4E55" }}
        >
          <Panel
            header="What is the process of adding members on cover using the portal?"
            key="1"
          >
            <Button
              type="text"
              className={styles.button}
              shape="round"
              onClick={handleNewClaim}
            >
              Click here to submit New Claim
            </Button>
          </Panel>
          <Panel
            header="What is the procedure for discharging patients?"
            key="2"
          >
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>Attach fully filled and signed claim form</li>
                <li>Itemized invoices</li>
                <li>Attach discharge summary and medical report.</li>
                <li>Submit as per this procedure {manual}</li>
              </p>
            </ul>
          </Panel>
          <Panel
            header="How do I view the status of my submitted claims?"
            key="3"
          >
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  <Button
                    type="text"
                    classname={styles.button}
                    shape="round"
                    onClick={() => navigate("/claims")}
                  >
                    Click here
                  </Button>
                </li>
              </p>
            </ul>
          </Panel>
          <Panel header="How long do I have to submit a claim?" key="4">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  You can submit a claim up to 90 days after the service was
                  delivered to the patient.
                </li>
              </p>
            </ul>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="Payments" key="2">
        <Collapse
          ghost
          accordion
          expandIcon={({ isActive }) =>
            !isActive ? (
              <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            ) : (
              <MinusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            )
          }
          style={{ borderLeft: "1px solid #F87D4E55" }}
        >
          <Panel header="How do I check payment status?" key="1">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  <Button
                    type="text"
                    classname={styles.button}
                    shape="round"
                    onClick={() => navigate("/payments")}
                  >
                    Click here
                  </Button>
                </li>
              </p>
            </ul>
          </Panel>
          <Panel header="How long does it take to receive payment?" key="2">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  Provided all the necessary information has been submitted your
                  claim will be paid within 30 days.
                </li>
              </p>
            </ul>
          </Panel>
          <Panel
            header="How do we receive payment after approval is done on the portal?"
            key="3"
          >
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li></li>
              </p>
            </ul>
          </Panel>
          <Panel header="What is the reconciliation procedure?" key="4">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li></li>
              </p>
            </ul>
          </Panel>
        </Collapse>
      </Panel>

      <Panel header="Pre-Authorizations" key="3">
        <Collapse
          ghost
          accordion
          expandIcon={({ isActive }) =>
            !isActive ? (
              <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            ) : (
              <MinusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            )
          }
          style={{ borderLeft: "1px solid #F87D4E55" }}
        >
          <Panel header="How do I submit pre-auth?" key="1">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  <Button
                    type="text"
                    classname={styles.button}
                    shape="round"
                    onClick={handleOpenInPreAuth}
                  >
                    Click here to submit Inpatient Pre-Auth
                  </Button>
                </li>
                <li>
                  <Button
                    type="text"
                    classname={styles.button}
                    shape="round"
                    onClick={handleOpenOutPreAuth}
                  >
                    Click here to submit Outpatient Pre-Auth
                  </Button>
                </li>
              </p>
            </ul>
          </Panel>
          <Panel header="How do I cancel pre-auth?" key="2">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>{/* Click here. */}</li>
              </p>
            </ul>
          </Panel>
          <Panel header="How do I edit pre-auth?" key="3">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>{/* Click here. */}</li>
              </p>
            </ul>
          </Panel>
          <Panel header="What is the TAT for pre-auth approval?" key="4">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>15 Minutes (within working hours (7am-8pm))</li>
              </p>
            </ul>
          </Panel>
          <Panel header=" What requires pre-authorization?" key="5">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                Below services within working hours (7am-8pm)
                <li>All optical services excluding consults</li>
                <li>All Dental services excluding consults</li>
                <li>Pharmacy prescription above Rwandan franc 150,000</li>
                <li>Inpatient admissions</li>
                <li>All day case procedures</li>
                <li>Physiotherapy treatment exceeding 5 sessions</li>
                <li>
                  Laboratory investigations exceeding Rwandan Franc 150,000
                </li>
              </p>
            </ul>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="General inquiries" key="4">
        <Collapse
          ghost
          accordion
          expandIcon={({ isActive }) =>
            !isActive ? (
              <PlusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            ) : (
              <MinusOutlined style={{ fontSize: 20, color: "#f87d4e" }} />
            )
          }
          style={{ borderLeft: "1px solid #F87D4E55" }}
        >
          <Panel header="Who is your regulator?" key="1">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>The Central bank of Rwanda</li>
              </p>
            </ul>
          </Panel>
          <Panel header="Where are your offices?" key="2">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>Norrsken Kigali House (former Ecole Belge de Kigali)</li>
              </p>
            </ul>
          </Panel>
          <Panel header="How do I access a list of active members?" key="3">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>{/* Click here to access our member list */}</li>
              </p>
            </ul>
          </Panel>
          <Panel
            header="What other service providers do you work with?"
            key="4"
          >
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>
                  {/* Click here to access our list of service providers */}
                </li>
              </p>
            </ul>
          </Panel>
          <Panel header="How do I register a new branch?" key="5">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}></p>
            </ul>
          </Panel>
          <Panel header="What is offsmart procedure?" key="6">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>Scan smartcard/ID Card</li>
                <li>Send to support@edencaremedical.com</li>
                <li>State reason for offsmart</li>
              </p>
            </ul>
          </Panel>
          <Panel
            header="How do we resolve undetected finger prints issues?"
            key="7"
          >
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}>
                <li>Scan smartcard/ID Card</li>
                <li>Send to support@edencaremedical.com</li>
                <li>State reason for offsmart</li>
              </p>
            </ul>
          </Panel>
          <Panel header="How do I resolve portal downtime?" key="8">
            <ul>
              <p style={{ marginLeft: "0px", color: "gray" }}></p>
            </ul>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent;
