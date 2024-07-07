import React, { useState } from "react";
import { Box, Modal, TextField, Button } from "@mui/material";
import axios from "axios";

const ReferralModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    friendName: "",
    friendEmail: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.referrerName = formData.referrerName
      ? ""
      : "This field is required.";
    tempErrors.referrerEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.referrerEmail
    )
      ? ""
      : "Email is not valid.";
    tempErrors.friendName = formData.friendName
      ? ""
      : "This field is required.";
    tempErrors.friendEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.friendEmail
    )
      ? ""
      : "Email is not valid.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://accredian-backend-task-lku6.onrender.com",
          formData
        );
        console.log(response.data);
        handleClose();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h2
          id="modal-title"
          className="text-center text-2xl text-gray-600 font-bold mb-4"
        >
          Refer a Friend
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            {...(errors.referrerName && {
              error: true,
              helperText: errors.referrerName,
            })}
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            name="referrerEmail"
            type="email"
            value={formData.referrerEmail}
            onChange={handleChange}
            {...(errors.referrerEmail && {
              error: true,
              helperText: errors.referrerEmail,
            })}
          />
          <TextField
            fullWidth
            label="Friend's Name"
            variant="outlined"
            name="friendName"
            value={formData.friendName}
            onChange={handleChange}
            {...(errors.friendName && {
              error: true,
              helperText: errors.friendName,
            })}
          />
          <TextField
            fullWidth
            label="Friend's Email"
            variant="outlined"
            name="friendEmail"
            type="email"
            value={formData.friendEmail}
            onChange={handleChange}
            {...(errors.friendEmail && {
              error: true,
              helperText: errors.friendEmail,
            })}
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Send Refer
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
