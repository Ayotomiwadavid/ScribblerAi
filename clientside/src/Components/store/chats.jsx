import { bots } from ".";
const data = [
    {
        id: "cid01",
        bot: bots[0],
        last: "12 min",
        replys:[
            {
                from: "human",
                text: "Hi, chatbot. What's your name?"
            },
            {
                from: "bot",
                text: "Hello! I'm Gbot, a friendly AI chatbot. How can I assist you today?"
            },
            {
                from: "human",
                text: "What's the weather like in New York City today?"
            },
            {
                from: "bot",
                text: "I'm sorry, I don't have access to real-time data. You can check a weather website or app for the latest updates."
            },
            {
                from: "human",
                text: "Can you help me with a math problem? What's 345 multiplied by 67?"
            },
            {
                from: "bot",
                text: "Sure! 345 multiplied by 67 is 23,115."
            },
            {
                from: "human",
                text: "I need a recipe for spaghetti carbonara. Can you help?"
            },
            {
                from: "bot",
                text: "Of course! Here's a simple spaghetti carbonara recipe: [recipe link]"
            },
            {
                from: "human",
                text: "I'm in the mood for a comedy movie. Any recommendations?"
            },
            {
                from: "bot",
                text: "How about watching 'The Grand Budapest Hotel'? It's a hilarious comedy with a unique visual style."
            },
            {
                from: "human",
                text: "I have a headache. What should I do to relieve it?"
            },
            {
                from: "bot",
                text: "I'm not a doctor, but you can try drinking water, resting in a quiet room, or taking a pain reliever like ibuprofen. If it persists, consider consulting a healthcare professional."
            },
            {
                from: "human",
                text: "Can you explain Einstein's theory of relativity in simple terms?"
            },
            {
                from: "bot",
                text: "Certainly! Einstein's theory of relativity explains how gravity works by describing the bending of spacetime around massive objects, like stars and planets. It's a bit more complex, but that's the basic idea."
            },
        ]
    },
    {
        id: "cid02",
        bot: bots[1],
        last: "2 hours",
        replys:[
            {
                from: "human",
                text: "Hi John, I need help with my job search. I've been in marketing but want a change."
            },
            {
                from: "bot",
                text: "Sure, let's discuss your goals. Any specific industries or roles you're interested in?"
            },
            {
                from: "human",
                text: "Maybe project management or digital marketing"
            },
            {
                from: "bot",
                text: "Great. What skills can you bring to those roles?"
            },
            {
                from: "human",
                text: "Good communication and marketing software experience."
            },
            {
                from: "bot",
                text: "Let's update your resume, work on your LinkedIn, and start networking. Sound good?"
            },
            {
                from: "human",
                text: "Yes, I've heard networking is important."
            },
            {
                from: "bot",
                text: "I'll guide you through it. We're in this together."
            },
        ]
    },
    {
        id: "cid03",
        bot: bots[6],
        last: "1 weeks",
        replys:[
            {
                from: "human",
                text: "Hello, Sync. My partner and I argue a lot and need help with communication."
            },
            {
                from: "bot",
                text: " I'm here to assist. What's the main communication issue?"
            },
            {
                from: "human",
                text: "I get defensive and raise my voice during arguments."
            },
            {
                from: "bot",
                text: "Recognizing the issue is a good start. Try staying calm and actively listening."
            },
            {
                from: "human",
                text: "We both want to improve. What should we do?"
            },
            {
                from: "bot",
                text: "Start with active listening, use 'I' statements, take breaks, consider professional help."
            },
            {
                from: "human",
                text: "How can we rebuild trust after hurtful arguments?"
            },
            {
                from: "bot",
                text: "Apologize sincerely, practice forgiveness, be consistent, communicate openly, consider therapy if needed."
            },
            {
                from: "human",
                text: "Thanks for the advice. We'll work on it together."
            },
            {
                from: "bot",
                text: "You're welcome. Wishing you a healthier and happier relationship."
            },
        ]
    },
    {
        id: "cid04",
        bot: bots[8],
        last: "1 weeks",
        replys:[
            {
                from: "human",
                text: "Hello, Storyteller AI. Can you tell me a bit about the elements of a good story?"
            },
            {
                from: "bot",
                text: "Hello! Certainly, there are several key elements that make up a good story. First and foremost, you need a compelling and relatable protagonist. This character should face challenges and undergo some form of growth or transformation throughout the narrative."
            },
            {
                from: "human",
                text: "That makes sense. What about the plot? How can I create an engaging one?"
            },
            {
                from: "bot",
                text: "A well-structured plot is crucial. It should have a clear beginning, where the setting and characters are introduced, a middle where conflicts and obstacles arise, and an end that resolves those conflicts and provides a satisfying conclusion. Adding twists and turns along the way can keep your audience engaged."
            },
            {
                from: "human",
                text: "What about the setting of the story? How important is it?"
            },
            {
                from: "bot",
                text: "The setting is vital because it helps immerse your audience in the world you're creating. It sets the tone and can even become a character in itself. A richly described setting can enhance the overall atmosphere of your story and make it more memorable."
            },
        ]
    },
    {
        id: "cid05",
        bot: bots[5],
        last: "1 weeks",
        replys:[
            {
                from: "human",
                text: "How often should I work out?"
            },
            {
                from: "bot",
                text: "Three to five times a week is ideal."
            },
            {
                from: "human",
                text: "What's the best time to exercise?"
            },
            {
                from: "bot",
                text: "Morning or evening, whichever suits your schedule."
            },
            {
                from: "human",
                text: "Cardio or strength training first?"
            },
            {
                from: "bot",
                text: "It depends on your goals, but mix both for balance."
            },
            {
                from: "human",
                text: "How long should a workout session be?"
            },
            {
                from: "bot",
                text: "30-60 minutes is effective for most people."
            },
        ]
    },
    {
        id: "cid06",
        bot: bots[3],
        last: "1 weeks",
        replys:[
            {
                from: "human",
                text: "How can I eat healthier?"
            },
            {
                from: "bot",
                text: "Try incorporating more fruits and veggies into your meals."
            },
            {
                from: "human",
                text: "What's a simple way to reduce stress?"
            },
            {
                from: "bot",
                text: "Practice deep breathing exercises regularly."
            },
            {
                from: "human",
                text: "Can you recommend a quick workout routine?"
            },
            {
                from: "bot",
                text: "Consider a 20-minute daily workout at home."
            },
            {
                from: "human",
                text: "What's the importance of staying hydrated?"
            },
            {
                from: "bot",
                text: "Hydration is crucial for overall health and energy."
            },
        ]
    },
]

export default data;