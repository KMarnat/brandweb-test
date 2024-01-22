import profilemenu from "../assets/threedots.svg";
import { useRef, useEffect, useState } from "react";

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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

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
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile avatar"
            />
          </div>
        </div>
      </div>
      <div className="profilecard__content">
        <img src={profilemenu} alt="profile menu" className="profilecard__menu" />
        <div className="profilecard__details">
          <h2>randomName123</h2>
          <p>Bob McBob</p>
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
