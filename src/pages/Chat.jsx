import { useCallback, useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const endOfMessagesRef = useRef(null);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showHowCanIHelp, setShowHowCanIHelp] = useState(true);
  const [loading, setLoading] = useState(false);

  const predefinedQuestions = [
    "What are the pre-requisites for COMPSCI 223P?",
    "I have taken COMSCI 122A, can I now take COMPSCI 227?"
  ];

  const handleQuestionClick = async (selectedQuestion) => {
    setLoading(true);
    await onFrameButtonClick(selectedQuestion);
    setLoading(false);
  };

  const onFrameButtonClick = async (selectedQuestion) => {
    setShowHowCanIHelp(false);
    setShowQuestions(false);
    const questionToSend = selectedQuestion || question;
    if (!questionToSend) return; // Prevent adding empty questions

    // Append question immediately to the conversation
    setConversation(oldConversation => [
      ...oldConversation,
      { question: questionToSend, answer: "Loading..." }
    ]);

    const prompt = { question: questionToSend };
    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
        credentials : "include"
      });
      const data = await response.json();
      if (data.message !== "") {
        // Update the conversation with the received answer
        setConversation(oldConversation =>
            oldConversation.map(conv =>
                conv.question === questionToSend && conv.answer === "Loading..."
                    ? { ...conv, answer: data.message }
                    : conv
            )
        );
      }
    } catch (error) {
      console.error('Error:', error);
      // Update the conversation with an error message
      setConversation(oldConversation =>
          oldConversation.map(conv =>
              conv.question === questionToSend && conv.answer === "Loading..."
                  ? { ...conv, answer: "Failed to fetch answer." }
                  : conv
          )
      );
    } finally {
      setQuestion(""); // Clear the input after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {  // Prevent new line on Shift+Enter if you want to allow multi-line entries
      e.preventDefault();  // Prevent the default action to avoid a form submit in case it's wrapped by form element
      onFrameButtonClick().then(r => "")
    }
  };

  const handleQuestionChange = (e) => {
    setShowQuestions(false); // Optionally hide predefined questions after selection
    setShowHowCanIHelp(false);
    setQuestion(e.target.value);
  };

  // Scroll to the latest message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);


  const scroll = useRef();

  return (
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild}/>
        <a href="/">
          <img src="/Logo_White.png" alt="Home" className={styles.homeButton}/> {/* Make sure you have an icon */}
        </a>
        <div className={styles.groupParent}>
          <div className={styles.conversationArea}>
            {conversation.map((entry, index) => (
                <div key={index} className={styles.conversationBlock}>
                  <div className={`${styles.questionBlock} ${styles.question}`}>
                    <img src="/user-icon.png" alt="User" className={styles.userIcon} />
                    <div className={styles.message}>{entry.question}</div>
                  </div>
                  <div className={`${styles.answerBlock} ${styles.answer}`}>
                    <img src="/chatbot-icon.png" alt="Chatbot" className={styles.chatbotIcon} />
                    <div className={styles.message}>{entry.answer}</div>
                  </div>
                </div>
            ))}
            <div ref={endOfMessagesRef}></div>
          </div>
          <div className={styles.frameParent}>

            {showHowCanIHelp && (
            <div className={styles.howCanIHelpYouTodayParent}>
              <div className={styles.howCanI}>How can I help you today?</div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild}/>
                <img className={styles.logoIcon} alt="" src="/Logo_White.png"/>
              </div>
            </div> )}

            {showQuestions && (
                <div className={styles.questionOptions}>
                  {predefinedQuestions.map((q, index) => (
                      <div key={index} className={styles.questionItem} onClick={() => handleQuestionClick(q)}>
                        {q}
                      </div>
                  ))}
                </div>
            )}
            <input
                className={styles.groupItem}
                placeholder="Ask Unipal!"
                type="text"
                value={question}
                onChange={handleQuestionChange}
                onKeyPress={handleKeyPress}
            />
            <button
                className={styles.uploadTranscriptsWrapper}
                onClick={() => onFrameButtonClick()}
            >
              <div className={styles.uploadTranscripts}>Send</div>
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector.svg"/>
          </div>
        </div>
      </div>
  );
};

export default Chat;
