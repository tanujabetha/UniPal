import { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./ProfilePage.module.css";
import {useNavigate} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";

//import httpClient from "../httpClient";

const ProfilePage = () => {
    const navigate = useNavigate();


  const onFrameButtonClick = useCallback(() => {
    // Please sync "Unipal Landing page" to the project
  }, []);

    // useEffect(() => {
    //     console.log("enter profile before call")
    //     fetch('http://127.0.0.1:5000/currentUser', {
    //         method: 'GET',
    //         credentials: 'include'
    //     })
    //         .then(response => {
    //             console.log("enter profile then response")
    //             if (!response.ok) {
    //                 console.log("exit profile then response with error")
    //                 throw new Error('Failed to fetch current user');
    //             }
    //             console.log("exit profile then response")
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log("enter profile then data");
    //             console.log('Current user:', data);
    //             console.log("exit profile then data");
    //         })
    //         .catch(error => {
    //             console.log("enter profile error");
    //             console.error('Error fetching current user:', error);
    //             console.log("exit profile error");
    //         });
    //     console.log("exit profile after call")
    // });



  const [formData, setFormData] = useState({
    studentId: "",
    department_name: "",
    course_level: "",
    courseId: [],
    title: [],
  });

  const [departmentlist, setdepartmentlist] = useState([
    { department: "", id: "" },
  ]);
  const [courselevellist, setcourselevellist] = useState([
    { courselevel: "", id: "" },
  ]);
  const [courselist, setcourselist] = useState([{ course: "", id: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:5000/courseData`);
      const newData = await response.json();
      setdepartmentlist(newData);
      setcourselevellist(newData);
      setcourselist(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   function handleInputChangelist(event) {
  //     const { options } = event.target;
  //     const value = [];
  //     for (let i = 0, len = options.length; i < len; i++) {
  //         if (options[i].selected) {
  //             value.push(options[i].value);
  //         }
  //     }
  //     // Assuming you're using a function to update state, like `setFormData`:
  //     setFormData(prevFormData => ({
  //         ...prevFormData,
  //         titles: value  // Updating the titles array in your form state
  //     }));
  // }
  // function handleInputChangelist(event) {
  //   const { options } = event.target;
  //   const selectedCourses = [];

  //   // Iterate through all options to find selected ones
  //   for (let i = 0, len = options.length; i < len; i++) {
  //       if (options[i].selected) {
  //           // Push both the id (value) and the title (textContent) into the array
  //           selectedCourses.push({
  //               id: options[i].value, // assuming the option's value is set to the course's id
  //               title: options[i].textContent // the visible text content of the option
  //           });
  //       }
  //   }

  //   // Update the form data with the new array of selected courses
  //   setFormData(prevFormData => ({
  //       ...prevFormData,
  //       selectedCourses: selectedCourses // Store the array of selected course objects
  //   }));
  // }

  function handleInputChangelist(event) {
    const { options } = event.target;
    const courseId = [];
    const title = [];

    // Iterate through all options to find selected ones
    for (let i = 0, len = options.length; i < len; i++) {
      if (options[i].selected) {
        // Push the id into the courseIds array
        courseId.push(options[i].value); // assuming the option's value is set to the course's id

        // Push the title into the titles array
        title.push(options[i].textContent); // the visible text content of the option
      }
    }

    // Update the form data with the new arrays of course IDs and titles
    setFormData((prevFormData) => ({
      ...prevFormData,
      courseId: courseId, // Store the array of selected course IDs
      title: title, // Store the array of titles
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    console.log("Submitting form data:", formData); // Debugging output

    try {
        // Replace 'your-backend-endpoint' with the actual endpoint where you want to submit the form data
        const response = await fetch('http://127.0.0.1:5000/profile', {
            method: 'POST', // Use POST method for sending data
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            },
            body: JSON.stringify(formData), // Convert the formData object into a JSON string
            credentials: 'include'
        });

      if (!response.ok) {
        
        // Check if the response status is not OK (e.g., not 200 range)
        throw new Error(
          "Failed to submit form data. Status: " + response.status
        );
      }

      const responseData = await response.json(); // Assuming the server responds with JSON
      console.log("Response from server:", responseData); // Log the response data from the server

        // Optionally, handle further actions after successful form submission,
        // like showing a success message or resetting form fields
        alert('Form submitted successfully!');
        navigate('/Chat');
    } catch (error) {
      console.error("Error during form submission:", error);
      // Optionally, handle errors, such as showing error messages to the user
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.profilePage}>
        <button
          type="submit"
          className={styles.saveProfileWrapper}
          // onClick={onFrameButtonClick}
        >
          <div className={styles.saveProfile}>Save profile</div>
        </button>

        <div className={styles.rectangleParent}>
          <input
            className={styles.rectangleParentchild}
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleInputChange}
          />
        </div>

        <select
          className={styles.profilePageChild}
          value={formData.department_name}
          onChange={handleInputChange}
          name="department_name"
        >
          <option value="" className={styles.saveProfile}>
            Department Name
          </option>
          {departmentlist
            .reduce((unique, department) => {
              if (
                !unique.some(
                  (obj) => obj.department_name === department.department_name
                )
              ) {
                unique.push(department);
              }
              return unique;
            }, [])
            .map((department) => (
              <option
                value={department.department_name}
                key={department.id}
                className={styles.saveProfile}
              >
                {department.department_name}
              </option>
            ))}
        </select>

        <select
          className={styles.profilePageItem}
          value={formData.course_level}
          onChange={handleInputChange}
          name="course_level"
        >
          <option value="">Course Level</option>
          {courselevellist
            .reduce((unique, courselevel) => {
              if (
                !unique.some(
                  (obj) => obj.course_level === courselevel.course_level
                )
              ) {
                unique.push(courselevel);
              }
              return unique;
            }, [])
            .map((courselevel) => (
              <option value={courselevel.course_level} key={courselevel.id}>
                {courselevel.course_level}
              </option>
            ))}
        </select>

        <select
          className={styles.profilePageInner}
          value={formData.courseId}
          onChange={handleInputChangelist}
          multiple
        >
          <option value="">Course</option>
          {courselist
            .reduce((unique, course) => {
              if (!unique.some((obj) => obj.title === course.title)) {
                unique.push(course);
              }
              return unique;
            }, [])
            .map((course) => (
              <option value={course.id} key={course.id}>
                {course.title}
              </option>
            ))}
        </select>

        {/* <DropdownButton
        className={styles.profilePageItem}
        title="Courses"
      >{` `}</DropdownButton>
      <DropdownButton
        className={styles.profilePageInner}
        title="Course Level"
      >{` `}</DropdownButton> */}
        <b className={styles.profile}>{`Profile `}</b>
        {/* <img className={styles.image133Icon} alt="" src="/image-133@2x.png" /> */}
        <img className={styles.image133Icon} alt="" src="/Illustration.png" />
        <a href="/" >
          <img src="/Logo_White.png" className={styles.homeButton} alt="Home"/> {/* Make sure you have an icon */}
        </a>
      </div>
    </form>
  );
};


export default ProfilePage;
