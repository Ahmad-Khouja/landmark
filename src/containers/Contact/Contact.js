import React, { useContext, useEffect, useState } from "react";
import classes from "./Contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavigationContext } from "../../helper/context";
import emailjs from "emailjs-com";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// import Lettre from '../../assets/images/letter.png';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Contact() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(() => {
    setTabIndex(6);
    emailjs.init("-A9UBWNzKJLtqP_YV");
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [howDidYouHearError, setHowDidYouHearError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [newsUpdates, setNewsUpdates] = useState(true);
  const [productionProcessEmails, setProductionProcessEmails] = useState(true);

  // Input handlers
  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
    setFirstNameError("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
  };

  const handleHowDidYouHearChange = (e) => {
    setHowDidYouHear(e.target.value);
    setHowDidYouHearError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleMarketingEmailsChange = (e) => {
    setMarketingEmails(e.target.checked);
  };

  const handleNewsUpdatesChange = (e) => {
    setNewsUpdates(e.target.checked);
  };

  const handleProductionProcessEmailsChange = (e) => {
    setProductionProcessEmails(e.target.checked);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    // First name validation
    if (firstName.trim() === "") {
      setFirstNameError("Please enter your first name");
    }

    // Last name validation
    if (lastName.trim() === "") {
      setLastNameError("Please enter your last name");
    }

    // Email validation
    if (email.trim() === "") {
      setEmailError("Please enter your email");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
    }

    // Phone number validation
    if (phoneNumber.trim() === "") {
      setPhoneNumberError("Please enter your phone number");
    }

    // How did you hear validation
    if (howDidYouHear.trim() === "") {
      setHowDidYouHearError("Please select an option");
    }

    // Message validation
    if (message.trim() === "") {
      setMessageError("Please enter your message");
    }

    // Perform form submission logic if all fields are valid
    if (
      firstName &&
      lastName &&
      validateEmail(email) &&
      phoneNumber &&
      howDidYouHear &&
      message
    ) {
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("How did you hear about us:", howDidYouHear);
      console.log("Message:", message);
      console.log("Marketing Emails:", marketingEmails);
      console.log("News & Updates:", newsUpdates);
      console.log("Production Process Emails:", productionProcessEmails);

      // Submission logic
      emailjs
        .send("service_17r2qnn", "template_hr8x14k", {
          firstName: firstName,
          lastName: lastName,
          phone: phoneNumber,
          email: email,
          hear: howDidYouHear,
          message: message,
          me: marketingEmails,
          nu: newsUpdates,
          ppe: productionProcessEmails,
        })
        .then((response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSuccessMessage("Your message was sent successfully!");
          // Reset the form after submission
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setHowDidYouHear("");
          setMessage("");
          setMarketingEmails(true);
          setNewsUpdates(true);
          setProductionProcessEmails(true);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setSuccessMessage(
            "Sorry! your message was not sent. Please try again later."
          );
        });
    }
  };

  return (
    <React.Fragment>
      <h1 className={classes.contactUs}>Contact Us</h1>
      <h2 className={classes.subtitle}>
        Any question or remarks? Just write us a message!
      </h2>

      <div className={classes.card}>
        <div className={classes.contactInfo}>
          <div className={classes.div1}>
            <div className={classes.title}>Contact Information</div>
            <div className={classes.contactInfoDetails}>
              Say something to start a live chat!
            </div>
          </div>
          <div className={classes.div2}>
            <div className={classes.contactMethod}>
              <LocalPhoneIcon style={{ color: "white" }} />
              <div className={classes.contactInfoDetails}>+02 8624 7500</div>
            </div>
            <div className={classes.contactMethod}>
              <EmailIcon style={{ color: "white" }} />
              <div className={classes.contactInfoDetails}>
                info@landmark.com.au
              </div>
            </div>
            <div className={classes.contactMethod}>
              <LocationOnIcon style={{ color: "white" }} />
              <div className={classes.contactInfoDetails}>
                Lot1, Level 2, 23-29 South Street.
                <br />
                Rydalmere NSW 2116
              </div>
            </div>
          </div>
          <div className={classes.contactInfoDetails}>
            Office Hours
            <br />
            9am - 5pm
          </div>
          <div className={classes.contactMethod}>
            <FaTwitter
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                width: "40px",
                height: "40px",
                color: "black",
              }}
            />
            <FaInstagram
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                width: "40px",
                height: "40px",
                color: "black",
              }}
            />
          </div>
        </div>
        <div className={classes.formContainer}>
          {/* FIRST ROW */}
          <div className={classes.formRow}>
            {/* FIRST Name */}
            <div className={classes.formField}>
              <label htmlFor="firstName" className={classes.staticLabel}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {firstNameError && (
                <h6 className={classes.error}>{firstNameError}</h6>
              )}
            </div>
            {/* LAST NAME */}
            <div className={classes.formField}>
              <label htmlFor="lastName" className={classes.staticLabel}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {lastNameError && (
                <h6 className={classes.error}>{lastNameError}</h6>
              )}
            </div>
          </div>
          {/* SECOND ROW */}
          <div className={classes.formRow}>
            {/* EMAIL */}
            <div className={classes.formField}>
              <label htmlFor="email" className={classes.staticLabel}>
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <h6 className={classes.error}>{emailError}</h6>}
            </div>
            {/* PHONE NUMBER */}
            <div className={classes.formField}>
              <label htmlFor="phoneNumber" className={classes.staticLabel}>
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              {phoneNumberError && (
                <h6 className={classes.error}>{phoneNumberError}</h6>
              )}
            </div>
          </div>
          {/* HOW DID YOU HEAR */}
          <div className={classes.formField}>
            <label htmlFor="phoneNumber" className={classes.staticLabel}>
              How did you hear about us?
            </label>
            <select
              id="hearAbout"
              className={classes.select}
              value={howDidYouHear}
              onChange={handleHowDidYouHearChange}
            >
              <option value="domain.com.au">domain.com.au</option>
              <option value="realestate.com.au">realestate.com.au</option>
              <option value="Signage">Signage</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="Internet Search">Internet Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Agent">Agent</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={classes.formField}>
            <label htmlFor="message" className={classes.staticLabel}>
              Message
            </label>
            <textarea
              type="text"
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
            {messageError && <h6 className={classes.error}>{messageError}</h6>}
          </div>
          <div style={{fontWeight:"bold",marginTop:"10px"}}>Opt-in</div>
          <div className={classes.formRow}>
            <div className={classes.checkboxGroup}>
              <div className={classes.optInOption}>
                <div>
                  <input
                    type="checkbox"
                    value={marketingEmails}
                    onChange={handleMarketingEmailsChange}
                  />
                </div>
                <div>Marketing Emails</div>
              </div>

              <div className={classes.optInOption}>
                <div>
                  <input
                    type="checkbox"
                    value={newsUpdates}
                    onChange={handleNewsUpdatesChange}
                  />
                </div>
                <div>News & Updates</div>
              </div>
              <div className={classes.optInOption}>
                <div>
                  <input
                    type="checkbox"
                    value={productionProcessEmails}
                    onChange={handleProductionProcessEmailsChange}
                  />
                </div>
                <div>Production Process Emails</div>
              </div>
            </div>
          </div>
          <div className={classes.submitRow}>
            <button
              type="submit"
              className={classes.submitButton}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
          {successMessage && (
            <h6 className={classes.error}>{successMessage}</h6>
          )}
        </div>
      </div>
    </React.Fragment>

    // <div>
    //   <h1 className={classes.title}>Contact Us</h1>
    //   <h2 className={classes.subtitle}>
    //     Any question or remarks? Just write us a message!
    //   </h2>
    //   <div className={classes.total}>
    //     <div className={classes.cadre}>
    //       <div className={classes.container}>
    //         <Box>
    //           <Stack direction={{ xs: "column", sm: "row" }}>
    //             <StyledBox>
    //               <div className={classes.left}>
    //                 <div className={classes.contact}>
    //                   <div className={classes.info}>
    //                     <div className={classes.titre}>Contact Information</div>
    //                     <div className={classes.soustitre}>
    //                       Say something to start a live chat!
    //                     </div>

    //                     <div className={classes.location}>
    //                       <div className={classes.row}>
    //                         <LocalPhoneIcon style={{ color: "white" }} />
    //                         <div className={classes.row1}>+02 8624 7500</div>
    //                       </div>
    //                       <br />
    //                       <div className={classes.row}>
    //                         <EmailIcon style={{ color: "white" }} />
    //                         <div className={classes.row1}>
    //                           info@landmark.com.au
    //                           <br /> Nowra Office - 02 4423 2824
    //                         </div>
    //                       </div>
    //                       <br />
    //                       <div className={classes.row}>
    //                         <LocationOnIcon style={{ color: "white" }} />
    //                         <div className={classes.row1}>
    //                           Lot1, Level 2, 23-29 South Street.
    //                           <br />
    //                           Rydalmere NSW 2116
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className={classes.hours}>Office Hours:</div>
    //                     <div className={classes.hours1}>9am - 5pm</div>

    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         gap: "10px",
    //                         flexDirection: "row",
    //                         marginTop: "100px",
    //                       }}
    //                     >
    //                       <FaTwitter
    //                         style={{
    //                           backgroundColor: "white",
    //                           borderRadius: "50%",
    //                           width: "50px",
    //                           height: "50px",
    //                         }}
    //                       />
    //                       <FaInstagram
    //                         style={{
    //                           backgroundColor: "white",
    //                           borderRadius: "50%",
    //                           width: "50px",
    //                           height: "50px",
    //                         }}
    //                       />
    //                     </div>
    //                     <div className={classes.poscircle}>
    //                       <div className={classes.circle}></div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </StyledBox>
    //             <StyledBox>
    //               <div className={classes.right}>
    //                 <div className={classes.somme}>
    //                   <div className={classes.postotal}>
    //                     <div className={classes.position}>
    //                       <div>
    //                         <InputLabel htmlFor="firstname-input">
    //                           {" "}
    //                           First Name
    //                         </InputLabel>
    //                         <Input
    //                           id="firstname-input"
    //                           style={{ width: "100%" }}
    //                           value={firstName}
    //                           onChange={handleFirstNameChange}
    //                         />
    //                         {firstNameError && (
    //                           <h6 color="red">{firstNameError}</h6>
    //                         )}
    //                       </div>
    //                       <div>
    //                         <InputLabel htmlFor="lastName-input">
    //                           Last Name
    //                         </InputLabel>
    //                         <Input
    //                           id="lastName-input"
    //                           style={{ width: "100%" }}
    //                           onChange={handleLastNameChange}
    //                           value={lastName}
    //                         />
    //                         {lastNameError && (
    //                           <h6 color="red">{lastNameError}</h6>
    //                         )}
    //                       </div>
    //                     </div>

    //                     <div className={classes.position}>
    //                       <div>
    //                         <InputLabel htmlFor="email-input">Email</InputLabel>
    //                         <Input
    //                           id="email-input"
    //                           style={{ width: "100%" }}
    //                           value={email}
    //                           onChange={handleEmailChange}
    //                         />
    //                         {emailError && <h6 color="red">{emailError}</h6>}
    //                       </div>
    //                       <div>
    //                         <InputLabel htmlFor="phone-input">
    //                           Phone Number
    //                         </InputLabel>
    //                         <Input
    //                           id="phone-input"
    //                           style={{ width: "100%" }}
    //                           value={phoneNumber}
    //                           onChange={handlePhoneNumberChange}
    //                         />
    //                         {phoneNumberError && (
    //                           <h6 color="red">{phoneNumberError}</h6>
    //                         )}
    //                       </div>
    //                     </div>
    //                     <br />
    //                     <FormControl variant="standard" sx={{ width: "100%" }}>
    //                       How did you hear about us?
    //                       <Select
    //                         labelId="demo-simple-select-standard-label"
    //                         id="demo-simple-select-standard"
    //                         value={howDidYouHear}
    //                         onChange={handleHowDidYouHearChange}
    //                         label="Example"
    //                         style={{ width: "100%" }}
    //                       >
    //                         <MenuItem value="domain.com.au">
    //                           domain.com.au
    //                         </MenuItem>
    //                         <MenuItem value="realestate.com.au">
    //                           realestate.com.au
    //                         </MenuItem>
    //                         <MenuItem value="Signage">Signage</MenuItem>
    //                         <MenuItem value="Email Marketing">
    //                           Email Marketing
    //                         </MenuItem>
    //                         <MenuItem value="Internet Search">
    //                           Internet Search
    //                         </MenuItem>
    //                         <MenuItem value="Social Media">
    //                           Social Media
    //                         </MenuItem>
    //                         <MenuItem value="Word of Mouth">
    //                           Word of Mouth
    //                         </MenuItem>
    //                         <MenuItem value="Agent">Agent</MenuItem>
    //                         <MenuItem value="Other">Other</MenuItem>
    //                       </Select>
    //                     </FormControl>
    //                     {howDidYouHearError && (
    //                       <h6 color="red">{howDidYouHearError}</h6>
    //                     )}
    //                   </div>
    //                   <div>
    //                     <InputLabel htmlFor="message-input">
    //                       {" "}
    //                       Message
    //                     </InputLabel>
    //                     <Input
    //                       id="message-input"
    //                       className={classes.message}
    //                       value={message}
    //                       onChange={handleMessageChange}
    //                     />
    //                     {messageError && <h6 color="red">{messageError}</h6>}
    //                   </div>
    //                   Opt-In
    //                   <div className={classes.poscheck}>
    //                     <div className={classes.check}>
    //                       <Checkbox
    //                         {...label}
    //                         checked={marketingEmails}
    //                         onChange={handleMarketingEmailsChange}
    //                       />{" "}
    //                       Marketing Email
    //                     </div>
    //                     <div className={classes.check}>
    //                       <Checkbox
    //                         {...label}
    //                         checked={newsUpdates}
    //                         onChange={handleNewsUpdatesChange}
    //                       />
    //                       News & Updates
    //                     </div>
    //                     <div className={classes.check}>
    //                       <Checkbox
    //                         {...label}
    //                         checked={productionProcessEmails}
    //                         onChange={handleProductionProcessEmailsChange}
    //                       />{" "}
    //                       Production Process Emails
    //                     </div>
    //                   </div>
    //                   <div className={classes.tric}>
    //                     <div className={classes.posbouton}>
    //                       <button
    //                         className={classes.bouton}
    //                         onClick={handleSubmit}
    //                       >
    //                         Send Message
    //                       </button>
    //                     </div>
    //                     <div className={classes.posimage}>
    //                       {successMessage && <h6>{successMessage}</h6>}
    //                       {/* <img src={Lettre} className={classes.image}></img> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </StyledBox>
    //           </Stack>
    //         </Box>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Contact;
