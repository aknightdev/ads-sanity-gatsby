import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../../portableText";
import BorderButton from "../../common/borderButton";
import "./tileImageContent.scss";

function TileImageContent(props) {
  const illustration = props.background.image;

  return (
    <section className={`tileImageContent ${props.grey ? "sectionOn" : ""}`} id="down_btn">
      <Row className={`no-gutters ${props.layout === "left" ? "" : "flex-row-reverse"}`}>
        <Col sm={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
          <div className="tileBG">
            <Image
              // pass asset, hotspot, and crop fields
              {...illustration}
              // tell Sanity how large to make the image (does not set any CSS)
              width={600}
              className="imgBanner"
              alt={illustration.alt}
            />
          </div>
        </Col>
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 6, order: 2 }}
          className={`content ${props.layout === "left" ? "" : "left"}`}
        >
          <h2>{props.heading}</h2>
          {props.content && <PortableText blocks={props.content} />}
          {props.borderButton && <BorderButton data={props.borderButton} />}
        </Col>
      </Row>
    </section>
  );
}

export default TileImageContent;
