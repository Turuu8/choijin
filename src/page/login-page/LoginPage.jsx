import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../../firebase/Firebase";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isSigup, setIsSigup] = useState(false);

  const countryCode = "+976 ";

  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [emailLink, setEmailLink] = useState("");
  const [expandFrom, setExpandFrom] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authentication
    );
  };
  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 13) {
      console.log("Y");
      setExpandFrom(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          alert("Дугаарлуу код илгээлэй.");
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Буруу байна та +976 8....... гэж бичнэ.");
    }
  };
  const verifyOTP = (e) => {
    setOTP(OTP);

    if (OTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(OTP)
        .then((result) => {
          alert("Та амжилттай нэвтрлээ.");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const actionCodeSettings = {
    url: "https://choijin-temple.web.app",
    handleCodeInApp: true,
  };

  const EmailSendLink = () => {
    sendSignInLinkToEmail(authentication, emailLink, actionCodeSettings)
      .then(() => {
        console.log("amjiltai");
        window.localStorage.setItem("emailForSignIn", emailLink);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // background: 'linear-gradient(45deg, black  ,transparent , black),linear-gradient(-45deg,  black  ,transparent , black)',
        backgroundColor: "primary.second",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        padding={10}
        flexDirection="column"
        sx={{
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          boxShadow: "5px 5px 10px grey",
          ":hover": {
            boxShadow: "10px 10px 20px grey",
          },
        }}
      >
        <Typography variant="h4" textAlign="center">
          {!isSigup ? "Утасны дугаараар нэвтрэх" : "Email хаягаар нэвтрэх"}
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={requestOTP}
        >
          {/* phone send msg */}
          {!isSigup && (
            <TextField
              margin="normal"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
            />
          )}
          {/* email send link */}
          {isSigup && (
            <TextField
              label="Email Address"
              value={emailLink}
              onChange={(e) => setEmailLink(e.target.value)}
              margin="normal"
            />
          )}

          {/* phone verify code check  */}
          {expandFrom && (
            <Box>
              <TextField
                type="password"
                value={OTP}
                margin="normal"
                onChange={(e) => setOTP(e.target.value)}
              />
            </Box>
          )}

          {/* send button */}
          {!isSigup === false ? (
            ""
          ) : !expandFrom ? (
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "20px", boxShadow: "none" }}
            >
              Дугаар луу код илгээх
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ marginTop: "20px" }}
              onClick={verifyOTP}
            >
              Нэвтрэх
            </Button>
          )}
        </form>
        {isSigup ? (
          <Button
            //   type="submit"
            variant="contained"
            onClick={() => EmailSendLink()}
            sx={{ marginTop: "20px" , boxShadow: "none" }}
          >
            Email хаягруу link илгээх
          </Button>
        ) : (
          ""
        )}
        <Button
          sx={{ marginTop: "20px", color: "primary.second" }}
          onClick={() => setIsSigup(!isSigup)}
        >
          {!isSigup ? "Email хаягаар" : "Дугаараар"} нэвтрэх
        </Button>
        <Button href="/">Буцах</Button>
        <Box component="div" id="recaptcha-container"></Box>
      </Box>
    </Box>
  );
};
