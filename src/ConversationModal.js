import React, { useState, useEffect } from 'react';
import './ConversationModal.css';

// Importing the Generative AI SDK using ES Modules
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initializing the AI model
const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Ensure you have the API key set in your environment
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to interact with the AI model
async function run(userInput) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: "You are kind of a chatbot to answer some questions users might have related to this questionnaire..." }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Okay, I'm ready to help you with this questionnaire! Just ask me any questions you have about it..." }
        ],
      },
      {
        role: "user",
        parts: [
          { text: "what is moderate risk" }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Moderate risk means you're willing to accept some risk to your initial investment and tolerate some volatility in order to seek higher returns..." }
        ],
      },
      {
        role: "user",
        parts: [
          { text: "what is a regulation D vs S" }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Regulation D is for investors within the U.S. who are considered 'accredited investors,' meaning they meet certain financial requirements..." }
        ],
      },
      {
        role: "user",
        parts: [
          { text: "yes" }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Okay, great! What else would you like to know about the questionnaire?" }
        ],
      },
      {
        role: "user",
        parts: [
          { text: "hows the weather" }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Sorry, I can only help with questions about the questionnaire. I don't have access to weather information..." }
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(userInput);
  return result.response.text(); // Ensure this method correctly extracts the text from the API response
}

const ConversationModal = ({ onClose, topCategory, saveResponse }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    return parseInt(localStorage.getItem('currentStep')) || 0;
  });
  const [responses, setResponses] = useState(() => {
    return JSON.parse(localStorage.getItem('responses')) || {};
  });
  const [userQuestion, setUserQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState(''); // State to store AI response
  const [isCompleted, setIsCompleted] = useState(false); // Track if the questionnaire is completed

  const questions = [
    { id: 1, text: 'Are you an individual or institutional investor?', options: ['Individual', 'Institutional'] },
    { id: 2, text: 'Are you a Regulation D or Regulation S investor?', options: ['Regulation D', 'Regulation S'] },
    {
      id: 3,
      text: 'If you are an Institutional Investor, what kind of institution do you represent? Select the closest answer.',
      options: [
        'Family Office/Trust',
        'Private Equity',
        'Hedge Fund',
        'Bank or Insurance Company',
        'Broker-Dealer',
        'Registered Investment Advisor',
        'Mutual Fund',
        'Sovereign Wealth Fund',
        'Pension/Retirement Plan',
        'Endowment or Non-Profit',
        'Corporation or Real Estate Investment Trust',
        'Venture Capital',
        'Other Business Partnership'
      ]
    },
    {
      id: 4,
      text: 'What property types are you most interested in?',
      options: [
        'Apartments',
        'Commercial',
        'Retail',
        'Student housing',
        'Hospitality',
        'Industrial',
        'Mixed use',
        'Condominium'
      ]
    },
    {
      id: 5,
      text: 'What property class are you interested in?',
      options: ['Class A', 'Class B', 'Class C', 'Mixed Class']
    },
    {
      id: 6,
      text: 'How much Commercial Real Estate do you currently own?',
      options: ['Under $1,000,000', '$1,000,000 - $1,500,000', '$1,500,000 - $3,000,000', '$3,000,000 and Over']
    },
    {
      id: 7,
      text: 'Please indicate which of the following most closely matches your investment risk tolerance level.',
      options: ['Conservative', 'Moderately Conservative', 'Moderate', 'Moderately Aggressive', 'Significant Risk']
    }
  ];

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [currentStep, responses]);

  const handleOptionClick = (questionId, option) => {
    setResponses((prev) => ({ ...prev, [questionId]: option }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      saveResponse({ ...responses, [questionId]: option });
      localStorage.removeItem('currentStep');
      localStorage.removeItem('responses');
      setIsCompleted(true); // Mark as completed
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      const response = await run(userQuestion);
      setAiResponse(response); // Set the AI response to state
    }
    setUserQuestion('');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button> {/* Close button at the top-right */}
        
        {!isCompleted ? (
          <>
            <h2>Let's Find Your Ideal Property</h2>
            <p>{questions[currentStep].text}</p>
            <div className="options">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(questions[currentStep].id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <form className="user-question" onSubmit={handleQuestionSubmit}>
              <label>
                Have a question about this step?
                <input
                  type="text"
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  placeholder="Ask here..."
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            {aiResponse && <p className="ai-response">{aiResponse}</p>} {/* Display AI response */}
          </>
        ) : (
          <div className="completion-message">
            <h2>Thank You!</h2>
            <p>You have completed the questionnaire. You can now close this window.</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationModal;
