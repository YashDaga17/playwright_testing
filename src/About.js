import React from 'react';

function About() {
    return (
        <div className="about-section">
            <div className="about-container">
                <h2>About This Todo Application</h2>

                <div className="about-content">
                    <section className="about-card">
                        <h3>What is this app?</h3>
                        <p>
                            This is a simple, yet powerful todo list application built with React.
                            It helps you keep track of your daily tasks and stay organized.
                        </p>
                    </section>

                    <section className="about-card">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Add Tasks:</strong> Quickly add new tasks to your list</li>
                            <li><strong>Mark Complete:</strong> Check off tasks as you complete them</li>
                            <li><strong>Delete Tasks:</strong> Remove tasks you no longer need</li>
                            <li><strong>Progress Tracking:</strong> See how many tasks you've completed</li>
                            <li><strong>Clean Design:</strong> Minimalist interface to reduce distractions</li>
                        </ul>
                    </section>

                    <section className="about-card">
                        <h3>How to Use</h3>
                        <ol>
                            <li>Navigate to the "Todo List" section</li>
                            <li>Type your task in the input field</li>
                            <li>Click "Add Task" or press Enter</li>
                            <li>Check the checkbox when you complete a task</li>
                            <li>Use the "Delete" button to remove tasks</li>
                        </ol>
                    </section>

                    <section className="about-card">
                        <h3>Built With</h3>
                        <p>
                            This application is built using modern web technologies including
                            React for the user interface, CSS for styling, and JavaScript for
                            interactive functionality.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
