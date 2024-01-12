import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Stack, circularProgressClasses, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../assets';
import { Animate } from '../components/common/Animate';
import { login } from '../service/ApiUtils';
import { ValidateField } from '../components/common/ValidateField';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loginRequest, setLoginRequest] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    const validationRules = {
      usernameOrEmail: {
        required: 'This field is required',
        minLength: { value: 3, message: 'Username or email must be at least 6 characters long' },
      },
      password: {
        required: 'This field is required',
        minLength: { value: 8, message: 'Password must be at least 8 characters long' },
      },
    };

    const rules = validationRules[fieldName];

    if (isFormSubmitted) {
      if (rules.required && !value.trim()) {
        errorMessage = rules.required;
      } else if (rules.minLength && value.length < rules.minLength.value) {
        errorMessage = rules.minLength.message;
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
  };

  useEffect(() => {
    Object.keys(loginRequest).forEach((fieldName) => {
      validateField(fieldName, loginRequest[fieldName]);
    });
  }, [isFormSubmitted, loginRequest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const onSignin = async (e) => {
    e.preventDefault();
    setOnRequest(true);
    setIsFormSubmitted(true);
  
    try {
      Object.keys(loginRequest).forEach((fieldName) => {
        validateField(fieldName, loginRequest[fieldName]);
      });
  
      if (Object.values(errors).some((error) => Boolean(error))) {
        throw new Error('Validation failed');
      }
  
      await login(loginRequest);
  
      const interval = setInterval(() => {
        setLoginProgress((prev) => prev + 100 / 37);
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
      },2000);

      setTimeout(() => {
        setIsLoggedIn(true);
      },2100);

      setTimeout(() => {
          navigate('/dashboard');
      }, 3300); // Adjust the total duration of the progress
  
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setOnRequest(false);
      }, 2100); // Adjust the delay before hiding the progress
    }
  };
  

  return (
    <Box position="relative" height="100vh" sx={{ "::-webkit-scrollbar": { display: "none" } }}>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "60%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          height: "100%",
          width: isLoggedIn ? "100%" : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: "common.white",
        }}
      >
        <Box sx={{ textAlign: "center", p: 5 }}>
          <Animate type="fade" delay={0.5}>
            <img src={images.logo} alt="logo" height={60} />
          </Animate>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: isLoggedIn ? 0 : 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box component="form" maxWidth={400} width='100%' onSubmit={onSignin}>
            <Stack spacing={3}>
              <ValidateField
                label="Username Or Email"
                value={loginRequest.usernameOrEmail}
                onChange={handleInputChange}
                error={errors.usernameOrEmail}
                name="usernameOrEmail"
                disabled={onRequest}
              />

              <ValidateField
                label="Password"
                type="password"
                value={loginRequest.password}
                onChange={handleInputChange}
                error={errors.password}
                name="password"
                disabled={onRequest}
              />
              <Button type="submit" size='large' variant='contained' color='success' >
                Login
              </Button>
              <Stack direction={"row"}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Remember me"></FormControlLabel>
                </FormGroup>
                <Typography color="error" fontWeight='bold'>
                  <Link to="#">Forgot password</Link>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
            <Typography display='inline'
              fontWeight='bold'
              sx={{ "& > a": { color: "red[900]", ml: "5px" } }}>
              Don't have an account -
              <Link to='#'>
                Register now
              </Link>
            </Typography>
          </Box>

          <Box
              sx={{
                display: onRequest ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: "common.white",
                zIndex: 1000,
              }}
            >
           <Box position="relative">
              <CircularProgress
                variant="determinate"
                sx={{ color: "grey.200" }}
                size={100}
                value={100}
              />

              {loginProgress !== 100 ? (
                <CircularProgress
                  variant="determinate"
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                      color:  "#3498db",  // Corrected from 'stroke' to 'color'
                    },
                    position: "absolute",
                    left: 0,
                  }}
                  size={100}
                  value={loginProgress}
                />
              ) : null}
            </Box>


            </Box>
        </Box>
      </Box>
    </Box>
  );
};
