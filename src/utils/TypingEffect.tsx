import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect: React.FC = () => {
    return (
        <div style={{ fontSize: '2em', color: 'white', textAlign: 'center' }}>
            <Typewriter
                options={{
                    strings: ['Olá, eu sou Bruno Dias.'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default TypingEffect;
