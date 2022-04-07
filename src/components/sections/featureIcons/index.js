import React from "react";
import { Row, Container } from "react-bootstrap";

import IconItem from "./iconItem";
import "./featureIcons.scss";

function FeatureIcons(props) {
  return (
    <section className={`"usps" ${props.grey ? "sectionOn" : ""}`} id="down_btn">
      <Container>
        <Row className="justify-content-md-center">
          {props.icons && props.icons.map((icon, index) => <IconItem key={index} data={icon} />)}
        </Row>
      </Container>
    </section>
  );
}

export default FeatureIcons;
