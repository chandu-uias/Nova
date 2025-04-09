import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '../styles/ContactUs.css';
import Navbar from '../componets/Navbar';
// import whatsappLogo from '../assets/whatsappicon.jpg'; 
// import instaLogo from '../assets/insta.png';
// import faceLogo from '../assets/Facebook-icon.png';

const ContactUs = ({ photographer }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const whatsappNumber = '323456789';

  return (
    <div
      className="bgimage"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dkf7alzki/image/upload/v1744039266/mini/wedding/an2hzosft7uz9k3gwebp.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="about">
        <div className="about-details">
          <h2>Photographer Details</h2>
          <div className="details">
            <div className="detail"><strong>Name:</strong> {photographer.name}</div>
            <div className="detail"><strong>Email:</strong> <a href={`mailto:${photographer.email}`}>{photographer.email}</a></div>
            <div className="detail"><strong>Instagram:</strong> <a href={`https://www.instagram.com/${photographer.instagram}`} target="_blank" rel="noopener noreferrer">@{photographer.instagram}</a></div>
            <div className="detail"><strong>Phone:</strong> {photographer.phoneNumber}</div>
            <div className="detail"><strong>Experience:</strong> {photographer.experience} years</div>
            <div style={{ marginTop: "15px" }}>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <img src={"https://res.cloudinary.com/dkf7alzki/image/upload/v1744120994/whatsappicon_a7hwyn.jpg"} alt="WhatsApp Logo" className="whatsapp-logo" />
              </a>
              <a href="https://www.instagram.com/chandu_uias" target="_blank" rel="noopener noreferrer">
                <img src={"https://res.cloudinary.com/dkf7alzki/image/upload/v1744120994/insta_boidvl.png"} alt="Instagram" className="insta-logo" />
              </a>
              <a href="https://www.facebook.com/chandu.uias?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <img src={"https://res.cloudinary.com/dkf7alzki/image/upload/v1744120994/insta_boidvl.png"} alt="Facebook" className="face-logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="photographer-image">
          <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744131215/Camera_Photography_Dp_for_Girls_nkcm27.jpg" alt="Photographer" />
        </div>
      </div>

      <div className="other-collections">
        <h2 className="h2other">Other Collections</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {[
              "dfve6o6t4bflduawp38i.jpg", "d7vlv1mc38ovjwzyfrey.jpg", "yqztsni0wltszbhk8j0a.jpg", "xlnzh51aih1f6uesowlc.jpg", "hvncludtrpkl5pqmqg7q.jpg",
              "zyipnesx4d5lrjrdjwju.jpg", "gqhwphfwsdhgqbekwzrn.jpg", "eajorqqz3idebhwablwq.jpg", "illzlknicqwvuprslmrn.jpg", "nsgzbnz1j886srooouxb.jpg",
              "ewqzkfj20torey4nnnsg.jpg", "uybgfdluyjkpveebjex1.jpg", "uw8sjcz6jfydufnl0e4b.jpg", "dfemgvvxsdr22ld2wgmg.jpg", "vqdkptssavz418x29h5n.jpg"
            ].map((img, index) => (
              <div key={index}>
                <img className="carouselimg" src={`
https://res.cloudinary.com/dkf7alzki/image/upload/v1744039347/mini/shoots/others//${img}`} alt={`Other Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
