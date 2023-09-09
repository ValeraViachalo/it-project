import arrow from '../../images/icons/pixel_arrow.svg';
import './RoundLink.scss';

export const RoundLink = () => (
  <div className="round-link">
    <a 
      href="/"
      className="round-link--item"
    >
      <img
        src={arrow}
        alt="arrow"
        className="round-link--arrow"
      />
    </a>
  </div>
); 
