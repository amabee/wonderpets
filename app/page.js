"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/style.css";
import {
  Table,
  Card,
  Dropdown,
  Modal,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import Swal from "sweetalert2";

export default function Home() {
  const [showInputUserModal, setShowInputUserModal] = useState(false);
  const [user, setUser] = useState();

  const handleShowInputUserModal = async () => {
    const { value: email } = await Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    if (email) {
      Swal.fire(`Entered email: ${email}`);
    }
  };
  const handleCloseInputUserModal = () => setShowInputUserModal(false);

  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    if (getUser === null) {
      handleShowInputUserModal();
    }
  }, []);

  const getUser = async () => {};

  return (
    <div className="wonderPetsContainer">
      <div className="header">
        <im
          src="/images/image.svg"
          width={120}
          height={120}
          alt="Wonder Pets Logo"
        />
      </div>
      <div className="mainContent">
        <div className="mb-3 ms-auto">
          <div className="row">
            <div className="col-auto">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort By
                </Dropdown.Toggle>
              </Dropdown>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                onClick={handleShowInputUserModal}
              >
                CREATE NEW PET
              </button>
            </div>
          </div>
        </div>

        <Card style={{ overflowY: "scroll", maxHeight: "25rem" }}>
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>

      {/* <Modal
        show={showInputUserModal}
        onHide={handleCloseInputUserModal}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header>
          <Modal.Title className="w-100 text-center">
            USING THE APP AS:
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required={true}
            />
          </InputGroup>

          <div className="d-flex flex-column align-items-center">
            <Button type="submit">Start Using Now</Button>
            <span className="my-2">----Or----</span>
            <Button>Create New User</Button>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}
