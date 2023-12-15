import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto my-8 ">
            <h1 className="text-4xl font-bold mb-6 text-center">My Blog</h1>

            <div className="grid grid-cols-1 text-justify ">
                {/* Blog Post 1 */}
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-4xl font-bold mb-2">What is the Difference Between a Controlled and Uncontrolled Component in React?</h2>
                    <h4 className='text-xl font-bold my-2'>Controlled Component:</h4>
                    <p className="text-gray-600">
                        A controlled component in React is a component whose state is entirely managed by React. The component's state is stored within the React component, and any changes to the state trigger a re-render. The state is modified through functions passed down as props from a parent component, allowing the parent component to maintain control over the child component's state.
                    </p>

                    <h4 className='text-xl font-bold my-2'>Uncontrolled Component:</h4>
                    <p className="text-gray-600">
                        An uncontrolled component in React is a component that delegates the management of its state to the DOM itself. Unlike controlled components, the state is not stored within the React component but is handled and maintained by the DOM. Uncontrolled components often use refs to interact directly with the DOM, providing a way to access and modify the current state. This approach is useful in situations where direct DOM manipulation is necessary or when integrating React with non-React code.
                    </p>
                </div>
                {/* Blog Post 2 */}
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-4xl font-bold mb-2">How to validate React props using PropTypes?</h2>
                    <h4 className='text-xl font-bold my-2'>PropTypes in React:</h4>
                    <p className="text-gray-600">
                        PropTypes is a mechanism in React for defining the expected types of the properties (props) that a React component should receive. It allows developers to specify the data types and, in some cases, additional constraints for the props that a component is designed to work with. By doing so, PropTypes provide a form of runtime validation, helping developers catch potential bugs and issues early in the development process.

                        To use PropTypes, developers define the expected types of props for a component, and React will issue warnings in the console if the actual props received during runtime do not match these expectations. PropTypes can be particularly useful for documenting the intended usage of a component, making the code more readable and self-explanatory.
                    </p>

                </div>
                {/* Blog Post 3 */}
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-4xl font-bold mb-2">Tell us the difference between nodejs and express js.</h2>
                    <h4 className='text-xl font-bold my-2'>Node.js</h4>
                    <div className='text-justify text-gray-600'>
                            <ul >
                                <li> <b>Definition:</b> Node.js is a JavaScript runtime that allows the execution of JavaScript code on the server side.</li>
                                <li><b> Role:</b> It provides the core runtime environment for server-side JavaScript execution.</li>
                                <li> <b>Functionality:</b> Node.js handles asynchronous tasks efficiently, making it suitable for scalable network applications.</li>
                            </ul>
                      
                        <h4 className='text-xl font-bold my-2'>Express.js:</h4>
                        
                            <ul className="text-gray-600">
                                <li><b>Definition:</b> Express.js is a web application framework for Node.js.</li>
                                <li><b>Role:</b> It simplifies the process of building web applications and APIs on top of Node.js.</li>
                                <li><b>Functionality:</b>Express.js provides features like routing, middleware support, and simplified HTTP methods for handling requests.</li>
                            </ul>
                            <br />
                            <i className=' font-bold'> In summary, Node.js is the runtime environment, and Express.js is a framework built on top of Node.js, offering additional tools and abstractions for web application development.</i>
                        
                    </div>
                </div>
                {/* Blog Post 4 */}
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-4xl font-bold mb-2">What is a custom hook, and why will you create a custom hook?</h2>
                    <h4 className='text-xl font-bold my-2'>Custom Hook:</h4>

                    <p className="text-gray-600">
                        A custom hook in React is a JavaScript function whose name begins with "use" and utilizes built-in React hooks or other custom hooks to encapsulate and reuse stateful logic. It enables the extraction of common logic from components, promoting reusability, separation of concerns, and improved organization of code. Custom hooks are particularly useful for managing complex state, side effects, or other behavior that can be shared across multiple components, enhancing modularity and maintainability in React applications.
                    </p>


                </div>

            </div>
        </div>
    );
};

export default Blog;