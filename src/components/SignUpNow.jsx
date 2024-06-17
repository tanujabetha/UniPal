// import { useCallback } from "react";
// import styles from "./SignUpNow.module.css";

// const SignUpNow = ({ className = "" }) => {
//   const onFrameButtonClick = useCallback(() => {
//     // Please sync "Unipal Landing page" to the project
//   }, []);

//   return (
//     <div className={styles.signUpNow}>
//       <div className={styles.rectangleParent}>
//         <input className={styles.groupChild} type="text" />
//         <div className={styles.nameOfProfessorWrapper}>
//           <div className={styles.nameOfProfessor}>Name of Professor</div>
//         </div>
//       </div>
//       <div className={styles.rectangleGroup}>
//         <input className={styles.groupItem} type="text" />
//         <div className={styles.difficultyLevelWrapper}>
//           <div className={styles.difficultyLevel}>Difficulty Level</div>
//         </div>
//       </div>
//       <button className={styles.saveReviewWrapper} onClick={onFrameButtonClick}>
//         <div className={styles.saveReview}>Save Review</div>
//       </button>
//       <div className={styles.rectangleContainer}>
//         <input className={styles.groupInner} type="text" />
//         <div className={styles.courseQualityWrapper}>
//           <div className={styles.courseQuality}>Course Quality</div>
//         </div>
//       </div>
//       <div className={styles.groupDiv}>
//         <input className={styles.rectangleInput} type="text" />
//         <div className={styles.gradeReceivedWrapper}>
//           <div className={styles.gradeReceived}>Grade received</div>
//         </div>
//       </div>
//       <div className={styles.rectangleParent1}>
//         <input className={styles.groupChild1} type="text" />
//         <div className={styles.wouldYouTakeItAgainWrapper}>
//           <div className={styles.wouldYouTake}>Would you take it Again</div>
//         </div>
//       </div>
//       <div className={styles.rectangleParent2}>
//         <textarea className={styles.rectangleTextarea} />
//         <div className={styles.writeYourFeedbackWrapper}>
//           <div className={styles.writeYourFeedback}>Write your Feedback</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // SignUpNow.propTypes = {
// //   className: PropTypes.string,
// // };

// export default SignUpNow;

import { useState, useCallback } from "react";
import axios from "axios";
import styles from "./SignUpNow.module.css";

const SignUpNow = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    Name_of_professor: "",
    Difficulty_level_of_course: "",
    Quality_of_course: "",
    Grade_received_in_course: "",
    Would_take_again: "",
    Review_feedback_paragraph: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onFrameButtonClick = useCallback(async () => {
    try {
      console.log(formData);
      const response = await axios.post('http://127.0.0.1:5000/professor_reviews', formData,{
        withCredentials: true,
      });
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
      // Handle success (e.g., display a success message or redirect)
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting form. Please try again.");
      // Handle error (e.g., display an error message)
    }
  }, [formData]);

  return (
    <div className={`${styles.signUpNow} ${className}`}>
      <div className={styles.rectangleParent}>
        <input
          className={styles.groupChild}
          type="text"
          name="Name_of_professor"
          value={formData.Name_of_professor}
          onChange={handleInputChange}
        />
        <div className={styles.nameOfProfessorWrapper}>
          <div className={styles.nameOfProfessor}>Name of Professor</div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <select
          className={styles.groupItem}
          name="Difficulty_level_of_course"
          value={formData.Difficulty_level_of_course}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select Difficulty Level</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className={styles.difficultyLevelWrapper}>
          <div className={styles.difficultyLevel}>Difficulty Level</div>
        </div>
      </div>
      <button className={styles.saveReviewWrapper} onClick={onFrameButtonClick}>
        <div className={styles.saveReview}>Save Review</div>
      </button>
      <div className={styles.rectangleContainer}>
        <select
          className={styles.groupInner}
          name="Quality_of_course"
          value={formData.Quality_of_course}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select Course Quality</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className={styles.courseQualityWrapper}>
          <div className={styles.courseQuality}>Course Quality</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <select
          className={styles.rectangleInput}
          name="Grade_received_in_course"
          value={formData.Grade_received_in_course}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select Grade Received</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <div className={styles.gradeReceivedWrapper}>
          <div className={styles.gradeReceived}>Grade received</div>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <select
          className={styles.groupChild1}
          name="Would_take_again"
          value={formData.Would_take_again}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div className={styles.wouldYouTakeItAgainWrapper}>
          <div className={styles.wouldYouTake}>Would you take it Again</div>
        </div>
      </div>

      <div className={styles.rectangleParent2}>
        <input
          className={styles.rectangleTextarea}
          type="text"
          name="Review_feedback_paragraph"
          value={formData.Review_feedback_paragraph}
          onChange={handleInputChange}
        />
        <div className={styles.writeYourFeedbackWrapper}>
          <div className={styles.writeYourFeedback}>Write your Feedback</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpNow;

