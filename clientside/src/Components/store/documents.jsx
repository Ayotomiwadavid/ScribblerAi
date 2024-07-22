const data = [
    {
        id: "01",
        name: "10 React Best practices",
        template: "Article Generator",
        size: "702",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>React is a popular JavaScript library used for building user interfaces, and following best practices can help you write cleaner, more maintainable, and performant code. Here are 10 React best practices to keep in mind:</p>
        <ol>
        <li><p><strong>Component Structure and Organization</strong>: Organize your components in a modular way, keeping them small and focused on specific tasks. Group related components into folders and use clear naming conventions.</p></li>
        <li><p><strong>Use Functional Components</strong>: With the introduction of React hooks, functional components have become the preferred way to write components. They are more concise, easier to test, and promote the use of hooks.</p></li>
        <li><p><strong>State Management</strong>: Use state management libraries like Redux or Mobx for handling complex state logic, shared state between components, and better predictability.</p></li>
        <li><p><strong>Avoid Directly Manipulating the DOM</strong>: In React, avoid directly manipulating the DOM using native DOM APIs like <code>getElementById</code> or <code>innerHTML</code>. Instead, let React handle the rendering and use React's state and props to manage changes.</p></li>
        <li><p><strong>Keys in Lists</strong>: When rendering lists in React, always provide a unique <code>key</code> prop to each item. This helps React efficiently update the UI when the list changes.</p></li>
        <li><p><strong>Immutability</strong>: Avoid directly modifying state and props as it can lead to unintended side effects. Use immutable data structures or helper libraries (e.g., <code>Immutable.js</code>) to handle updates more predictably.</p></li>
        <li><p><strong>Performance Optimization</strong>: Use tools like React's <code>memo</code> or <code>PureComponent</code> to prevent unnecessary re-renders, and leverage React's built-in <code>shouldComponentUpdate</code> or <code>React.memo</code> for functional components.</p></li>
        <li><p><strong>Destructuring Props</strong>: Destructure props in functional components to make your code cleaner and easier to read, as well as to avoid unnecessary repetition.</p></li>
        <li><p><strong>PropTypes or TypeScript</strong>: Type-checking is crucial for avoiding bugs and maintaining a healthy codebase. Use PropTypes or TypeScript to define the expected types of props and state.</p></li>
        <li><p><strong>Error Boundaries</strong>: Use Error Boundaries to catch and handle errors within your components, preventing the entire application from crashing due to an error in a single component.</p></li>
        </ol>
        <p>Remember, best practices can change over time with new React features and updates, so always stay up-to-date with the latest recommendations from the React community and official documentation.</p>`
    },
    {
        id: "02",
        name: "Cowboy hourse riding on the moon",
        template: "Article Generator",
        size: "430",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>Once upon a time, in a world not so far away, there lived a cowboy named Hank. Hank wasn't your ordinary cowboy; he had always dreamt of adventures that took him beyond the dusty plains of Earth's Old West. He yearned for something more, something out of this world, quite literally.</p><br>
        <p>Hank's dreams came true when a group of visionary scientists and engineers developed a way to explore the moon, establishing a small lunar base. This new era of space exploration was filled with endless possibilities, and Hank knew he had to be a part of it.</p><br>
        <p>One sunny morning, as the spacecraft awaited liftoff at the Kennedy Space Center, Hank, dressed in his rugged cowboy attire, strode toward the launchpad. People stared, puzzled by the sight of a cowboy amidst the scientists and astronauts, but Hank paid them no mind. He was a cowboy with a purpose – a cowboy on a mission to ride the moon.</p><br>
        <p>The spaceship, named "Starstrider," was sleek and advanced, equipped with all the technology needed for the lunar mission. Hank had undergone extensive training to prepare for the journey, and he was as ready as he could be.</p><br>
        <p>As the countdown reached zero, the rocket engines roared to life, and Hank felt a rush of exhilaration like never before. With a thunderous roar, the Starstrider blasted off into the sky, leaving Earth behind.</p><br>
        <p>Days turned into weeks as the spaceship hurtled through space, and Hank got accustomed to life in zero gravity. He marveled at the breathtaking views of the Earth and the moon as they grew closer and closer. Finally, the Starstrider touched down on the lunar surface, kicking up a cloud of lunar dust.</p><br>
        <p>Hank climbed into his spacesuit, which resembled a futuristic cowboy outfit, complete with a helmet shaped like a Stetson hat. He descended the ladder and set foot on the moon, becoming the first cowboy to ever do so.</p><br>
        <p>The lunar landscape was unlike anything Hank had ever seen. The desolate, cratered terrain stretched out before him, bathed in the eerie glow of Earth on the horizon. But Hank wasn't deterred. He had his trusty lunar rover, which he affectionately named "Rusty."</p><br>
        <p>Hank hopped on Rusty and began his lunar adventure. Instead of herding cattle, he collected moon rocks and conducted experiments. He rode across the dusty plains, leaving tire tracks that would become his lunar trails.</p><br>
        <p>Every evening, Hank would park Rusty and set up camp beneath the vast, star-filled lunar sky. He'd sip coffee from a pouch, gazing out at Earth, his lonesome cowboy's heart feeling strangely at peace.</p><br>
        <p>One day, while exploring a particularly deep crater, Hank discovered something remarkable – a cave with mysterious symbols etched into its walls. It was a lunar treasure, an ancient artifact that could rewrite history books.</p><br>
        <p>Hank's discovery made headlines around the world, and he became a hero on Earth, a legend in his own right. But he wasn't done with the moon yet. Hank continued to explore, dreaming of building a lunar ranch where he could ride beneath Earth's watchful eye.</p><br>
        <p>As the years passed, more cowboys and pioneers joined Hank on the moon. The lunar base expanded, and the cowboy spirit thrived on this new frontier. Hank's dream had become a reality, and he was the original cowboy who had tamed the wild lunar frontier.</p><br>
        <p>And so, in the great cosmic tapestry of space and time, there was a cowboy who had lassoed the moon, proving that dreams could come true even in the most unexpected of places. Hank, the cowboy on the moon, became a legend, forever etching his name into the history of the final frontier.</p>
        `,
    },
    {
        id: "03",
        name: "Write a useEffect function with clean up",
        template: "Code Generator",
        size: "124",
        type: "code",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>In React, the <strong>useEffect</strong> hook is used to perform side effects in functional components. It runs after every render and can be used to fetch data, subscribe to events, or perform other tasks that need to be done when the component mounts, updates, or unmounts. Sometimes, you might need to clean up resources or subscriptions to prevent memory leaks or unexpected behavior when the component is unmounted. You can achieve this by returning a cleanup function from the <strong>useEffect</strong> hook.</p>
        <p>Here's an example of a <strong>useEffect</strong> function with cleanup:</p>
        <br/>
        <pre>
        <code>
import React, { useState, useEffect } from &#x27;react&#x27;;

const MyComponent = () =&#x3E; {
  const [data, setData] = useState(null);

  useEffect(() =&#x3E; {
    // This code will run when the component mounts or updates

    // Simulate fetching data from an API (for demonstration purposes)
    const fetchData = async () =&#x3E; {
      try {
        const response = await fetch(&#x27;https://api.example.com/data&#x27;);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(&#x27;Error fetching data:&#x27;, error);
      }
    };

    fetchData();

    // The cleanup function
    return () =&#x3E; {
      // This code will run when the component unmounts or updates and the effect is re-run

      // Clean up any resources or subscriptions here
      // For example, if you have an event listener, remove it to avoid memory leaks
      // Remove any timers or intervals that were set up in the effect
      // Clear any other resources that need cleanup

      console.log(&#x27;Cleaning up...&#x27;);
    };
  }, []); // The empty dependency array ensures the effect runs only once (on mount) and not on updates

  return (
    &#x3C;div&#x3E;
      {data ? (
        &#x3C;ul&#x3E;
          {data.map((item) =&#x3E; (
            &#x3C;li key={item.id}&#x3E;{item.name}&#x3C;/li&#x3E;
          ))}
        &#x3C;/ul&#x3E;
      ) : (
        &#x3C;p&#x3E;Loading data...&#x3C;/p&#x3E;
      )}
    &#x3C;/div&#x3E;
  );
};

