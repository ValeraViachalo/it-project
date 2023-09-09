import { Button } from '../../../components/Button';
import './HeaderNavigation.scss';

const NAVIGATION_LINKS = {
  'Послуги': 'services',
  'Чому саме ми': 'why-us',
  'Контакти': 'contacts',
}

export const HeaderNavigation = () => (
  <nav className="header-navigatiion">
    <ul className="header-navigatiion__list">
      {Object.entries(NAVIGATION_LINKS).map(([label, containerName]) => (
        <li key={containerName}>
          <a href={`#${containerName}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>

    <Button content={'Замовити'} />
  </nav>
  );
