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
import axios from "axios";
import { ENDPOINT } from "@/globals/endpoints";
import { swal } from "@/globals/swal";

export default function Home() {
  const [showInputUserModal, setShowInputUserModal] = useState(false);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  const handleShowInputUserModal = async () => {
    const { value: inputName } = await Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      title: "Input Name",
      input: "text",
      inputLabel: "Your name",
      inputPlaceholder: "Enter your name",
      confirmButtonText: "Submit",
      footer:
        '<button id="createNewUserButton" class="btn btn-primary swal2-styled">Create as a New User</button>',
      didOpen: () => {
        document
          .getElementById("createNewUserButton")
          .addEventListener("click", () => {
            Swal.fire("Creating a new user...");
          });
      },
      preConfirm: async (inputName) => {
        if (!inputName) {
          Swal.showValidationMessage("Please enter a name");
          return false;
        }

        Swal.showLoading();
        setName(inputName);
        await getUser(inputName);
        Swal.hideLoading();
      },
    });
  };

  const handleCloseInputUserModal = () => setShowInputUserModal(false);

  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    const parsedUser = JSON.parse(getUser);
    if (getUser === null) {
      handleShowInputUserModal();
    } else {
      setUser(parsedUser);
    }
  }, [user]);

  const getUser = async (name) => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getUser",
          json: JSON.stringify({
            name: name,
          }),
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          handleCloseInputUserModal();
          swal("Welcome Back!", "User " + `${name}`, "success");
          sessionStorage.setItem("user", JSON.stringify(res.data.success));
        } else {
          swal("User Error: ", JSON.stringify(res.data.error), "error", () => {
            handleShowInputUserModal();
          });
        }
      } else {
        swal("Status Error:", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error: ", error, "error");
    }
  };

  return (
    <div className="wonderPetsContainer">
      <div className="header text-center p-4">
        <img
          src="/images/wonderpets.png"
          width={250}
          height={150}
          alt="Wonder Pets Logo"
        />
        <h1 className="mt-3" style={{ color: "black", fontWeight: "bold" }}>
          {" "}
          {"Welcome back! " + user.Name || "Welcome to Wonder Pets!"}
        </h1>
      </div>
      <div className="mainContent p-4">
        <div className="mb-3 ms-auto">
          <div className="row">
            <div className="col-auto">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Date Added</Dropdown.Item>
                </Dropdown.Menu>
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

        <Card
          className="shadow-sm"
          style={{ overflowY: "scroll", maxHeight: "25rem" }}
        >
          <Card.Body>
            <Table responsive striped bordered hover>
              <thead className="table-dark">
                <tr>
                  <th>PET ID</th>
                  <th>PET NAME</th>
                  <th>PET SPECIE</th>
                  <th>PET BREED</th>
                  <th>PET OWNER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index + 1}</td>
                  ))}
                </tr>
               
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
