import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css';

function CalendarComponent() {
    const [courseCode, setCourseCode] = useState('');
    const [courses, setCourses] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [quarters, setQuarters] = useState({
        fall: [],
        winter: [],
        spring: [],
        summer: []
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch all courses and user's current plan from the API
    useEffect(() => {
        const fetchData = async () => {
            const coursesResponse = await fetch(`http://127.0.0.1:5000/courseData`, {
                credentials: "include",
            });
            const coursesData = await coursesResponse.json();
            setCourses(coursesData);

            const planResponse = await fetch(`http://127.0.0.1:5000/calendar`, {
                credentials: "include",
            });
            const planData = await planResponse.json();
            if (planData) {
                setQuarters(planData);
            }
        };
        fetchData();
    }, []);

    const handleAddCourse = async () => {
        if (courseCode) {
            const course = courses.find(course => course.id === courseCode);
            if (course) {
                const response = await fetch(`http://127.0.0.1:5000/calendar/${course.id}`);
                const data = await response.json();
                const quarter = data.latest_term;

                if (quarter === 'Winter' && !quarters.Winter.includes(courseCode)) {
                    setQuarters(prevQuarters => ({
                        ...prevQuarters,
                        Winter: [...prevQuarters.Winter, courseCode]
                    }));
                }
                if (quarter === 'Summer' && !quarters.Summer.includes(courseCode)) {
                    setQuarters(prevQuarters => ({
                        ...prevQuarters,
                        Summer: [...prevQuarters.Summer, courseCode]
                    }));
                }
                if (quarter === 'Fall' && !quarters.Fall.includes(courseCode)) {
                    setQuarters(prevQuarters => ({
                        ...prevQuarters,
                        Fall: [...prevQuarters.Fall, courseCode]
                    }));
                }
                if (quarter === 'Spring' && !quarters.Spring.includes(courseCode)) {
                    setQuarters(prevQuarters => ({
                        ...prevQuarters,
                        Spring: [...prevQuarters.Spring, courseCode]
                    }));
                }
                setCourseCode('');
            }
        }
    };

    const handleRemoveCourse = (quarter, courseCode) => {
        setQuarters(prev => ({
            ...prev,
            [quarter]: prev[quarter].filter(course => course !== courseCode)
        }));
    };

    const handleCourseChange = (e) => {
        setCourseCode(e.target.value);
    };

    const handleSave = async () => {
        setLoading(true);
        setSuccessMessage('');
        const response = await fetch('http://127.0.0.1:5000/calendar/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quarters),
            credentials: "include"
        });
        const data = await response.json();
        setLoading(false);
        setSuccessMessage(data.message);
        setShowSuccessModal(true);
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className={loading ? styles.blurBackground : ''}>
            <a href="/">
                <img src="/Logo_White.png" alt="Home" className={styles.homeButton}/> {/* Make sure you have an icon */}
            </a>
            <h1 className={styles.heading}>Visualize your academic plan</h1>
            <div className={styles.calendarContainer}>
                <div className={styles.inputGroup}>
                    <select
                        value={courseCode}
                        onChange={handleCourseChange}
                        className={styles.courseInput}
                    >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course.id}>{course.id}</option>
                        ))}
                    </select>

                    <button onClick={handleAddCourse} className={styles.addButton}>Add Course</button>
                    <button onClick={handleSave} className={styles.saveButton}>Save Plan</button>
                </div>
                {showSuccessModal && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <span className={styles.close} onClick={closeSuccessModal}>&times;</span>
                            <p className={styles.successModalContent}>{successMessage}</p>
                        </div>
                    </div>
                )}

                {Object.keys(quarters).map(quarter => (
                    <div key={quarter} className={styles.quarterSection}>
                        <div className={styles.quarterHeader}>{quarter.charAt(0).toUpperCase() + quarter.slice(1)}</div>
                        <ul className={styles.courseList}>
                            {quarters[quarter].map((course, index) => (
                                <li key={index} className={styles.courseItem}>
                                    {course}
                                    <button className={styles.removeButton}
                                            onClick={() => handleRemoveCourse(quarter, course)}>Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {loading && (
                    <div className={styles.loadingContainer}>
                        <div className={styles.loader}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CalendarComponent;
