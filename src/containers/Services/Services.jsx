import contentServices from './ServicesContent/ServicesContent.json';
import './Services.scss';

export const Services = () => (
  <div className="container services" id="services">
    <h1>
      <span className="blue-text">
        Наші
      </span>
      &nbsp;
      послуги
    </h1>

    <ul className="services__list blue-text">
      {Object.entries(contentServices).map(([id, { title, description }]) => (
        <li key={id} className="services--item">
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
