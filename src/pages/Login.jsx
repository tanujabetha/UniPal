import React, {useState} from "react";
import { useCallback } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import bcrypt from "bcryptjs";
import axios from "axios";
import CryptoJS from 'crypto-js';
import styles from "./SignupPage.module.css";
import data from "bootstrap/js/src/dom/data";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onLoginText1Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onSignUpTextClick = useCallback(() => {
    navigate("/SignupPage");
  }, [navigate]);

  const closeModal = () => {
    setShowModal(false);
  }

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }
  // Example function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const hashedPassword = hashPassword(formData.password)
        //await bcrypt.hash(formData.password, 10);
    const formDataWithHashedPassword = {
      ...formData,
      password: hashedPassword
    };

    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithHashedPassword),
      credentials: 'include' // Ensure this is required and correctly set
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
          navigate('/');// Handle your JSON data here
        })
        .catch((error) => {
          console.error('Error:', error);
          setErrors({ error: error.message });
          setShowModal(true);
          //navigate('/'); // Redirect or handle error
        });
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setIsPasswordShown(!isPasswordShown);
  // };

  const togglePasswordVisibility = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  return (
      <div className="login">
        <img className="vector-icon" alt="" src="/vector.svg"/>
        <div className="welcome-to-student-portal-parent">
          <h1 className="welcome-to-student-container">
            <p className="welcome-to">
              <b>{`Welcome to `}</b>
            </p>
            <p className="student-portal">student portal</p>
          </h1>
          <div className="login-to-access">Login to access your account</div>
        </div>
        <main className="vector-parent">
          <img className="vector-icon1" alt="" src="/vector1.svg"/>
          <img className="vector-icon2" alt="" src="/vector2.svg"/>
          <img className="vector-icon3" alt="" src="/vector-2.svg"/>
          <img
              className="vector-icon4"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
          />
          <img className="vector-icon5" alt="" src="/vector-4.svg"/>
          <div className="login-parent">
            <a href="/" >
              <img src="/Logo_White.png" className={styles.homeButton} alt="Home"/> {/* Make sure you have an icon */}
            </a>
            <h1 className="login1">Login</h1>
            <div className="enter-your-account">Enter your account details</div>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="login-input"  // Ensure this class is styled appropriately in CSS
                />
              </div>
              <div className="password">
                <input
                    id="password"
                    name="password"
                    type={isPasswordShown ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="login-input"  // Ensure this class is styled appropriately in CSS
                />
                <i
                    onClick={togglePasswordVisibility}
                    className={`bi ${isPasswordShown ? 'bi-eye' : 'bi-eye-slash'} eye-icon`}  // Toggle icon classes
                    style={{cursor: 'pointer'}}
                ></i>
              </div>
              <button className="login-wrapper">
                <div className="login2" onClick={onLoginText1Click}>
                  Login
                </div>
              </button>
            </form>


            <div className="frame-item"/>
            <div className="forgot-password">Forgot Password?</div>
            <div className="dont-have-an">Don’t have an account?</div>
            <button className="sign-up-wrapper">
              <div className="sign-up" onClick={onSignUpTextClick}>
                Sign up
              </div>
            </button>
          </div>

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

          <img className="image-icon" alt="" src="/image@2x_login.png"/>
        </main>
      </div>
  );
};

export default Login;
