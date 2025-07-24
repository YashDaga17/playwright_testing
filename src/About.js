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

                    <section className="about-card">
                        <h3>🎭 Testing & Quality</h3>
                        <p>
                            This app is thoroughly tested with Playwright end-to-end tests covering:
                        </p>
                        <ul>
                            <li><strong>Functionality:</strong> All todo operations work correctly</li>
                            <li><strong>Accessibility:</strong> Screen reader and keyboard navigation support</li>
                            <li><strong>Visual Regression:</strong> UI consistency across updates</li>
                            <li><strong>Cross-Browser:</strong> Works on Chrome, Firefox, and Safari</li>
                            <li><strong>Mobile Testing:</strong> Optimized for mobile devices</li>
                        </ul>
                        {window.location.hostname === 'yashdaga17.github.io' && (
                            <p>
                                <a
                                    href="/playwright_testing/test-reports/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '8px 16px',
                                        background: '#4299e1',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '4px',
                                        marginTop: '10px'
                                    }}
                                >
                                    📊 View Live Test Reports
                                </a>
                            </p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
