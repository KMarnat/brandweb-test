import addmedia from '../assets/addmedia.svg';
import addemoji from '../assets/addemoji.svg';
import submit from '../assets/arrow.svg';
import settings from '../assets/threedots.svg';
import likes from '../assets/likes.svg';
import comments from '../assets/comments.svg';
import UserWithStatus from './UserWithStatus.js';

export default function ProfileFeed() {
  return (
    <div className="feed">
      <div className="feed__buttons">
        <button>Feed</button>
      </div>

      <div className="feed__post">
        <UserWithStatus
          source={'https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png'}
        />
        <div className="feed__inputarea">
          <form className="feed__form">
            <input placeholder="Start typing..."></input>
            <button className="feed__form-media">
              <img src={addmedia} alt="add media" />
            </button>
            <button className="feed__form-emoji">
              <img src={addemoji} alt="add emoji" />
            </button>

            <button className="feed__form-submit">
              <img src={submit} alt="submit button icon" />
            </button>
          </form>
        </div>
      </div>
      <article className="feed__submitted-post">
        <div className="feed__poster">
          <img
            src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
            alt="profile avatar"
            className="feed__poster-img"
          />
          <div className="feed__poster-playing">
            <p>
              <span className="feed__poster-playing--bold">Big dog lover girls</span> playing{' '}
              <span className="feed__poster-playing--bold">Call of Duty</span>
            </p>
            <p>47 min</p>
          </div>

          <img src={settings} className="feed__poster-menu" alt="post settings" />
        </div>
        <div className="feed__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, interdum nec
            massa nec, vestibulum faucibus neque. Aliquam est sem, vehicula eu varius mattis,
            vulputate at nisl. Pellentesque sit amet eleifend enim. Phasellus ornare elit in dui
            elementum pulvinar. Pellentesque a velit in ex rhoncus sagittis ullamcorper eget mi.
            Proin lorem sapien, aliquam eu tempus et, sollicitudin id mi. Morbi sollicitudin iaculis
            mi sed euismod. Suspendisse ut viverra nibh,
          </p>
        </div>
        <div className="feed__content-actions">
          <button>
            <img src={likes} alt="likes on posts" />
          </button>
          <button>
            <img src={comments} alt="comments on posts" />
          </button>
        </div>
      </article>
    </div>
  );
}
