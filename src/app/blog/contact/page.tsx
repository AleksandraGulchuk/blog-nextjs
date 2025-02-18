import React from 'react';

export default function Page() {
    return (
        <div>
            <h1 className="text-purple-800">Contact</h1>
            <br/>
            <p>
                Have a question, idea, or just want to say hello? We’d love to hear from you! Reach out and let’s
                connect.
            </p>
            <br/>
            <div>
                <h5>Get in Touch</h5>
                <ul style={{listStyleType: "circle"}}>
                    <li>

                        <span>Email: <a href="mailto:contact@example.com">contact@example.com</a></span>
                    </li>
                    <li>
                        <span>Website: <a href="https://www.example.com">www.example.com</a></span>
                    </li>
                </ul>

            </div>
        </div>
    );
}
