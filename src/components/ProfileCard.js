import profilemenu from '../assets/threedots.svg';

export default function ProfileCard() {
  return (
    <article className="profilecard">
      <div className="profilecard--border">
        <img
          src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
          alt="profile avatar"
          className="profilecard__image"
        />
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
