import { Box, Modal, TextField, Button } from "@mui/material";

const ReferralModal = ({ open, handleClose }) => {
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
        <form className="space-y-4">
          <TextField fullWidth label="Your Name" variant="outlined" />
          <TextField fullWidth label="Friend's Email" variant="outlined" />
          <TextField fullWidth label="Friend's Name" variant="outlined" />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
