import addmedia from "../assets/addmedia.svg";
import addemoji from "../assets/addemoji.svg";
import submit from "../assets/arrow.svg";
import settings from "../assets/threedots.svg";
import likes from "../assets/likes.svg";
import comments from "../assets/comments.svg";
import UserWithStatus from "./UserWithStatus.js";

export default function ProfileFeed() {
  return (
    <div className="feed">
      <div className="feed__buttons">
        <button>Feed</button>
      </div>

      <div className="create-post">
        <UserWithStatus
          source={
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          status={true}
        />
        <div className="create-post__inputarea">
          <form className="form">
            <input placeholder="Start typing..." className="form__input"></input>
            <button className="form__add-media">
              <img src={addmedia} alt="add media" />
            </button>
            <button className="form__add-emoji">
              <img src={addemoji} alt="add emoji" />
            </button>

            <button className="form__submit">
              <img src={submit} alt="submit button icon" />
            </button>
          </form>
        </div>
      </div>
      <article className="post">
        <div className="post__author">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile avatar"
            className="post__author-img"
          />
          <div className="post__author-playing">
            <p>
              <strong>Big dog lover girls</strong> playing <strong>Call of Duty</strong>
            </p>
            <p>47 min</p>
          </div>

          <img src={settings} className="post__author-menu" alt="post settings" />
        </div>
        <div className="post__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, interdum nec
            massa nec, vestibulum faucibus neque. Aliquam est sem, vehicula eu varius mattis,
            vulputate at nisl. Pellentesque sit amet eleifend enim. Phasellus ornare elit in dui
            elementum pulvinar. Pellentesque a velit in ex rhoncus sagittis ullamcorper eget mi.
            Proin lorem sapien, aliquam eu tempus et, sollicitudin id mi. Morbi sollicitudin iaculis
            mi sed euismod. Suspendisse ut viverra nibh,
          </p>
        </div>
        <div className="post__actions">
          <button className="post__actions-like">
            <img src={likes} alt="likes on posts" />
          </button>
          <button className="post__actions-comment">
            <img src={comments} alt="comments on posts" />
          </button>
        </div>
      </article>
    </div>
  );
}
