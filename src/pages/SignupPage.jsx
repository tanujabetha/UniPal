import React, {useState, useCallback} from 'react';
import styles from './SignupPage.module.css';
import {useNavigate} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import bcrypt from 'bcryptjs'
import CryptoJS from 'crypto-js';
import data from "bootstrap/js/src/dom/data";




const SignupPage = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  // State for form errors
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Handling input changes
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form validation logic
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = 'First name should not be blank';
    } else if (!formData.firstname.match(/^[A-Za-z]+$/)) {
      newErrors.firstname = 'First name must only contain letters.';
    }

    if (!formData.lastname) {
      newErrors.lastname = 'Last name should not be blank';
    }
    else if (!formData.lastname.match(/^[A-Za-z]+$/)) {
      newErrors.lastname = 'Last name must only contain letters.';
    }

    if (!formData.email) {
      newErrors.email = 'Email should not be blank';
    }
    else if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      newErrors.email = 'Email must be a valid email address (must contain @ and a domain)';
    }

    if (!formData.password) {
      newErrors.password = 'Password should not be blank';
    }
    else if (!formData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
      newErrors.password = 'Password must include at least 8 characters with numbers and special characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowModal(Object.keys(newErrors).length > 0); // Show modal if there are any errors
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const closeModal = () => {
    setShowModal(false);
  }

  function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/login');  // Redirect to the login page after the modal is closed
  };

  //Handling form submission
  // const handleSubmit = useCallback((event) => {
  //   event.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     // Assuming a signup API endpoint "/api/signup"
  //     console.log('Form Data:', formData); // Log or send data to your backend
  //     navigate('/Login'); // Redirect to login page after successful signup
  //   }
  // }, [formData, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validation = validateForm();
    if (validation === false) {
      //setErrors(validationErrors);
    } else {
      const hashedPassword = hashPassword(formData.password);
      const formDataWithHashedPassword = {
        ...formData,
        password: hashedPassword
      };

      // Using fetch to send the POST request
          fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(formDataWithHashedPassword),
            credentials: 'include'
          })
              .then(response => {
                if (!response.ok) {
                  throw new Error(data.message || 'Failed to register');
                }
                return response.json()
              })
              .then(data => {
                if(data[1] !== 200)
                  throw new Error(data[0].error);
                setSuccessMessage(data.message || 'Registration successful!');
                setShowSuccessModal(true);
                // setTimeout(() => {
                //   setShowSuccessModal(false); // Optionally close modal after some time
                //   navigate('/login'); // Redirect to login or other appropriate page
                // }, 3000);
                // console.log('Success:', data);
                // navigate('/login');// Handle your JSON data here
              })
              .catch((error) => {
                console.error('Error:', error);
                setErrors({ error: error.message });
                setShowModal(true);
                //navigate('/'); // Redirect or handle error
              });
    }
  }

  // Navigation to the login page
  const onLoginClick = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  return (
      <div className={styles.signupPage}>

        <img className={styles.frameIcon} alt="" src="/frame.svg"/>
        <div className={styles.frame}>
          <div className={styles.logoParent}>
            <a href="/" >
              <img src="/Logo_White.png" className={styles.homeButton} alt="Home"/> {/* Make sure you have an icon */}
            </a>
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <b className={styles.stayOnTopContainer}>
                  <span className={styles.st}>Stay on top with Unipal!</span>
                </b>
                <div className={styles.frameChild}/>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.createAccountParent}>
            <b className={styles.createAccount}>Create Account</b>
            <div className={styles.frameParent}>
              <div className={styles.frame3}>
                <div className={styles.groupParent}>

                  <div className={styles.rectangleParent}>
                    <input
                        className={styles.groupChild}
                        type="text" name="firstname" placeholder="First Name"
                        value={formData.firstname} onChange={handleInputChange}/>
                    <div className={styles.firstNameWrapper}>
                      <div className={styles.firstname}>First Name</div>
                    </div>
                  </div>

                  <div className={styles.rectangleParent}>
                    <input
                        className={styles.groupChild}
                        type="text" name="lastname" placeholder="Last Name"
                        value={formData.lastname} onChange={handleInputChange}/>
                    <div className={styles.lastNameWrapper}>
                      <div className={styles.firstname}>Last Name</div>
                    </div>
                  </div>

                </div>

                <div className={styles.rectangleContainer}>
                  <input className={styles.groupInner} type="text" name="email" placeholder="Email"
                         value={formData.email} onChange={handleInputChange}/>
                  <div className={styles.lastNameWrapper}>
                    <div className={styles.firstname}>Email</div>
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <input className={styles.groupInner} type="password" name="password" placeholder="Password"
                         value={formData.password} onChange={handleInputChange}/>
                  <div className={styles.lastNameWrapper}>
                    <div className={styles.firstname}>Password</div>
                  </div>
                </div>
                <button type="submit" className={styles.createAccountWrapper}>
                  <div className={styles.createAccount1}>Create Account</div>
                </button>
              </div>
              <div className={styles.frame4}>
                <div className={styles.frame5}>
                  <div className={styles.alreadyHaveAnAccountParent}>
                    <div className={styles.alreadyHaveAnContainer}>
                      <span className={styles.st}>Already have an account?</span>
                    </div>
                    <button className={styles.login} onClick={onLoginClick}>
                      Login
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>

        {showModal && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                {Object.entries(errors).map(([field, error], index) => (
                    <p key={index} className={styles.errorMessage}>{`${field}: ${error}`}</p>
                ))}
              </div>
            </div>
        )}

        {showSuccessModal && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeSuccessModal}>&times;</span>
                <p className={styles.successModalContent}>{successMessage}</p>
              </div>
            </div>
        )}


        <img className={styles.frameIcon1} alt="" src="/frame1.svg"/>
      </div>
  );
};

export default SignupPage;

