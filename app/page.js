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
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function Home() {
  const [showInputUserModal, setShowInputUserModal] = useState(false);
  const [showPetInputModal, setShowPetInputModal] = useState(false);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [pets, setPets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petSpecie, setPetSpecie] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);

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
  const handleShowPetInputModal = () => setShowPetInputModal(true);
  const handleClosePetInputModal = () => setShowPetInputModal(false);

  const handlePetBreedCreation = async (e) => {
    e.preventDefault();
    handleClosePetInputModal();
    const speciesOptions = species.reduce((options, specie) => {
      options[specie.SpeciesID] = specie.SpeciesName;
      return options;
    }, {});

    const { value: formValues } = await Swal.fire({
      title: "CREATE NEW PET BREED",
      html:
        '<select id="swal-select" class="swal2-select">' +
        '<option value="" disabled selected>Select a species</option>' +
        Object.entries(speciesOptions)
          .map(([id, name]) => `<option value="${id}">${name}</option>`)
          .join("") +
        "</select>" +
        '<input id="swal-input" class="swal2-input" placeholder="Enter breed name">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          selectedSpecies: document.getElementById("swal-select").value,
          breedName: document.getElementById("swal-input").value,
        };
      },
      showCancelButton: true,
      didOpen: () => {
        console.log("SweetAlert opened");
      },
    });

    if (formValues) {
      if (formValues.selectedSpecies && formValues.breedName) {
        const selectedSpeciesId = formValues.selectedSpecies;
        const selectedSpeciesName = speciesOptions[selectedSpeciesId];

        console.log(`Selected Species ID: ${selectedSpeciesId}`);
        console.log(`Selected Species Name: ${selectedSpeciesName}`);
        console.log(`Entered Breed Name: ${formValues.breedName}`);
        addBreed(formValues.breedName, selectedSpeciesId);
      } else {
        swal(
          "Error",
          "Please select a species and enter a breed name",
          "error"
        );
      }
    }
  };

  const handleSpeciesCreation = async (e) => {
    e.preventDefault();
    handleClosePetInputModal();

    const { value: specieName } = await Swal.fire({
      title: "Enter Specie Name",
      input: "text",
      inputLabel: "Specie Name",
    });
    if (specieName) {
      swal(`Entered specieName: ${specieName}`);
      addSpecies(specieName);
    }
  };

  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    const parsedUser = JSON.parse(getUser);
    if (getUser === null) {
      handleShowInputUserModal();
    } else {
      setUser(parsedUser);
      getPets();
      getSpecies();
      getBreeds();
    }
  }, []);

  const getUser = async (name) => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getUser",
          json: JSON.stringify({ name }),
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          handleCloseInputUserModal();
          swal("Welcome Back!", "User " + name, "success");
          sessionStorage.setItem("user", JSON.stringify(res.data.success));
        } else {
          swal("User Error", JSON.stringify(res.data.error), "error", () => {
            handleShowInputUserModal();
          });
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error.message, "error");
    }
  };

  const addUser = async(userName) =>{
    
  }

  const getPets = async (type, typeName) => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getPets",
          json: type ? JSON.stringify({ type: typeName }) : "",
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          setPets(res.data.success);
        } else {
          swal("Fetching Pets Error", JSON.stringify(res.data), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error.message, "error");
    }
  };

  const getSpecies = async () => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getSpecies",
          json: "",
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          setSpecies(res.data.success);
        } else {
          swal("Fetching Species Error", JSON.stringify(res.data), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error.message, "error");
    }
  };

  const getBreeds = async () => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getBreeds",
          json: "",
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          setBreeds(res.data.success);
        } else {
          swal("Fetching Breeds Error", JSON.stringify(res.data), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error.message, "error");
    }
  };

  const addPets = async () => {
    const formData = new FormData();
    formData.append("operation", "createPet");
    formData.append(
      "json",
      JSON.stringify({
        name: petName,
        speciesID: petSpecie,
        breedID: petBreed,
        dob: dateOfBirth,
        oid: user.OwnerID,
      })
    );

    try {
      const res = await axios({
        url: ENDPOINT,
        method: "POST",
        data: formData,
      });

      if (res.status === 200) {
        if (res.data.success) {
          swal("Success", "Pet Created!", "success");
        } else {
          swal("Status Error", JSON.stringify(res.data.error), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error, "error");
    }
  };

  const addBreed = async (petBreed, petSpecie) => {
    const formData = new FormData();
    formData.append("operation", "createBreed");
    formData.append(
      "json",
      JSON.stringify({
        breedName: petBreed,
        speciesID: petSpecie,
      })
    );

    try {
      const res = await axios({
        url: ENDPOINT,
        method: "POST",
        data: formData,
      });

      if (res.status === 200) {
        if (res.data.success) {
          swal("Success", "Breed Created!", "success");
        } else {
          swal("Data Error", JSON.stringify(res.data.error), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error, "error");
    }
  };

  const addSpecies = async (specieName) => {
    const formData = new FormData();
    formData.append("operation", "createSpecies");
    formData.append(
      "json",
      JSON.stringify({
        speciesName: specieName,
      })
    );

    try {
      const res = await axios({
        url: ENDPOINT,
        method: "POST",
        data: formData,
      });

      if (res.status === 200) {
        if (res.data.success) {
          swal("Success", "Specie Created!", "success");
        } else {
          swal("Data Error", JSON.stringify(res.data.error), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error, "error");
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
          {user.Name
            ? `Welcome back, ${user.Name}!`
            : "Welcome to Wonder Pets!"}
        </h1>
      </div>
      <div className="mainContent p-4">
        <div className="mb-3 ms-auto">
          <div className="row">
            <div className="col-auto">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort By:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Species</Dropdown.Item>
                  <Dropdown.Item>Breed</Dropdown.Item>
                  <Dropdown.Item>Owner</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                onClick={handleShowPetInputModal}
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
                {pets.map((pet, index) => (
                  <tr key={index}>
                    <td>{pet.PetID}</td>
                    <td>{pet.Name}</td>
                    <td>{pet.SpeciesName}</td>
                    <td>{pet.BreedName}</td>
                    <td>
                      <a href="#">{pet.OwnerName}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
      <Modal
        show={showPetInputModal}
        onHide={handleClosePetInputModal}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* PET NAME INPUT */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Pet Name</InputGroup.Text>
            <Form.Control
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              aria-label="Pet Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          {/* BREED PICKER */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">BREED NAME</InputGroup.Text>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SELECT BREED:
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {breeds.map((breed, index) => (
                  <Dropdown.Item
                    key={index}
                    value={breed.BreedID}
                    onClick={() => setPetBreed(breed.BreedID)}
                  >
                    {breed.BreedName}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item onClick={(e) => handlePetBreedCreation(e)}>
                  ----ADD NEW BREED----
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>

          {/* SPECIES PICKER */}
          <InputGroup>
            <InputGroup.Text id="basic-addon2">SPECIE NAME</InputGroup.Text>
            <Dropdown className="mt-2">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SELECT SPECIES:
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {species.map((specie, index) => (
                  <Dropdown.Item
                    key={index}
                    value={specie.SpeciesID}
                    onClick={() => setPetSpecie(specie.SpeciesID)}
                  >
                    {specie.SpeciesName}
                  </Dropdown.Item>
                ))}

                <Dropdown.Item onClick={(e) => handleSpeciesCreation(e)}>
                  ----ADD NEW SPECIES----
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>

          {/* DATE PICKER */}
          <InputGroup className="mt-3">
            <InputGroup.Text id="basic-addon2">Date Of Birth</InputGroup.Text>
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              placeholderText="Select date of birth"
              dateFormat="MMMM d, yyyy"
              className="form-control"
              style={{ zIndex: 9999, position: "relative" }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePetInputModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addPets()}>
            Add Pet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
