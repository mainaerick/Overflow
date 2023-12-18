import { Col, Row, Avatar, theme } from "antd";
import React from "react";
import { toAbsoluteUrl } from "../../helpers";

type Props = {
  colorBgContainer: string;
};

const SideBar = (props: Props) => {
  const columnStyle: React.CSSProperties = {
    background: props.colorBgContainer,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 26,

  };
  return (
    <Col >
      <Col style={columnStyle}>
        <a href="/home">
          <Row style={{}}>
            
            <Avatar
              src={toAbsoluteUrl("/media/logos/Database.svg")}
              shape="square"
              size={"default"}
              style={{
                backgroundColor: props.colorBgContainer,
                color: "black",
              }}
            />
          </Row>
        </a>
        <Row>
          <Avatar
            src={toAbsoluteUrl("/media/logos/Calendar.svg")}
            shape="square"
            size={"default"}
            style={{ backgroundColor: props.colorBgContainer, color: "black" }}
          />
        </Row>
        <Row>
          {" "}
          <Avatar
            src={toAbsoluteUrl("/media/logos/Folder.svg")}
            shape="square"
            size={"default"}
            style={{ backgroundColor: props.colorBgContainer, color: "black" }}
          />
        </Row>
        <Row>
          {" "}
          <Avatar
            src={toAbsoluteUrl("/media/logos/Phone.svg")}
            shape="square"
            size={"default"}
            style={{ backgroundColor: props.colorBgContainer, color: "black" }}
          />
        </Row>
        <Row>
          {" "}
          <Avatar
            src={toAbsoluteUrl("/media/logos/Setting.svg")}
            shape="square"
            size={"default"}
            style={{ backgroundColor: props.colorBgContainer, color: "black" }}
          />
        </Row>
      </Col>
    </Col>
  );
};

export default SideBar;
