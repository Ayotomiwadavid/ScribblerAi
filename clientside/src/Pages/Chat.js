import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Appbar";
import Appfooter from "../Components/Appfooter";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import "../index.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import displayPics from "../Assets/Images/1.jpg";
import aiDisplayPics from "../Assets/Images/ChatBotImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "../Components/Buttonicon";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { v4 as uuidv4 } from "uuid";
import UserContext from "../Components/Controller";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";
import CustomHook from "../CustomHook";

const Chat = () => {
  let navigate = useNavigate();

  const { currentUserDetails } = useContext(UserContext);

  console.log(currentUserDetails);

  // // Ensure currentUserDetails is not null or undefined before destructuring
  // const {
  //   password,
  //   userPhoneNumber,
  //   email,
  //   userCountry,
  //   userLanguage,
  //   name,
  //   conversations
  // } = currentUserDetails;

  // // Ensure name is properly retrieved and processed
  // let realName = name?.stringValue || ""; // Ensure realName is defined

  // // Fix the logic to extract the username substring
  // const userName = realName.substring(
  //   0,
  //   realName.indexOf(" ") !== -1 ? realName.indexOf(" ") : realName.length
  // );

  // useEffect(() => {
  //   if (!Array.isArray(conversations)) {
  //     console.error('Conversations is not an array:', conversations);
  //   }
  // }, [currentUserDetails]);

//   const loginStatus = localStorage.getItem("loginStatus");

//   console.log(currentUserDetails);
//   console.log(conversations);

//   useEffect(() => {
//     if (loginStatus === "false" || loginStatus === null) {
//       navigate("/userAuth/login");
//     }
//   }, [loginStatus, navigate]);

//   let [currentPlan, setCurrentPlan] = useState({});
//   let [chatPageVisibility, setChatPageVisibility] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   let userPlan = localStorage.getItem("plan");

//   //response message State
//   const [message, setMessage] = useState(null);
//   //Prompt Input Value
//   const [inputValue, setInputValue] = useState(null);
//   //State to get previous Chat
//   const [previousChats, setPreviousChats] = useState([]);
//   //set current Title of conversation
//   const [currentTitle, setCurrentTitle] = useState(null);
//   //handling conversation history for ai to remember chats
//   const [conversationHistory, setConversationHistory] = useState([]);
//   //giving each conversation a unique id to handle them
//   const [conversationId, setConversationId] = useState('');

//   const alreadyMadePrompt = [
//     {
//       id: 1,
//       title: "Plan a trip",
//       description: "I have 4 days holiday from my job so plan paris trip for me.",
//     },
//     {
//       id: 2,
//       title: "Write Code for me",
//       description: "Can you write tik tak to game fom me with react js.",
//     },
//     {
//       id: 3,
//       title: "Article title",
//       description: "Write me title for a react blog post.",
//     },
//   ];

//   const newConversation = () => {
//     setMessage(null);
//     setInputValue(null);
//     setCurrentTitle(null);
//     setChatPageVisibility(false);
//     setConversationId(uuidv4());
//     setConversationHistory([]);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const addAlreadyMadeInputValue = (selectedItemId) => {
//     let findIndex = alreadyMadePrompt.find(item => item.id === selectedItemId);
//     let { title, description } = findIndex;
//     setInputValue(`${title}. ${description}`);
//   };

//   const handlePromptInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handlePromptSubmit = async (e) => {
//     e.preventDefault();

//     const userIdObject = localStorage.getItem('user'); // Get uid from localStorage

//     if (!userIdObject) {
//         console.error("User ID not found in localStorage");
//         return;
//     }

//     const user = JSON.parse(userIdObject);
//     const { uid } = user;

//     // Use let to allow reassignment
//     let currentConversationId = conversationId;

//     // Generate a new conversation ID if not present
//     if (!currentConversationId) {
//         currentConversationId = `${uid}-${Date.now()}`;
//         setConversationId(currentConversationId); // Update state with the new conversation ID
//     }

//     const options = {
//         method: "POST",
//         body: JSON.stringify({
//             uid,
//             message: inputValue,
//             conversationId: currentConversationId,
//             conversationHistory
//         }),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };

//     try {
//         const response = await fetch("http://localhost:5000/prompt/", options);
//         const data = await response.json();
//         setMessage(data.message);
//         setConversationHistory(data.conversationHistory);
//         console.log(data.conversationHistory);
//         setChatPageVisibility(true);

//         if (!currentTitle && inputValue) {
//             setCurrentTitle(inputValue);
//         }

//         setPreviousChats(prevChats => [
//             ...prevChats,
//             { conversationId: data.conversationId, title: currentTitle || inputValue, role: 'user', content: inputValue },
//             { conversationId: data.conversationId, title: currentTitle || inputValue, role: 'assistant', content: data.message.content }
//         ]);

//     } catch (error) {
//         console.error(error);
//         toast.error("Failed to communicate with the server.");
//     }
// };

//   useEffect(() => {
//     if (!currentTitle && inputValue && message) {
//       setCurrentTitle(inputValue);
//     }
//     if (currentTitle && inputValue && message) {
//       setPreviousChats(prevChats => [
//         ...prevChats,
//         { conversationId: conversationId, title: currentTitle, role: 'user', content: inputValue },
//         { conversationId: conversationId, title: currentTitle, role: 'assistant', content: message.content }
//       ]);
//     }
//   }, [message]);

//   const handleChatClick = (uniqueTitle) => {
//     setCurrentTitle(uniqueTitle);
//     setMessage(null);
//     setInputValue(null);
//     setChatPageVisibility(true);
//     const selectedChatHistory = previousChats.filter(chat => chat.title === uniqueTitle);
//     setConversationId(selectedChatHistory[0].conversationId);
//     setConversationHistory(selectedChatHistory.map(chat => ({ role: chat.role, content: chat.content })));
//   };

//   const uniqueTitles = Array.from(new Set(previousChats.map(chat => chat.title)));


//   //This is the plan object to render the user selected plan
//   let planObject = [
//     {
//       planName: "free Trial",
//       planPrice: "0.00 3days",
//     },
//     {
//       planName: "Premium Package",
//       planPrice: "$19.00",
//     },
//     {
//       planName: "Corporate Package",
//       planPrice: "$100.00",
//     },
//   ];

//   useEffect(() => {
//     const addCurrentPlan = () => {
//       let myPlan = planObject.find((plan) => plan.planName === userPlan);
//       if (myPlan) {
//         setCurrentPlan(myPlan);
//       } else {
//         // Handle case where userPlan doesn't match any planName in planObject
//         setCurrentPlan({ planName: "Default Plan", planPrice: "$0.00" }); // Example of a default plan
//       }
//     };
//     addCurrentPlan();
//     console.log(inputValue)
//   }, [userPlan, inputValue]);

  return (
      // {Object.keys(currentUserDetails).length === 0 ? (
      //   <div className="w-full h-lvh flex bg-[#F1F5F9] items-center justify-center">
      //     <Spinner size="xl" color="info" aria-label="Default status example" />
      //   </div>
      // ) : (
        <div className="w-full flex flex-col items-center justify-center">
        {currentUserDetails ? "Hello world" : 'loading..'}          {/* <Header />
          <section className="w-full relative h-[90vh] md:h-[87vh] bg-[#F1F5F9] gap-3 flex items-center justify-center px-2 py-4 md:px-[3vw]">
            <section
              onClick={toggleSidebar}
              className="fixed z-40 top-24 right-6 bg-[#E2E8F0] sm:flex p-2 shadow-sm md:hidden rounded-md cursor-pointer items-center justify-end"
            >
              <MenuOutlinedIcon
                style={{ color: "#8390A3", fontSize: "25px" }}
              />
            </section>
            <aside
              className={`fixed h-full inset-y-0 left-0 z-50 w-[350px] bg-white shadow-lg transition-transform px-2 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:relative md:translate-x-0 md:flex md:flex-col md:items-center md:gap-2 md:px-2 md:py-2 md:justify-between rounded-md`}
            >
              <div className="w-full items-center py-3 justify-center">
                <p
                  onClick={newConversation}
                  className="capitalize gap-2 text-sm text-[#2563EB] cursor-pointer flex items-center w-full justify-start"
                >
                  <AddCircleIcon
                    style={{ fontSize: "16px", color: "#2563EB" }}
                  />
                  new conversation
                </p>
              </div>
              <ul className="list-none scrollbar-hide group-hover:scrollbar-show overflow-y-auto flex gap-2 flex-col items-center w-full justify-start h-full">
              {
                uniqueTitles?.map((uniqueTitle, index) =><li key={index} onClick={() => handleChatClick(uniqueTitle)} className="flex cursor-pointer flex-shrink-0 w-full gap-2 rounded-md py-4 px-5 overflow-hidden items-center text-[#475569] justify-center bg-[#DBEAFE]">
                  <QuestionAnswerIcon
                    style={{ color: "#475569", fontSize: "18px" }}
                  />
                  <p className="text-[#475569] text-left text-[13px] capitalize whitespace-nowrap text-ellipsis w-full overflow-x-clip">
                    {uniqueTitle}
                  </p>
                </li>)
              }
              </ul>
              <div className="py-2 sm:px-2 sm:py-2 w-full">
                <Link
                  to="/packages"
                  className="flex justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-200 hover:dark:border-blue-950 transition-all"
                >
                  <div>
                    <span className="text-[11px] font-medium capitalize text-blue-500 bg-gradient-to-r from-blue-100 dark:from-blue-950 to-pink-100 dark:to-pink-950 px-2 py-1 rounded">
                      current plan
                    </span>
                    <h3 className="mt-2 font-bold text-sm text-slate-600 dark:text-slate-100">
                      {currentPlan.planName}
                    </h3>
                  </div>
                  <div className="text-end">
                    <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
                      {currentPlan.planPrice}
                    </div>
                  </div>
                </Link>
              </div>
            </aside>
            <div className="flex-grow min-w-0 h-full flex flex-col items-center justify-center">
              {!chatPageVisibility ? (
                <section className="w-full h-full flex flex-col items-center justify-between p-3">
                  <div className="md:pt-4 pt-2 pb-7 flex flex-col w-full items-center justify-start">
                    <h2 className="font-bold text-left w-full text-3xl pb-2 bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
                      Hi, {name}
                    </h2>
                    <h4 className="font-bold text-2xl w-full text-left text-slate-600 dark:text-slate-100">
                      What can I do for you?
                    </h4>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="h-full flex items-start justify-center flex-col">
                      <h5 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-100">
                        Let's try
                      </h5>
                      <div className="grid grid-flow-dense sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {alreadyMadePrompt.map((item, index) => {
                          let { title, id, description } = item;
                          return (
                            <div
                              key={index}
                              id={id}
                              onClick={() => addAlreadyMadeInputValue(id)}
                              className="px-4 py-3 cursor-pointer rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                            >
                              <h6 className="font-bold text-base mb-1 text-slate-600 dark:text-slate-100">
                                {title}
                              </h6>
                              <p className="text-sm line-clamp-1 text-slate-500 dark:text-slate-300">
                                {description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <ul className="w-full chatUl h-full md:h-full bg-white flex flex-col overflow-auto rounded-md gap-2 items-start justify-start p-3">
                  {conversationHistory.map((chatItems, index) => (
                  <li
                    key={index}
                    className="w-full chatUl flex flex-col justify-start items-center p-3"
                  >
                    <div className="w-full flex gap-4 justify-start items-center flex-shrink-0">
                      {chatItems.role === "assistant" ? (
                        <img
                          src={aiDisplayPics}
                          alt="ai img"
                          className="w-[40px] h-[40px] rounded-full mb-2"
                        />
                      ) : (
                        <img
                          src={displayPics}
                          alt="ai img"
                          className="w-[40px] h-[40px] rounded-full mb-2"
                        />
                      )}
                      <h1 className="font-bold text-md capitalize text-[#475569]">
                        {chatItems.role === "assistant" ? "Scribbler.Ai" : "You"}
                      </h1>
                    </div>
                    <div className="w-full items-start ml-3 mt-2 justify-center gap-1 flex flex-col">
                        <div className="text-[#475569] w-full flex flex-col items-start justify-center font-normal text-lg leading-relaxed">
                          <MarkdownRenderer 
                          content={chatItems.content}
                          className='chatUl' />
                        </div>
                    </div>
                  </li>
                ))}
                </ul>
              )}
              <div className="pt-3 w-full">
                <form className="flex items-start w-full gap-4 mt-6 md:mt-3">
                  <textarea
                    title="prompt"
                    name="promptInput"
                    value={inputValue}
                    onChange={handlePromptInputChange}
                    className="py-2.5 px-4 z-10 w-full max-w-full max-h-[80px] h-[45px] rounded-md text-sm/[1.125rem] bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 placeholder:dark:text-slate-500 border border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:text-slate-400 focus:border-blue-200 focus:shadow-none focus:outline-none"
                  />
                  <ButtonIcon
                    className="bg-blue-600 text-white hover:bg-blue-800"
                    onClick={handlePromptSubmit}
                  >
                    <PaperAirplaneIcon className="h-4" />
                  </ButtonIcon>
                </form>
              </div> */}
            {/* </div>
          </section>
          <Appfooter /> */}
        </div>
      // )}
  );
};

export default Chat;