export default MyComponent;
        </code>
        </pre>
        <br/>
        <p>In this example, the <strong>useEffect</strong> hook is used to fetch data from an API when the component mounts. The cleanup function is returned from the effect, which is executed when the component is unmounted or re-rendered and the effect is re-run.</p>
        <p>The cleanup function is essential in scenarios where you need to clean up resources created within the <strong>useEffect</strong> to prevent memory leaks and unwanted behavior. In this case, the cleanup function is used to log a message, but in a real application, you would use it to remove event listeners, clear intervals, or perform other necessary cleanup tasks.</p>
        `,
    },
    {
        id: "04",
        name: "How to Build a Single-Page Application with JavaScript and React",
        template: "Article Generator",
        size: "487",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>Building a Single-Page Application (SPA) with JavaScript and React involves several steps. Below, I'll outline the general process to create a basic SPA using React:</p>
        <ol>
        <li><strong>Setup</strong>: Make sure you have Node.js and npm (Node Package Manager) installed on your computer. Create a new project directory and initialize a new npm project using the following command in your terminal:</li>
        </ol>
        <pre><code>npm init</code></pre>
        <ol start="2">
        <li><strong>Install React and ReactDOM</strong>: Install React and ReactDOM packages using npm:</li>
        </ol>
        <pre>
        <code>npm install react react-dom</code></pre>
        <ol start="3">
        <li><strong>Set up Babel and Webpack</strong>: To write modern JavaScript code and bundle your React application, you need Babel and Webpack. Install the required dependencies:</li>
        </ol>
        <pre><code>npm install @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev </code></pre>
        <ol start="4">
        <li><p><strong>Create a Webpack Configuration</strong>: Create a <code>webpack.config.js</code> file in the root of your project and configure Webpack with the necessary settings. This includes specifying entry points, output paths, loaders, and plugins.</p></li>
        <li><p><strong>Create the React Components</strong>: Build your React components in the <code>src</code> folder. Create a root component that will be the entry point for your application.</p></li>
        <li><p><strong>Define Routes</strong>: Decide on the routes you want to have in your SPA. You can use React Router for handling routing in your application. Install it using:</p></li>
        </ol>
        <pre><code>npm install react-router-dom </code></pre>
        <ol start="7">
        <li><p><strong>Create Navigation</strong>: Implement a navigation system using React Router. Define the different routes and the components that should be rendered for each route.</p></li>
        <li><p><strong>Build the Application</strong>: Set up the necessary scripts in your <code>package.json</code> to build the application using Webpack and Babel.</p></li>
        <li><p><strong>Run the Development Server</strong>: Configure a development server to serve your SPA during development. You can use <code>webpack-dev-server</code> to do this.</p></li>
        <li><p><strong>Testing</strong>: Write unit tests for your components and run them using testing libraries like Jest and Enzyme.</p></li>
        <li><p><strong>Deployment</strong>: Prepare your application for deployment by creating a production build. This usually involves running Webpack with optimizations for production.</p></li>
        <li><p><strong>Deploy the Application</strong>: Host your built application on a web server or deploy it using platforms like Netlify, Vercel, or GitHub Pages.</p></li>
        </ol>
        <p>Here's a simplified folder structure for your project:</p>
        <pre><code class="!whitespace-pre hljs language-css">your-app/
        |- node_modules/
        |- <span class="hljs-attribute">src</span>/
        |  |- components/
        |  |  |- <span>Header</span><span>.js</span>
        |  |  |- Home<span>.js</span>
        |  |  |- About<span>.js</span>
        |  |- App<span>.js</span>
        |  |- index<span>.js</span>
        |- package<span>.json</span>
        |- webpack<span>.config</span><span>.js</span>
        |- <span>.babelrc</span>
        |- index<span>.html</span></code></pre>
        <p>Remember, this is just an overview, and each step can be quite involved. As you progress through building your SPA, refer to the official documentation of React, React Router, Webpack, and Babel to understand the finer details and best practices. Also, consider using additional libraries and tools like Redux for state management if your application becomes more complex.</p>
        `,
    },
    {
        id: "05",
        name: "10 Tips for Debugging JavaScript Code Like a Pro",
        template: "Article Generator",
        size: "356",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `<p>Debugging is an essential skill for any JavaScript developer. Here are ten tips to help you debug JavaScript code like a pro:</p>
        <ol>
        <li><p><strong>Use Browser Developer Tools</strong>: Most modern browsers come with robust developer tools. Use the Console, Debugger, and Network tabs to inspect variables, set breakpoints, and analyze network activity.</p></li>
        <li><p><strong>Set Breakpoints</strong>: Place <code>debugger;</code> statements directly in your code to halt execution and inspect the state of your application at specific points.</p></li>
        <li><p><strong>Inspect Console Output</strong>: Use <code>console.log()</code> to print values and debug messages. You can also use <code>console.error()</code>, <code>console.warn()</code>, and <code>console.info()</code> to highlight different types of output.</p></li>
        <li><p><strong>Watch Expressions</strong>: While debugging, set up watch expressions in your debugger to monitor the values of specific variables as you step through your code.</p></li>
        <li><p><strong>Inspect Call Stack</strong>: When an error occurs, examine the call stack to understand the sequence of function calls that led to the error.</p></li>
        <li><p><strong>Check for Typos and Syntax Errors</strong>: Carefully review your code for typos and syntax errors that may cause unexpected behavior or prevent your code from running altogether.</p></li>
        <li><p><strong>Use ESLint and Linters</strong>: Use ESLint and other linters to catch potential issues early and enforce code quality and consistency.</p></li>
        <li><p><strong>Isolate the Problem</strong>: Temporarily remove unrelated code or comment out sections to narrow down the problem to a specific area of your codebase.</p></li>
        <li><p><strong>Version Control and Git</strong>: Utilize version control (e.g., Git) to create branches or commits when attempting significant changes. This way, you can easily revert to a working state if something goes wrong.</p></li>
        <li><p><strong>Write Unit Tests</strong>: Create unit tests for your functions and components using testing frameworks like Jest. These tests can help you quickly identify issues as you make changes.</p></li>
        </ol>
        <p>Bonus Tip: If you encounter a particularly challenging issue, don't hesitate to search for help online. Many developers share their experiences and solutions on platforms like Stack Overflow and GitHub.</p>
        <p>Remember, debugging is a skill that improves with practice. Be patient and methodical in your approach, and always strive to write clean and well-structured code to make the debugging process smoother. Happy debugging!</p>
        `,
    },
    {
        id: "06",
        name: "Display a Random Quote on Your Webpage with JavaScript",
        template: "Code Generator",
        size: "212",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>To display a random quote on a webpage using JavaScript, you can follow these steps:</p>
        <br>
        <ol>
          <li>Create an HTML file to structure your webpage.</li>
          <li>Define an array of quotes in JavaScript.</li>
          <li>Write JavaScript code to select a random quote from the array and display it on the webpage.</li>
          <li>Style the webpage with CSS (optional).</li>
        </ol>
        <br>
        <p>Here's a step-by-step example:</p>
        <br>
        <ol><li>Create an HTML file (e.g., <code>index.html</code>):</li></ol>
        <br>
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Random Quote Generator&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h1&gt;Random Quote Generator&lt;/h1&gt;
        &lt;div class=&quot;quote&quot;&gt;
            &lt;p id=&quot;quote-text&quot;&gt;Loading...&lt;/p&gt;
            &lt;button id=&quot;new-quote-button&quot;&gt;New Quote&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<br>
        <ol start="2"><li>Create a JavaScript file (e.g., <code>script.js</code>) to handle the random quote generation:</li></ol>
        <br>
        <pre><code>
// Define an array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort"
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = getRandomQuote();
}

