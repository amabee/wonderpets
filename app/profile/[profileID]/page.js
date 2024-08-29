"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { swal } from "@/globals/swal";
import { ENDPOINT } from "@/globals/endpoints";

const Profile = ({ params }) => {
  const [thisUser, setThisUser] = useState({});
  const [petCount, setPetCount] = useState(0);
  const [image, setImage] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get(ENDPOINT, {
        params: {
          operation: "getUserProfile",
          json: JSON.stringify({ name: params.profileID }),
        },
      });

      if (res.status === 200) {
        if (res.data.success) {
          setThisUser(res.data.success.user);
          setPetCount(res.data.success.pet_count);
          console.log(res.data);
        } else {
          swal("Fetching User Error", JSON.stringify(res.data), "error");
        }
      } else {
        swal("Status Error", res.statusText, "error");
      }
    } catch (error) {
      swal("Exception Error", error.message, "error");
    }
  };

  console.log("This User: ", thisUser);

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div class="card">
      <div class="cover-photo">
        <img
          src="https://robohash.org/anime"
          style={{ objectFit: "cover" }}
          class="profile"
        />
      </div>
      <div>
        <h3 className="profile-name">{thisUser.Name}</h3>
      </div>
      <br /> <br />
      <button class="btn">Number of Pets: {petCount}</button>
    </div>
  );
};

export default Profile;
