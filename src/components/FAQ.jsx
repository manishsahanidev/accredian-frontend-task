import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = {
  eligibility: [
    {
      question: "Who is eligible to participate?",
      answer:
        "Any registered user of our platform can participate in the referral program.",
    },
    {
      question: "Are there any age restrictions?",
      answer:
        "Participants must be at least 18 years old to be eligible for rewards.",
    },
  ],
  howToUse: [
    {
      question: "How do I refer a friend?",
      answer:
        "You can refer a friend by clicking the 'Refer Now' button and filling out the referral form.",
    },
    {
      question: "How can I track my referrals?",
      answer:
        "You can track your referrals in the 'My Referrals' section after logging in.",
    },
  ],
  termsAndConditions: [
    {
      question: "What are the terms and conditions of the referral program?",
      answer:
        "Please refer to our terms and conditions page for detailed information.",
    },
  ],
};

const FAQ = () => {
  const [selectedSection, setSelectedSection] = useState("eligibility"); // Default selected section

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ paddingTop: "10px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Question
        </Typography>
      </Container>

      <Container
        maxWidth="md"
        sx={{
          mt: 8,
          bgcolor: "whitesmoke",
          borderRadius: "14px",
          paddingY: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box sx={{ width: "25%", pr: 2 }}>
            <Stack
              spacing={2} // Space between buttons
              sx={{
                width: "100%",
                border: "1px solid #E0E0E0", // Outer border for the button container
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Container shadow
                backgroundColor: "#FFFFFF",
              }}
            >
              <Button
                onClick={() => handleSectionChange("eligibility")}
                sx={{
                  borderRadius: "8px",
                  border: `2px solid ${
                    selectedSection === "eligibility" ? "#1976d2" : "#E0E0E0"
                  }`,
                  backgroundColor:
                    selectedSection === "eligibility" ? "#E3F2FD" : "#FFFFFF",
                  color:
                    selectedSection === "eligibility" ? "#1976d2" : "#000000",
                  textAlign: "left",
                  boxShadow:
                    selectedSection === "eligibility"
                      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                      : "none",
                  "&:hover": {
                    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                  py: 2, // Vertical padding
                  px: 1, // Horizontal padding
                }}
                variant={
                  selectedSection === "eligibility" ? "contained" : "outlined"
                }
              >
                Eligibility
              </Button>
              <Button
                onClick={() => handleSectionChange("howToUse")}
                sx={{
                  borderRadius: "8px",
                  border: `2px solid ${
                    selectedSection === "howToUse" ? "#1976d2" : "#E0E0E0"
                  }`,
                  backgroundColor:
                    selectedSection === "howToUse" ? "#E3F2FD" : "#FFFFFF",
                  color: selectedSection === "howToUse" ? "#1976d2" : "#000000",
                  textAlign: "left",
                  boxShadow:
                    selectedSection === "howToUse"
                      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                      : "none",
                  "&:hover": {
                    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                  py: 2, // Vertical padding
                  px: 1, // Horizontal padding
                }}
                variant={
                  selectedSection === "howToUse" ? "contained" : "outlined"
                }
              >
                How to Use
              </Button>
              <Button
                onClick={() => handleSectionChange("termsAndConditions")}
                sx={{
                  borderRadius: "8px",
                  border: `2px solid ${
                    selectedSection === "termsAndConditions"
                      ? "#1976d2"
                      : "#E0E0E0"
                  }`,
                  backgroundColor:
                    selectedSection === "termsAndConditions"
                      ? "#E3F2FD "
                      : "#FFFFFF",
                  color:
                    selectedSection === "termsAndConditions"
                      ? "#1976d2"
                      : "#000000",
                  textAlign: "left",
                  boxShadow:
                    selectedSection === "termsAndConditions"
                      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                      : "none",
                  "&:hover": {
                    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                  py: 2, // Vertical padding
                  px: 1, // Horizontal padding
                }}
                variant={
                  selectedSection === "termsAndConditions"
                    ? "contained"
                    : "outlined"
                }
              >
                Terms and Conditions
              </Button>
            </Stack>
          </Box>
          {/* Right Side: FAQ Content */}
          <Box sx={{ width: "75%" }}>
            {faqData[selectedSection].map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  bgcolor: "#F9FAFB",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FAQ;
