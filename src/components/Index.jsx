const React = require('react');
const { useState } = React;

const Index = props => {
    const [buttonText, setButtonText] = useState('Click me, please');
    return (
        <>
            {props.data.map(result => (
                <p key={result}>Props: {result}</p>
            ))}
            <button onClick={() => setButtonText('Thanks, been clicked!')}>{buttonText}</button>
        </>
    );
};

module.exports = Index;
