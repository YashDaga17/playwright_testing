import React from 'react';

function Home() {
    return (
        <div className="home-section">
            <div className="hero">
                <h1>Welcome to My Todo App</h1>
                <p className="hero-subtitle">
                    Stay organized and boost your productivity with our simple, intuitive todo list application.
                </p>
                <div className="features">
                    <div className="feature-card">
                        <h3>✓ Easy Task Management</h3>
                        <p>Add, complete, and delete tasks with just a click</p>
                    </div>
                    <div className="feature-card">
                        <h3>✓ Clean Interface</h3>
                        <p>Simple and distraction-free design to keep you focused</p>
                    </div>
                    <div className="feature-card">
                        <h3>✓ Instant Updates</h3>
                        <p>Real-time task status updates as you work</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
