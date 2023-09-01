import profilemenu from '../assets/threedots.svg';
import { useRef, useEffect, useState } from 'react';

export default function ProfileCard() {
  const [avatarHeight, setAvatarHeight] = useState(0);
  const avatarRef = useRef(null);

  useEffect(() => {
    // Access elementRef.current to get the DOM element
    const handleResize = () => {
      const element = avatarRef.current;
      if (element) {
        // Perform operations on the element, such as getting its dimensions
        const height = element.offsetHeight;
        setAvatarHeight(height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  console.log(avatarHeight);

  return (
    <article className="profilecard">
      <div
        className="profilecard__avatar"
        ref={avatarRef}
        style={{ marginBottom: -avatarHeight / 2 + 8 }}
      >
        <div className="aspect-ratio">
          <div>
            <img
              src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
              alt="profile avatar"
            />
          </div>
        </div>
      </div>
      <div className="profilecard__content">
        <img src={profilemenu} alt="profile menu" className="profilecard__menu" />
        <div className="profilecard__details">
          <h2>Neroin</h2>
          <p>Alexander Juul Jakobsen</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quisque in mi consectetur
            tempor nulla turpis sagittis non. Tincidunt...
          </p>
        </div>
        <div className="profilecard__numbers">
          <div className="profilecard__counter">
            <h4>23</h4>
            <p>friends</p>
          </div>
          <div className="profilecard__counter">
            <h4>13</h4>
            <p>followers</p>
          </div>
          <div className="profilecard__counter">
            <h4>442</h4>
            <p>following</p>
          </div>
        </div>
      </div>
    </article>
  );
}
