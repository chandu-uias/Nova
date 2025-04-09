import React, { useState } from 'react';
import Navbar from '../componets/Navbar';
import '../styles/ServiceSection.css';

const ServiceSection = () => {
  const [activeSection, setActiveSection] = useState('wedding');
  const [searchQuery, setSearchQuery] = useState('');

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
// };
const handleSectionClick = (section) => {
    if (section === 'shootLocations') {
      // For shoot locations, set activeSection to the location itself
      setActiveSection(section);
    } else {
      setActiveSection(section);
    }
    if (section === 'otherCeremonies') {
        // Set the active section to 'namingCeremony' specifically when entering 'otherCeremonies'
        setActiveSection('namingCeremony');
      } else {
        setActiveSection(section);
      }
  };
  
  
  const shootLocations = ['Hyderabad', 'Goa', 'Mumbai', 'Agra'];

  const filteredShootLocations = shootLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Image data for each shoot location
  const imageData = {
    Hyderabad: [
      { id: 1, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039332/mini/shoots/hyd/hjubua7ufwsdi5ruorjn.jpg' },
      { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039331/mini/shoots/hyd/o5z1lv2f4gy6d1uq3xha.jpg'},
      { id: 3, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039331/mini/shoots/hyd/o5z1lv2f4gy6d1uq3xha.jpg' },
      { id: 4, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039321/mini/shoots/hyd/ydiwk4coqg5ih9fodmut.jpg' },
      { id: 5, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039321/mini/shoots/hyd/ocabzjhijbor5bsh3i42.jpg' },
      { id: 6, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039321/mini/shoots/hyd/gzaasd3dlhfg4xn23idd.jpg' },
      { id: 7, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039316/mini/shoots/hyd/do3wfcku8evgdkjphmsc.jpg' },
      { id: 8, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039314/mini/shoots/hyd/eywbfnxpg4rfrok7pssn.jpg' },
      { id: 9, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039311/mini/shoots/hyd/hu9zdv09qdfodbo8t5w4.jpg'},
      { id: 10, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039311/mini/shoots/hyd/hu9zdv09qdfodbo8t5w4.jpg'},
      { id: 11, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039305/mini/shoots/hyd/ae1rsg8jmxw2kytrihc2.jpg' },
      { id: 12, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039298/mini/shoots/hyd/jj5hytletkky8t1zxgds.jpg' },
      { id: 13, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039298/mini/shoots/hyd/jj5hytletkky8t1zxgds.jpg'},
      { id: 13, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039321/mini/shoots/hyd/gzaasd3dlhfg4xn23idd.jpg' },
      { id: 13, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039328/mini/shoots/hyd/xnjgqetmzq5mllwatv2j.jpg'},
      // Add more images as needed
    ],
    Goa: [
        { id: 10, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039345/mini/shoots/goa/zkhf9gia4ipqywtpxcbl.jpg' },
      { id: 1, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039344/mini/shoots/goa/biaxbmb3qjnixoskcye8.jpg' },
      { id: 11, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039339/mini/shoots/goa/qn2nu3vozabgfhcy0lbf.jpg' },
      { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039336/mini/shoots/goa/o5ux5zah6bxds3yonxeu.jpg' },
      { id: 3, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039335/mini/shoots/goa/xjlsu6t1m0vkn58v97lf.jpg'},
      { id: 4, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039332/mini/shoots/goa/x84liijpydud4lcqfmxf.jpg' },
      { id: 5, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039332/mini/shoots/goa/ek1wk22kzpdydf0oc6qa.jpg'},
      { id: 6, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039328/mini/shoots/goa/zqi4hqkqegbu7nqlgajl.jpg'},
      { id: 7, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039330/mini/shoots/goa/s2fvdjo0vxmztg83n3z4.jpg' },
      { id: 8, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039328/mini/shoots/goa/yy3upvt6ii47wrlls4o1.jpg' },
    //   { id: 9, src: '/mini/shoots/goa/img12.jpg', alt: 'Eating Panda' },
  
      // Add more images as needed
    ],
    Mumbai: [
      { id: 1, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039341/mini/shoots/mumbai/tndtkwx79rhjdxvrcaw3.jpg'},
      { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039340/mini/shoots/mumbai/mjzohx4scxlhaanrgxfp.jpg' },
      { id: 3, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039342/mini/shoots/mumbai/dtqynjbzcxaxsx7onoz3.jpg' },
      { id: 4, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039337/mini/shoots/mumbai/jsjcbfyqufh9erqaa2kg.jpg' },
      { id: 5, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039332/mini/shoots/mumbai/zgvdjtbfyevizzbrvsfa.jpg' },
      { id: 6, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039328/mini/shoots/mumbai/szi1ahulut3fmnk6agmz.jpg' },
      { id: 7, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039315/mini/shoots/mumbai/icucfduyub5vmodzufm7.jpg' },
      { id: 8, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039314/mini/shoots/mumbai/ecbjc6nhed2cgdpozldi.jpg' },
      { id: 9, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039309/mini/shoots/mumbai/nnbynuxxooylogpfkhwg.jpg' },
      { id: 10, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039309/mini/shoots/mumbai/nnbynuxxooylogpfkhwg.jpg' },
      // Add more images as needed
    ],
    Agra: [
    { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039349/mini/shoots/agra/xt4evuzujhhmawdtj9dl.jpg' },
      { id: 1, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039345/mini/shoots/agra/mfvkefgccmyea7d4x001.jpg' },
      { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039340/mini/shoots/agra/jijlip5zin3esxjwcxfp.jpg' },
      { id: 6, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039337/mini/shoots/agra/mow8sdnvhczbdjije20r.jpg' },
      { id: 3, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039336/mini/shoots/agra/nmyj50bimtz6lrsqd29c.jpg' },
      { id: 4, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039333/mini/shoots/agra/salfzlsweiaehep6kljn.jpg' },
      { id: 4, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039332/mini/shoots/agra/mc6flz1ev2asvwztcuq6.jpg' },
      { id: 5, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039326/mini/shoots/agra/rztfufwtq25oyqhiphmn.jpg'},
      { id: 6, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039315/mini/shoots/agra/ksw2ugkqlkajkvxitjre.jpg' },
      { id: 2, src: 'https://res.cloudinary.com/dkf7alzki/image/upload/v1744039314/mini/shoots/agra/yjc8hfuxquktbzxdedpk.jpg' },
     
      // Add more images as needed
    ],
  };
//   const searchIcon = require('./mini/saree/s1.jpeg'); // Replace with your search icon image path
  const handleSearchClick = () => {
    // Simulate search functionality here (replace with your actual search logic)
    console.log('Search initiated for:', searchQuery);
  };
  return (
    <div>
        <Navbar />
    <div className='bgservice'>
    <div className="service-section">
      {/* <h2>Service Section</h2> */}
      <div className="buttonservice">
      <button  className={`weddingbutton ${activeSection === 'wedding' ? 'active' : ''}`} onClick={() => handleSectionClick('wedding')}>
  Wedding
</button>

        <button className={`weddingbutton ${activeSection === 'preWedding' ? 'active' : ''}`} onClick={() => handleSectionClick('preWedding')}>
          Pre-Wedding
        </button>
        <button className={`weddingbutton ${activeSection === 'birthday' ? 'active' : ''}`} onClick={() => handleSectionClick('birthday')}>
          Birthday
        </button>
        <button className={`weddingbutton ${activeSection === 'shootLocations' ? 'active' : ''}`} onClick={() => handleSectionClick('shootLocations')}>
          Shoot Locations
        </button>
        <button className={`weddingbutton ${activeSection === 'otherCeremonies' ? 'active' : ''}`} onClick={() => handleSectionClick('otherCeremonies')}>
          Other Ceremonies
        </button>
      </div>
      <div>
          {activeSection === 'wedding' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123319/img5_lcchks.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Mangala Snanam</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123319/img2_k3q0cz.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Handfasting</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123318/img1_yhzcov.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Bride</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039336/mini/wedding/ha7kerpdf97zu1rujubs.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Mangalasutra</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123326/img4_aheo8i.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Haldi</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123326/img6_xglx0f.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Panigrahana</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
   {activeSection === 'preWedding' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123668/image1_pwy7tc.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Calendar Charm</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039288/mini/pre-wedding/maajyfu4resww7u2wxt5.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Boat-Bound Romance</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123672/image2_lpzlv1.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Frozen love</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039335/mini/pre-wedding/m0a7mdfraruu4hlkbckl.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>BeachSide Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744123671/image5_oedomx.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Melody Mates</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039337/mini/pre-wedding/ztg3y2ytkrlnv50uq47o.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Glance of forever</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
 {activeSection === 'birthday' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124033/image2_dg4uls.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>One year</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039304/mini/birthday/hp9a2zwzkmvupukry4lz.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Half Birthday</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039320/mini/birthday/bfitem43iv2nj2sckyka.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Slice of Happiness</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124031/image1_x1wdxv.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Family</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124032/image3_lscnzm.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Happy Birthday Highlights</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124032/image4_icvguq.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Pre-Birthday shoot</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
{activeSection === 'shootLocations' && (
  <div>
    <input
      className='searchshoot'
      type="text"
      placeholder="Search locations..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    {/* <img
          src="/mini/saree/s1.jpeg"
          alt="Search Locations"
          className="search-icon"
          onClick={handleSearchClick}
        /> */}
      {/* Add your search icon here */}
    
    <div className="wrapper">
      <div className="gallery">
        {filteredShootLocations.map((location) => (
          <div className='shoot-headings' key={location}>
            <h3>{location}</h3>
            <div className="location-images">
              {imageData[location].map((image) => (
                <div className="gallery__item" key={image.id}>
                  <a href="#" className="gallery__link">
                    <img src={image.src} alt={image.alt} className="gallery__image" />
                    <div className="gallery__overlay">
                      <span>{image.alt}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
        {activeSection === 'otherCeremonies' && (
          // Display images related to other ceremonies
          <div className="other-ceremony-buttons">
            {/* <h3>Other Ceremonies</h3> */}
            <div>
              <button className="weddingbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
          </div>
        )}
        {activeSection === 'namingCeremony' && (
         <div class="wrapper">
         <div className='threebutton'>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039307/mini/naming/mbld8bnkfp9pdx9hiw5p.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Parental Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124468/img5_dn0xar.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Infant Love Loop</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039280/mini/naming/cgijlbecf5nxgygiyaej.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cherubic Nap</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039329/mini/naming/d7v2oejhlzxvvhetuecx.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cutie's Reflection</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124469/img8_mwrlyc.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Baby's Glimpse</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039279/mini/naming/astkuvfp4zprhsntrosw.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cradle Clicks</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
    
 )}
        {activeSection === 'houseWarmingCeremony' && (
         <div class="wrapper">
        <div className='threebutton'>
              <button className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124816/img9_ofdikx.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HouseWarming Elegance</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124822/img4_s7xvt0.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blessings in Overflow</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124827/img10_dspyba.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Harmony Clicks</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124833/img8_mcsfdw.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Sacred Snaps</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744124827/img15_tjwcyl.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HomeComing Happiness</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039348/mini/house/ce6q35isiahsp2c8rpnt.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Delight Duo</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
{activeSection === 'sareeFunctionCeremony' && (
         <div class="wrapper">
        <div className='threebutton'>
              <button className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039287/mini/saree/rzzhdngtadkyqwyojxxl.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blessing Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039337/mini/saree/ipctx8xikqt13mbvid7z.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Saree squad</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039343/mini/saree/d0gayzb83k0pb4enfqxp.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Saree Saga </span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039302/mini/saree/eepnoaf4ruvsic6mcz6c.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Hidden Splendor</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039295/mini/saree/qh2u4elq8yurtldw7oob.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cheerful Clicks</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744039326/mini/saree/qmg58s2gtgo5th3snvzh.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blossom Beauty</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ServiceSection;
