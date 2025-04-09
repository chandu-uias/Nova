import React, { useEffect } from 'react';
import '../styles/HomePage.css';
import Navbar from '../componets/Navbar';


function HomePage() {
    useEffect(() => {
        const h1 = document.querySelector('.hero-content h1');
        h1.classList.add('animated');
    }, []);

    const backgroundStyle = {
        backgroundImage: "url('https://res.cloudinary.com/dkf7alzki/image/upload/v1744038884/mini/ywy13m4qcke8mcmsm1co.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    };

    return (
        <div>
            <Navbar />
            <section className="hero" style={backgroundStyle}>
                <div className="hero-content">
                    <h1>Welcome to NOVA CAPTURE</h1>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
