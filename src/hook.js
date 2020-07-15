import React, { useState, useEffect } from 'react';
import './hook.css';

const HookTest = (props) => {
    const [test, setTest] = useState(false);
    const [aa, setAa] = useState(1);
    const showTest = () => {
        setTest(!test);
    };
    useEffect(() => {
        setAa(2);
        console.log(aa);
        console.log('Start');
        return () => {
            console.log('end');
        };
    }, []);
    useEffect(() => {
        console.log(`Test change ${test}`);
        return () => {
            console.log(`???${test}`);
        };
    }, [test]);
    console.log(test);
    return (
        <div className="wrapper">
            {test && <div>100</div>}
            <div className="button" onClick={showTest}>toggle</div>
        </div>
    );
};

export default HookTest;
