import React from 'react';
import './Faq.css'

const Faq = () => {
  return (
    <div className='headings'>
      <h1>Hello from FAQ</h1>
      <hr />
      <div className='faq'>
        <h3>1- How does React website work?</h3>
        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        <hr />
        <h3>2- What is props vs state in React?</h3>
        <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
        <hr />
        <h3>3- What does useEffect do other than loading data?</h3>
        <p>(useEffect)  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
      </div>
    </div>
  );
};

export default Faq;