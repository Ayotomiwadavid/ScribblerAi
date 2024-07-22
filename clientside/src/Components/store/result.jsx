const data = {
    text: `<p>Debugging is an essential skill for any JavaScript developer. Here are ten tips to help you debug JavaScript code like a pro:</p>
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
    transcribe: `<p>Once upon a time, in a world not so far away, there lived a cowboy named Hank. Hank wasn't your ordinary cowboy; he had always dreamt of adventures that took him beyond the dusty plains of Earth's Old West. He yearned for something more, something out of this world, quite literally.</p>
    <p>Hank's dreams came true when a group of visionary scientists and engineers developed a way to explore the moon, establishing a small lunar base. This new era of space exploration was filled with endless possibilities, and Hank knew he had to be a part of it.</p>
    <p>One sunny morning, as the spacecraft awaited liftoff at the Kennedy Space Center, Hank, dressed in his rugged cowboy attire, strode toward the launchpad. People stared, puzzled by the sight of a cowboy amidst the scientists and astronauts, but Hank paid them no mind. He was a cowboy with a purpose – a cowboy on a mission to ride the moon.</p>
    <p>The spaceship, named "Starstrider," was sleek and advanced, equipped with all the technology needed for the lunar mission. Hank had undergone extensive training to prepare for the journey, and he was as ready as he could be.</p>
    <p>As the countdown reached zero, the rocket engines roared to life, and Hank felt a rush of exhilaration like never before. With a thunderous roar, the Starstrider blasted off into the sky, leaving Earth behind.</p>
    <p>Days turned into weeks as the spaceship hurtled through space, and Hank got accustomed to life in zero gravity. He marveled at the breathtaking views of the Earth and the moon as they grew closer and closer. Finally, the Starstrider touched down on the lunar surface, kicking up a cloud of lunar dust.</p>
    <p>Hank climbed into his spacesuit, which resembled a futuristic cowboy outfit, complete with a helmet shaped like a Stetson hat. He descended the ladder and set foot on the moon, becoming the first cowboy to ever do so.</p>
    <p>The lunar landscape was unlike anything Hank had ever seen. The desolate, cratered terrain stretched out before him, bathed in the eerie glow of Earth on the horizon. But Hank wasn't deterred. He had his trusty lunar rover, which he affectionately named "Rusty."</p>
    <p>Hank hopped on Rusty and began his lunar adventure. Instead of herding cattle, he collected moon rocks and conducted experiments. He rode across the dusty plains, leaving tire tracks that would become his lunar trails.</p>
    <p>Every evening, Hank would park Rusty and set up camp beneath the vast, star-filled lunar sky. He'd sip coffee from a pouch, gazing out at Earth, his lonesome cowboy's heart feeling strangely at peace.</p>
    <p>One day, while exploring a particularly deep crater, Hank discovered something remarkable – a cave with mysterious symbols etched into its walls. It was a lunar treasure, an ancient artifact that could rewrite history books.</p>
    <p>Hank's discovery made headlines around the world, and he became a hero on Earth, a legend in his own right. But he wasn't done with the moon yet. Hank continued to explore, dreaming of building a lunar ranch where he could ride beneath Earth's watchful eye.</p>
    <p>As the years passed, more cowboys and pioneers joined Hank on the moon. The lunar base expanded, and the cowboy spirit thrived on this new frontier. Hank's dream had become a reality, and he was the original cowboy who had tamed the wild lunar frontier.</p>
    <p>And so, in the great cosmic tapestry of space and time, there was a cowboy who had lassoed the moon, proving that dreams could come true even in the most unexpected of places. Hank, the cowboy on the moon, became a legend, forever etching his name into the history of the final frontier.</p>
    `,
    code: `import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
    // This code will run when the component mounts or updates

    // Simulate fetching data from an API (for demonstration purposes)
    const fetchData = async () => {
        try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setData(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    fetchData();

    // The cleanup function
    return () => {
        // This code will run when the component unmounts or updates and the effect is re-run

        // Clean up any resources or subscriptions here
        // For example, if you have an event listener, remove it to avoid memory leaks
        // Remove any timers or intervals that were set up in the effect
        // Clear any other resources that need cleanup

        console.log('Cleaning up...');
    };
    }, []); // The empty dependency array ensures the effect runs only once (on mount) and not on updates

    return (
    <div>
        {data ? (
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        ) : (
        <p>Loading data...</p>
        )}
    </div>
    );
};

export default MyComponent;`,
    image : [
        {
            src: "/images/generated/a-modern-and-innovative-commercial-booth-in-the-middle-of-the-desert.jpg",
        },
        {
            src: "/images/generated/a-teeny-tiny-cute-redheaded-gremlin-girl-reaching-her-hands-into-the-air-saying-because-I-love-you.jpg",
        },
        {
            src: "/images/generated/cute-cat-as-calculator-macaroon-as-the-buttons-of-the-calculator-ribbon-happy-colors2.jpg",
        },
        {
            src: "/images/generated/cute-cat-as-calculator-macaroon-as-the-buttons-of-the-calculator-ribbon-happy-colors.jpg",
        },
    ]
}

export default data;