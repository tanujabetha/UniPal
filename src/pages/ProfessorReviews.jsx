import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './ProfessorReviews.module.css';

const ProfessorReviews = () => {
  const [professors, setProfessors] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [professorDetails, setProfessorDetails] = useState(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/professorNames');
        setProfessors(response.data.professorNames);
      } catch (error) {
        console.error('Error fetching professors:', error);
      }
    };

    fetchProfessors();
  }, []);

  useEffect(() => {
    if (selectedProfessor) {
      const fetchProfessorDetails = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/professor_reviews/${selectedProfessor}`, {
            withCredentials: true,
          });
          setProfessorDetails(response.data.message);
        } catch (error) {
          console.error('Error fetching professor details:', error);
        }
      };

      fetchProfessorDetails();
    }
  }, [selectedProfessor]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const chunkReviews = (reviews, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < reviews.length; i += chunkSize) {
      chunks.push(reviews.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div className={styles.professorReviews}>
      <header className={styles.header}>
        <h1><strong>Professor Reviews</strong></h1>
      </header>
      <a href="/" >
        <img src="/Logo_White.png" className={styles.homeButton} alt="Home" />
      </a>
      <div className={styles.dropdownContainer}>
        <select
          className={styles.dropdown}
          value={selectedProfessor}
          onChange={(e) => setSelectedProfessor(e.target.value)}
        >
          <option value="">Select a Professor</option>
          {professors.map((prof, index) => (
            <option key={index} value={prof}>{prof}</option>
          ))}
        </select>
      </div>
      {professorDetails && (
        <div className={styles.professorDetails}>
          <div className={styles.professorInfo}>
            <div className={styles.infoCard}>
              {/* <h2><strong>{professorDetails.name_of_professor}</strong></h2> */}
              <div className={styles.professorCard}>
                <img src="/profimg.jpg" alt="Professor" className={styles.professorImage} />
                <div className={styles.professorName}><strong>{professorDetails.name_of_professor}</strong></div>
              </div>
              <div className={styles.cardContainer}>
                <div className={styles.ratingCard}>
                  <div className={styles.cardTitle}>QUALITY</div>
                  <div className={styles.cardValue}>{professorDetails.average_quality}</div>
                </div>
                <div className={styles.ratingCard}>
                  <div className={styles.cardTitle}>DIFFICULTY</div>
                  <div className={styles.cardValue}>{professorDetails.average_difficulty}</div>
                </div>
              </div>
              <div className={styles.cardContainer}>
              <div className={styles.ratingCard}>
                  <div className={styles.cardTitle}>GRADE RECEIVED</div>
                  <div className={styles.cardValue}>{professorDetails.average_grade}</div>
                </div>
                <div className={styles.ratingCard}>
                  <div className={styles.cardTitle}>WOULD TAKE AGAIN</div>
                  <div className={styles.cardValue}>{professorDetails.would_take_again ? 'Yes' : 'No'}</div>
                </div>
              </div>
                
              {/* <p className={styles.rating}><strong>Overall Quality:</strong> {professorDetails.average_quality} / 5</p>
              <p className={styles.rating}><strong>Level of Difficulty:</strong> {professorDetails.average_difficulty} / 5</p>
              <p className={styles.rating}><strong>Average Grade Received:</strong> {professorDetails.average_grade} / 5</p>
              <p className={styles.rating}><strong>Would Take Again:</strong> {professorDetails.would_take_again ? 'Yes' : 'No'}</p> */}
            </div>
          </div>
          <div className={styles.reviewsContainer}>
            <h3 className={styles.reviewsHeader}>Reviews</h3>
            <Slider {...sliderSettings}>
              {chunkReviews(professorDetails.reviews, 4).map((reviewChunk, index) => (
                <div key={index} className={styles.reviewSlide}>
                  {reviewChunk.map((review, reviewIndex) => (
                    <div key={reviewIndex} className={styles.reviewCard}>
                      <p className={styles.reviewText}>{review.Review_feedback_paragraph}</p>
                      <p className={styles.reviewDetail}><strong>Reviewer:</strong> {review.Name_of_reviewer}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessorReviews;
