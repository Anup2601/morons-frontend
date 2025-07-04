import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, CheckCircle, Play, FileText, Lightbulb, Target, Code, BookOpen, Brain, ClipboardCheck, Wrench, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';

const ModuleStep = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isVisible, setIsVisible] = useState(false);
  const [moduleData, setModuleData] = useState( { 
    "_id": {
      "$oid": "c2dea1de9a444de99d391405"
    },
    "topic": "REST APIs",
    "role": "Backend Developer",
    "lab_id": "rest-apis-4dcf0663",
    "title": "REST APIs Fundamentals",
    "introduction": "REST APIs, or Representational State Transfer Application Programming Interfaces, are a cornerstone of backend development. They enable communication between client and server systems over the HTTP protocol using stateless operations. In a RESTful system, resources such as users or products are identified by URLs, and standard HTTP methods like GET, POST, PUT, and DELETE are used to manipulate them. REST APIs emphasize scalability, performance, and simplicity, making them ideal for web services. A well-designed REST API offers clear resource naming, stateless interactions, and consistent response structures such as JSON. For backend developers, understanding REST is essential as it forms the bridge between frontend requests and database responses. RESTful principles encourage loose coupling between components, allowing microservices and modern applications to function efficiently and independently.REST APIs, or Representational State Transfer Application Programming Interfaces, are a cornerstone of backend development. They enable communication between client and server systems over the HTTP protocol using stateless operations. In a RESTful system, resources such as users or products are identified by URLs, and standard HTTP methods like GET, POST, PUT, and DELETE are used to manipulate them. REST APIs emphasize scalability, performance, and simplicity, making them ideal for web services. A well-designed REST API offers clear resource naming, stateless interactions, and consistent response structures such as JSON. For backend developers, understanding REST is essential as it forms the bridge between frontend requests and database responses. RESTful principles encourage loose coupling between components, allowing microservices and modern applications to function efficiently and independently.REST APIs, or Representational State Transfer Application Programming Interfaces, are a cornerstone of backend development. They enable communication between client and server systems over the HTTP protocol using stateless operations. In a RESTful system, resources such as users or products are identified by URLs, and standard HTTP methods like GET, POST, PUT, and DELETE are used to manipulate them. REST APIs emphasize scalability, performance, and simplicity, making them ideal for web services. A well-designed REST API offers clear resource naming, stateless interactions, and consistent response structures such as JSON. For backend developers, understanding REST is essential as it forms the bridge between frontend requests and database responses. RESTful principles encourage loose coupling between components, allowing microservices and modern applications to function efficiently and independently.REST APIs, or Representational State Transfer Application Programming Interfaces, are a cornerstone of backend development. They enable communication between client and server systems over the HTTP protocol using stateless operations. In a RESTful system, resources such as users or products are identified by URLs, and standard HTTP methods like GET, POST, PUT, and DELETE are used to manipulate them. REST APIs emphasize scalability, performance, and simplicity, making them ideal for web services. A well-designed REST API offers clear resource naming, stateless interactions, and consistent response structures such as JSON. For backend developers, understanding REST is essential as it forms the bridge between frontend requests and database responses. RESTful principles encourage loose coupling between components, allowing microservices and modern applications to function efficiently and independently.",
    "application": "REST APIs are widely used in web applications for creating, reading, updating, or deleting data. Examples include login systems, e-commerce product listings, and social media feeds, all powered by RESTful endpoints handling requests from frontend clients. REST APIs, or Representational State Transfer Application Programming Interfaces, are a cornerstone of backend development. They enable communication between client and server systems over the HTTP protocol using stateless operations. In a RESTful system, resources such as users or products are identified by URLs, and standard HTTP methods like GET, POST, PUT, and DELETE are used to manipulate them. REST APIs emphasize scalability, performance, and simplicity, making them ideal for web services. A well-designed REST API offers clear resource naming, stateless interactions, and consistent response structures such as JSON. For backend developers, understanding REST is essential as it forms the bridge between frontend requests and database responses. RESTful principles encourage loose coupling between components, allowing microservices and modern applications to function efficiently and independently.",
    "explanation": "A REST API operates using HTTP methods to perform actions on resources identified by URIs. Each operation is stateless—meaning the server does not store any session data between requests. Commonly, REST APIs return JSON-formatted data and use HTTP status codes to indicate request outcomes. For example, GET retrieves data, POST submits new data, PUT updates existing data, and DELETE removes data. A key concept is 'resource representation,' where the same resource can be returned in different formats, and 'hypermedia,' where clients can discover actions dynamically. Security in REST APIs often involves authentication (via tokens like JWT) and rate limiting. REST APIs scale well due to their stateless nature, allowing load balancers and cloud deployments to handle millions of requests efficiently.",
    "case_study": "In a food delivery app, REST APIs handle customer orders, fetch available restaurants, update delivery statuses, and connect riders to customers via endpoints like /orders, /restaurants, and /tracking.",
    "code_example": "from flask import Flask, jsonify\napp = Flask(__name__)\n@app.route('/api/products')\ndef get_products():\n    return jsonify({'products': ['pen', 'notebook']})\n\napp.run()",
    "key_takeaways": [
      "REST APIs use HTTP for client-server communication",
      "Resources are accessed via endpoints",
      "CRUD operations are mapped to HTTP methods",
      "Stateless architecture enables scalability",
      "JSON is commonly used for responses",
      "Status codes inform request outcomes"
    ],
    "thinking_challenge": "What could go wrong if a REST API doesn't implement proper error codes or status messages?",
    "assessment": [
      "Design a basic REST API for a library system",
      "Implement GET and POST endpoints using Flask or Express"
    ],
    "mini_project": "Create a REST API for a simple blogging platform with endpoints for posts, comments, and users"
  });

  const [progress, setProgress] = useState(56);
  const [currentStep, setCurrentStep] = useState(5);
  const totalSteps = 9;

  const sections = [
    { id: 'introduction', label: 'Introduction', icon: BookOpen, completed: true, color: "bg-yellow-100 border-yellow-200", iconBg: "bg-yellow-300/30" },
    { id: 'applications', label: 'Applications', icon: Target, completed: true, color: "bg-orange-100 border-orange-200", iconBg: "bg-orange-300/30" },
    { id: 'explanation', label: 'Explanation', icon: FileText, completed: true, color: "bg-blue-100 border-blue-200", iconBg: "bg-blue-300/30" },
    { id: 'case-studies', label: 'Case Studies', icon: Lightbulb, completed: true, color: "bg-pink-100 border-pink-200", iconBg: "bg-pink-300/30" },
    { id: 'code-examples', label: 'Code Examples', icon: Code, completed: true, color: "bg-green-100 border-green-200", iconBg: "bg-green-300/30" },
    { id: 'key-takeaways', label: 'Key Takeaways', icon: CheckCircle, completed: true, color: "bg-purple-100 border-purple-200", iconBg: "bg-purple-300/30" },
    { id: 'thinking-challenge', label: 'Thinking Challenge', icon: Brain, completed: false, color: "bg-indigo-100 border-indigo-200", iconBg: "bg-indigo-300/30" },
    { id: 'assessment', label: 'Assessment', icon: ClipboardCheck, completed: false, color: "bg-teal-100 border-teal-200", iconBg: "bg-teal-300/30" },
    { id: 'mini-project', label: 'Mini Project', icon: Wrench, completed: false, color: "bg-red-100 border-red-200", iconBg: "bg-red-300/30" }
  ];

  const [userInput, setUserInput] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const assessmentQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of REST APIs?",
      options: [
        "A. To store files in the cloud.",
        "B. To create scalable, stateless web services.",
        "C. To compile code.",
        "D. To run tests."
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "Which HTTP method is used to retrieve data?",
      options: [
        "A. POST",
        "B. PUT",
        "C. GET",
        "D. DELETE"
      ],
      correctAnswer: "C"
    },
    {
      id: 3,
      question: "What does REST stand for?",
      options: [
        "A. Representational State Transfer",
        "B. Remote State Transfer",
        "C. Relational State Transfer",
        "D. Responsive State Transfer"
      ],
      correctAnswer: "A"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Introduction</h3>
            <p className="text-gray-300">{moduleData.introduction || "Loading..."}</p>
          </div>
        );
      case 'applications':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Applications</h3>
            <p className="text-gray-300 leading-relaxed">{moduleData.application}</p>
          </div>
        );
      case 'explanation':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Explanation</h3>
            <p className="text-gray-300 leading-relaxed">{moduleData.explanation}</p>
          </div>
        );
      case 'case-studies':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Case Studies</h3>
            <p className="text-gray-300 leading-relaxed">{moduleData.case_study}</p>
          </div>
        );
      case 'code-examples':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Code Examples</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{moduleData.code_example}</code>
              </pre>
            </div>
          </div>
        );
      case 'key-takeaways':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              {moduleData.key_takeaways.map((takeaway, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'thinking-challenge':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Critical Thinking</h3>
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Critical Thinking</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                {moduleData.thinking_challenge || "Loading..."}
              </p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                Continue →
              </button>
            </div>
          </div>
        );
      case 'assessment':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Assessment</h3>
            {assessmentQuestions.map((question, index) => (
              <div key={question.id} className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">
                  {question.id}. {question.question}
                </h4>
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <label 
                      key={optionIndex}
                      className="flex items-center cursor-pointer hover:bg-gray-600 p-2 rounded transition-colors"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.charAt(0)}
                        checked={selectedAnswers[question.id] === option.charAt(0)}
                        onChange={() => handleAnswerSelect(question.id, option.charAt(0))}
                        className="mr-3 w-4 h-4 text-yellow-500 bg-gray-600 border-gray-500 focus:ring-yellow-500"
                      />
                      <span className="text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-center">
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300">
                Submit Assessment
              </button>
            </div>
          </div>
        );
      case 'mini-project':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Mini Project</h3>
            <div className="bg-red-900/20 border border-red-500/30 rounded-3xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Mini Project</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                {moduleData.mini_project || "Loading..."}
              </p>
              
              <div className="bg-red-800/20 border border-red-600/30 rounded-2xl p-4 mb-6">
                <div className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">💡</span>
                  <div>
                    <h5 className="text-red-400 font-semibold mb-2">Hint:</h5>
                    <p className="text-gray-300 text-sm">
                      Start with a basic API structure. Then, add features incrementally, implementing authentication, 
                      CRUD operations, and filtering capabilities. Test your endpoints using tools like Postman or curl.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Describe your project approach or paste your solution...
                </label>
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Describe your project approach or paste your solution..."
                  className="w-full h-32 bg-gray-800 border border-gray-600 rounded-2xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300">
                  Submit Project
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-900 pt-12">
    <Navbar/>
      {/* Main Content */}
      <div className="mx-auto lg:mx-64 px-12 py-12 ">
        <div className={`mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-white">
            {moduleData.title}
          </h1>
         
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-3">
            <span className="text-sm text-gray-300 font-medium tracking-wide">
              {progress}% Completed
            </span>
          </div>
          <div className="w-full bg-gray-800/60 rounded-full h-4 shadow-inner overflow-hidden">
            <div
              className="bg-yellow-300 to-yellow-500 h-4 rounded-full transition-all duration-500 ease-in-out relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-2 text-xs text-black font-semibold">
                {progress}%
              </span>
            </div>
          </div>
        </div>

      {/* card section */}
      <div className="flex flex-row flex-wrap gap-3 sm:gap-6 py-12 justify-center items-center">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <div
                  key={section.id}
                  className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      h-[50px] sm:h-[50px]
                      w-[50px] sm:${isActive ? 'w-[220px]' : 'w-[50px]'}
                      ${isActive ? 'ring-2 ring-white ring-opacity-50' : ''} 
                      ${section.color} 
                      rounded-full 
                      border-2
                      transition-all 
                      duration-300 
                      hover:border-white 
                      hover:shadow-[5px_7px_7px_rgba(255,255,255,0.3)]  
                      cursor-pointer 
                      flex items-center
                      ${isActive ? 'justify-start' : 'justify-center sm:justify-center'} 
                      p-2
                    `}
                  >
                    <div className={` w-8 h-8 sm:w-10 sm:h-10 rounded-full ${section.iconBg} text-black flex items-center justify-center`}>
                      <Icon className="w-6 h-6 sm:w-4 sm:h-4" />
                    </div>

                    {/* Label: only show on sm+ AND when active */}
                    {isActive && (
                      <div className="hidden sm:flex text-black text-base font-semibold ml-4">
                        <span>{section.label}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>



        {/* Active Section Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`
            ${sections.find(s => s.id === activeSection)?.color || 'bg-yellow-100 border-yellow-200'} 
            rounded-3xl border-2 p-6 md:p-8 transition-all duration-500
          `}>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className={`
                ${sections.find(s => s.id === activeSection)?.iconBg || 'bg-yellow-300/30'} 
                p-3 rounded-xl mr-0 md:mr-4 mb-4 md:mb-0
              `}>
                {sections.find(s => s.id === activeSection)?.icon && 
                  React.createElement(sections.find(s => s.id === activeSection).icon, { className: "w-6 h-6 text-black" })
                }
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-black mb-2">
                  {sections.find(s => s.id === activeSection)?.label}
                </h2>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Step {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
                </span>
              </div>
            </div>
            
            <div className="border-t-2 border-black/20 pt-6">
              <div className="bg-neutral-900 rounded-2xl p-6">
                {renderSectionContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ModuleStep;