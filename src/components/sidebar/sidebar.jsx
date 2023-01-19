import React, { useState } from "react";
import DatePicker from "react-datepicker";
import cssModules from "./sidebar.module.css";

import { Button, Container, Form, InputGroup } from "react-bootstrap";
// import { GoCalendar } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";

export default function Sidebar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container className={cssModules.container}>
      <div>
        <h3 className={cssModules.title} style={{ top: "160px" }}>
          Type of Rent
        </h3>
        <Button className={cssModules.btnTypeRent} style={{ left: "50px" }}>
          Day
        </Button>
        <Button className={cssModules.btnTypeRent} style={{ left: "187px" }}>
          Month
        </Button>
        <Button className={cssModules.btnTypeRent} style={{ left: "325px" }}>
          Year
        </Button>
      </div>

      <div>
        <h3 className={cssModules.title} style={{ top: "300px" }}>
          Date
        </h3>
        {/* <InputGroup size="md">
          <InputGroup.Text id="inputGroup-sizing-sm">
            <GoCalendar />
          </InputGroup.Text> */}
        <DatePicker
          selected={startDate}
          onChange={(Date) => setStartDate(Date)}
          className={cssModules.date}
          dateFormat="dd MMMM yyyy"
        />
        {/* </InputGroup> */}
      </div>

      <div>
        <h3 className={cssModules.title} style={{ top: "440px" }}>
          Property Room
        </h3>
        <p className={cssModules.subTitle} style={{ top: "482px" }}>
          Bedroom
        </p>
        <button
          className={cssModules.btnProp}
          style={{ left: "50px", top: "512px" }}
        >
          1
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "130px", top: "512px" }}
        >
          2
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "210px", top: "512px" }}
        >
          3
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "290px", top: "512px" }}
        >
          4
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "370px", top: "512px" }}
        >
          5+
        </button>
        <p
          className={cssModules.subTitle}
          style={{ top: "562px", top: "562px" }}
        >
          Bathroom
        </p>
        <button
          className={cssModules.btnProp}
          style={{ left: "50px", top: "591px" }}
        >
          1
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "130px", top: "591px" }}
        >
          2
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "210px", top: "591px" }}
        >
          3
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "290px", top: "591px" }}
        >
          4
        </button>
        <button
          className={cssModules.btnProp}
          style={{ left: "370px", top: "591px" }}
        >
          5+
        </button>
      </div>

      <div>
        <h3 className={cssModules.title} style={{ top: "666px" }}>
          Amenities
        </h3>
        <Form.Label
          className={cssModules.amenities}
          style={{ top: "709px" }}
          id="furnished"
        >
          Furnished
        </Form.Label>
        <Form.Check
          aria-label="furnished"
          className={cssModules.checkBox}
          style={{ top: "709px" }}
          id="furnished"
        />
        <Form.Label
          className={cssModules.amenities}
          style={{ top: "744px" }}
          id="pet"
        >
          Pet Allowed
        </Form.Label>
        <Form.Check
          aria-label="pet"
          className={cssModules.checkBox}
          style={{ top: "744px" }}
          id="pet"
        />
        <Form.Label
          className={cssModules.amenities}
          style={{ top: "779px" }}
          id="acommodation"
        >
          Shared Acommodation
        </Form.Label>
        <Form.Check
          aria-label="acommodation"
          className={cssModules.checkBox}
          style={{ top: "779px" }}
          id="acommodation"
        />
      </div>

      <div>
        <h3 className={cssModules.title} style={{ top: "839px" }}>
          Budget
        </h3>
        <InputGroup>
          <Form.Label id="basic-addon1" className={cssModules.budgetText} style={{top: "906px"}}>
            Less Than IDR.
          </Form.Label>
          <Form.Control
            placeholder="8.000.000"
            aria-label="budget"
            aria-describedby="basic-addon1"
            className={cssModules.budget}
          />
        </InputGroup>
      </div>

      <div>
        <Button className={cssModules.btnSubmit} style={{ top: "984px" }}>
          Apply
        </Button>
      </div>
    </Container>
  );
}
