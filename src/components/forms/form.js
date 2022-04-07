import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

import "./formStyles.scss";

function FormComp(props) {
  const formHeading = props.data.formHeading || null;
  const formSubHeading = props.data.formSubHeading || null;

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires;
  }
  function getParam(p) {
    var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    var href = window.location.href;
    if (href.indexOf("?") != -1) {
      var hrefsplit = href.split("?");

      var param = hrefsplit[1].split("&");
      for (var i = 0; i < param.length; i++) {
        var a = param[i].split("=");
        if (a[0] == "utm_source") document.getElementById("00N2w00000DXDap").value = a[1];
        if (a[0] == "utm_medium") document.getElementById("00N2w00000DXDbN").value = a[1];
        if (a[0] == "utm_campaign") document.getElementById("00N2w00000DXDb0").value = a[1];
        if (a[0] == "utm_content") document.getElementById("00N2w00000DXDan").value = a[1];
        if (a[0] == "utm_term") document.getElementById("00N2w00000DXDbI").value = a[1];
      }

      var name = new RegExp("(?:^|;\\s*)gclid=([^;]*)").exec(document.cookie);
      document.getElementById("00N2w00000DXDb8").value = name ? name[1].split(",")[1] : "";

      var gclid = getParam("gclid");
      if (gclid) {
        var gclsrc = getParam("gclsrc");
        if (!gclsrc || gclsrc.indexOf("aw") !== -1) {
          setCookie("gclid", gclid, 90);
        }
      }

      document.getElementById("00N2w00000DXDbW").value = window.location;
    }
  });

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      id="ssform"
    >
      {/* SalesForce Tracking Start*/}
      <input type="hidden" name="oid" value="00D2w000000ny8T" />
      <input type="hidden" name="retURL" value="http://australiandebtsolvers.com.au/thank-you" />
      <input
        id="company"
        maxLength="40"
        size="20"
        type="text"
        style={{ display: "none" }}
        name="mackaygoodwin"
      />
      <input
        type="hidden"
        id="idstamp"
        name="idstamp"
        value="neiHhtqcuCCjnL96V1WiDTuzNVhq3CLy5d8xA3m5d2I="
      />

      <select
        style={{ display: "none" }}
        id="00N2w00000DXDbL"
        name="00N2w00000DXDbL"
        title="Lead Type Source"
      >
        <option value="ADS">ADS</option>
      </select>

      <input
        id="lead_source"
        maxLength="255"
        name="lead_source"
        size="20"
        type="hidden"
        value="Web Form"
      />

      <input id="00N2w00000DXDap" maxLength="255" name="00N2w00000DXDap" size="20" type="hidden" />

      <input id="00N2w00000DXDb0" maxLength="255" name="00N2w00000DXDb0" size="20" type="hidden" />

      <input id="00N2w00000DXDan" maxLength="255" name="00N2w00000DXDan" size="20" type="hidden" />

      <input id="00N2w00000DXDbN" maxLength="255" name="00N2w00000DXDbN" size="20" type="hidden" />

      <input id="00N2w00000DXDbJ" maxLength="255" name="00N2w00000DXDbJ" size="20" type="hidden" />
      <input id="00N2w00000DXDbW" maxLength="255" name="00N2w00000DXDbW" size="20" type="hidden" />
      <input id="00N2w00000DXDb8" maxLength="255" name="00N2w00000DXDb8" size="20" type="hidden" />

      <textarea
        style={{ display: "none" }}
        id="00N2w00000DXDbI"
        name="00N2w00000DXDbI"
        type="hidden"
        wrap="soft"
      ></textarea>
      {/* SalesForce Tracking End*/}

      <div className="free_form">
        <h3>{formHeading}</h3>
        {formSubHeading && <p>{formSubHeading}</p>}
        <Row>
          <Col md={6}>
            <Form.Control
              required
              type="text"
              placeholder="Name*"
              id="last_name"
              name="last_name"
            />
          </Col>
          <Col md={6}>
            <Form.Control required type="email" placeholder="Email*" id="email" name="email" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Control required type="text" placeholder="Telephone*" name="mobile" id="mobile" />
          </Col>
          <Col md={6}>
            <select id="state" name="state">
              <option value="nsw">NSW</option>
              <option value="qld">QLD</option>
              <option value="sa">SA</option>
              <option value="tas">TAS</option>
              <option value="vic">VIC</option>
              <option value="wa">WA</option>
              <option value="act">ACT</option>
              <option value="nt">NT</option>
            </select>
            <div className="border"></div>
            <input type="text" placeholder="Postcode" id="zip" name="zip" className="pin_code" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <textarea
              rows="4"
              cols="50"
              name="description"
              placeholder="Financial Situation"
            ></textarea>
          </Col>
        </Row>
        <button type="submit" name="submit">
          Get a Free Consultation
        </button>
        <span className="required">* = required field</span>
      </div>
    </Form>
  );
}

export default FormComp;