// Event listener for the "New Quote" button
const newQuoteButton = document.getElementById("new-quote-button");
newQuoteButton.addEventListener("click", displayRandomQuote);

// Initial quote display
displayRandomQuote();</code></pre>
<br>
        <ol start="3"><li>Optionally, create a CSS file (e.g., <code>styles.css</code>) to style your webpage:</li></ol>
<br>
<pre><code>
<br>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.quote {
  margin-top: 20px;
}

#quote-text {
  font-size: 18px;
}

#new-quote-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#new-quote-button:hover {
  background-color: #0056b3;
}</code></pre>
      <br>
      <ol start="4"><li>Open the <code>index.html</code> file in a web browser, and you should see a webpage that displays a random quote. Clicking the "New Quote" button will generate and display a new random quote.</li></ol>
      <br>
      <p>This example demonstrates how to create a simple random quote generator using HTML, JavaScript, and CSS. You can customize it further by adding more quotes or adjusting the styling to fit your preferences.</p>
        `,
    },
    {
        id: "07",
        name: "Create a Simple JavaScript Calculator with Basic Math Operations",
        template: "Code Generator",
        size: "652",
        type: "text",
        created: "April 3th 2023, 06:32 PM",
        content: `
        <p>To create a simple JavaScript calculator with basic math operations (addition, subtraction, multiplication, and division), you can follow these steps:</p>
        <br>
        <ol><li>Create an HTML file to structure your calculator.</li><li>Write JavaScript code to handle the calculations.</li><li>Create CSS for styling (optional).</li></ol>
        <br>
        <p>Here's a step-by-step example:</p>
        <br>
        <ol><li>Create an HTML file (e.g., <code>calculator.html</code>):</li></ol>
        <br>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Simple Calculator&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;calculator&quot;&gt;
        &lt;input type=&quot;text&quot; id=&quot;display&quot; readonly&gt;
        &lt;div class=&quot;buttons&quot;&gt;
            &lt;button onclick=&quot;clearDisplay()&quot;&gt;C&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;7&apos;)&quot;&gt;7&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;8&apos;)&quot;&gt;8&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;9&apos;)&quot;&gt;9&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;+&apos;)&quot;&gt;+&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;4&apos;)&quot;&gt;4&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;5&apos;)&quot;&gt;5&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;6&apos;)&quot;&gt;6&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;-&apos;)&quot;&gt;-&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;1&apos;)&quot;&gt;1&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;2&apos;)&quot;&gt;2&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;3&apos;)&quot;&gt;3&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;*&apos;)&quot;&gt;*&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;0&apos;)&quot;&gt;0&lt;/button&gt;
            &lt;button onclick=&quot;calculateResult()&quot;&gt;=&lt;/button&gt;
            &lt;button onclick=&quot;appendToDisplay(&apos;/&apos;)&quot;&gt;/&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<br>
<ol start="2"><li>Create a JavaScript file (e.g., <code>script.js</code>) to handle the calculator logic:</li></ol>
<br>
<pre><code>
let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        if (!isNaN(result)) {
            displayValue = result.toString();
            updateDisplay();
        } else {
            displayValue = '';
            updateDisplay();
            alert('Invalid input');
        }
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert('An error occurred');
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}</code></pre>
<br>
<ol start="3"><li>Optionally, create a CSS file (e.g., <code>styles.css</code>) to style your calculator:</li></ol>
<br>
<pre><code>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#display {
  width: 100%;
  padding: 10px;
  font-size: 24px;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}</code></pre>
<br>
<ol start="4"><li>Open the <code>calculator.html</code> file in a web browser, and you should see a simple calculator with basic math operations. You can enter expressions and perform calculations by clicking the buttons.</li></ol>
<br>
<p>This example demonstrates how to create a basic calculator using HTML, JavaScript, and CSS. It supports addition, subtraction, multiplication, and division. You can further enhance it by adding more features and error handling as needed.</p>
        `,
    },
];

export default data;
