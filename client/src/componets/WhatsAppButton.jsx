import React from 'react';
import './Whatsapp.css'; 
import whatsappLogo from './assets/whatsappicon.jpg'; 

const WhatsAppButton = () => {
    const whatsappNumber = '8247332524'; 

    return (
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp Logo" className="whatsapp-logo" />
        </a>
    );
}

export default WhatsAppButton;





