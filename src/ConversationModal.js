import React, { useState, useEffect } from 'react';
import './ConversationModal.css';

// Importing the Generative AI SDK using ES Modules
import { GoogleGenerativeAI} from '@google/generative-ai';

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
    history:[
      {
        role: "user",
        parts: [
          { text: "You are kind of a chatbot to answer some questions users might have related to this questionnaire\n\nQuestionnaire\n\nAre you an individual or institutional investor? Single answer\n● Individual\n● Institutional\nAre you a Regulation D or Regulation S investor? Single answer\n● Regulation D (U.S. Accredited Investor)\nIn the U.S., the term Accredited Investor is used by the Securities and Exchange\nCommission (SEC) under Regulation D to refer to investors who are financially\nsophisticated and have a reduced need for the protection provided by regulatory\ndisclosure filings. Regulation D investors must meet certain income or net worth or\nknowledge tests to be able to invest in Reg D offering\n● Regulation S (Investors outside the U.S.)\nRegulation S provides an SEC compliant way for US companies to raise capital from\ninvestors who are outside the U.S.\nIf you are an Institutional Investor, what kind of institution do you represent? Select the\nclosest answer. Single answer\n● Family Office/Trust\n● Private Equity\n● Hedge Fund\n● Bank or Insurance Company\n● Broker-Dealer\n● Registered Investment Advisor\n● Mutual Fund\n● Sovereign Wealth Fund\n● Pension/Retirement Plan\n● Endowment or Non-Profit\n● Corporation or Real Estate Investment Trust\n● Venture Capital\n● Other Business Partnership\nWhat property types are you most interested in? Multiple answer\n● Apartments\n● Commercial\n● Retail\n● Student housing\n● Hospitality\n● Industrial\n\n● Mixed use\n● Condominium\nWhat property class are you interested in? Multiple answer\n● Class A\n● Class B\n● Class C\n● Mixed Class\nHow much Commercial Real Estate do you currently own? Single answer\n● Under $1,000,000\n● $1,000,000 - $1,500,000\n● $1,500,000 - $3,000,000\n● $3,000,000 and Over\nPlease indicate which of the following most closely matches your investment risk\ntolerance level. Single answer\n● Conservative: I want to preserve my initial investment, with minimum risk, even if that\nmeans the investments do not generate significant income or returns and may not keep\npace with inflation.\n● Moderately Conservative: I am willing to accept a low risk to my initial investment,\nincluding low volatility, to seek a modest level of return on my investment.\n● Moderate: I am willing to accept some risk to my initial investment and tolerate some\nvolatility to seek higher returns and understand I could lose a portion of the money\ninvested.\n● Moderately Aggressive: I am willing to accept high risk to my initial investment,\nincluding high volatility, to seek high returns over time, and understand I could lose a\nsubstantial amount of the money invested.\n● Significant Risk: I am willing to accept maximum risk to my initial investment to\naggressively seek maximum returns, and understand I could lose most, or all, of the\nmoney invested.\n\n\nnow answer any questions a user asks about this questionnaire. If anything else say you are an assistant to help with the questionnaire and can't help with other stuff. Also, don't give super long answers, and remember to answer in a natural conversation way and not make it feel like you are reading off a document. Also know that you are a chatbot that is a textbox below a step-by-step questionnaire, so after any answers clarify if they need more answers and also mention to finish the questionnaire to better help understand their needs. And don't ask them to answer the questionnaire to you; they should select the above options provided. Also, keep the answers as simple as possible, and don't answer anything else only from the questionnaire, and your data is the only source of information for your answers." }
        ],
      },
      {
        role: "model",
        parts: [
          { text: "Okay, I'm ready to help you with this questionnaire! Just ask me any questions you have about it. After I answer, remember to select your answers from the options provided so I can understand you better! \n\nAnd don't worry, I can only help with this specific questionnaire. Let me know if you have any questions! 😄 \n" }
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
          { text: "Moderate risk means you're willing to accept some risk to your initial investment and tolerate some volatility in order to seek higher returns. You understand that you could lose a portion of the money invested. \n\nDo you have any other questions about the questionnaire?  Remember to select your answers from the options provided so I can understand you better! \n" }
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
          { text: "Regulation D is for investors within the U.S. who are considered 'accredited investors,' meaning they meet certain financial requirements. \n\nRegulation S is for investors outside the U.S. \n\nDo you have any more questions? Remember to select your answers from the options so I can understand your needs better! \n" }
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
          { text: "Okay, great!  What else would you like to know about the questionnaire? Remember to select your answers from the options provided so I can understand you better! \n" }
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
          { text: "Sorry, I can only help with questions about the questionnaire. I don't have access to weather information. \n\nDo you have any other questions about the questionnaire? Remember to select your answers from the options provided so I can understand you better! \n" }
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

  const questions = [
    { id: 1, text: `Are you looking for properties in the ${topCategory} category?`, options: ['Yes', 'No'] },
    { id: 2, text: 'What is your budget range?', options: ['<$500K', '$500K-$1M', '>$1M'] },
    { id: 3, text: 'How soon are you looking to invest?', options: ['Immediately', 'Within 6 months', 'Within a year'] },
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
      onClose();
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
      </div>
    </div>
  );
};

export default ConversationModal;
