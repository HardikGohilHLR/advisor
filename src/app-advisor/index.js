/* Main Component */ 

import React, { useState, useEffect } from 'react';
import Skeleton from '../components/skeleton';

const Advisor = () => {

    const [advice, setadvice] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAdvice();
    }, []);
    
    const getAdvice = () => {
        setIsLoading(true);
        fetch(`https://api.adviceslip.com/advice/${Math.round(Math.random() * 200)}`)
        .then(res => res?.json())
        .then(data => { 
            setadvice(data?.slip);
            setIsLoading(false);
        });
    }

    return (
        <React.Fragment>
            <div className="content">
                <div className="advice-block-wpr">
                    <div className="advice-block">
                        <div className="advice-number">
                            {
                                isLoading ?
                                <Skeleton width="200px" height="18px" /> :
                                <h3>Advice #{advice?.id}</h3>
                            }
                        </div>
                        <div className="advice-content">
                            {
                                isLoading ? <>
                                    <Skeleton width="100%" height="36px" />
                                    <Skeleton width="100%" height="36px" />
                                </> :
                                <h2>{advice?.advice}</h2>
                            }
                        </div>
                    </div>

                    <div className="line">
                        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
                                <g transform="translate(212)" fill="#CEE3E9">
                                    <rect width="6" height="16" rx="3"/>
                                    <rect x="14" width="6" height="16" rx="3"/>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <button className="advice-refresh" onClick={getAdvice}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z" fill="#182c30"/>
                        </svg>
                    </button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Advisor;