import { RoundLink } from '../../components/RoundLink';
import { ServicesCard } from './ServicesCard/ServicesCard';
import { Сontacts } from './Сontacts';
import './ServicesPage.scss';

export const ServicesPage = () => (
  <div className="services-page">
    <div className="services-page__head">
      <div className="container services-page__head-content">
        <h1 className="services-page--title">
          Наші послуги
        </h1>

        <div className="services-page__head--link">
          <RoundLink />
        </div>
      </div>
    </div>

    <div className="services-page__content">
      <ServicesCard />

      <Сontacts />
    </div>
  </div>
);
