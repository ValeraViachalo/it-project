import { Button } from '../../../components/Button';
import { AboutUsLinks } from '../../../components/AboutUsLinks';

import './HeaderNavigation.scss';

export const HeaderNavigation = () => (
  <nav className="header-navigatiion">
    <ul className="header-navigatiion__list">
      {Object.entries(AboutUsLinks).map(([label, containerName]) => (
        <li key={containerName}>
          <a href={`#${containerName}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>

    <Button
      content={'Замовити'}
      container={'Header'}
    />
  </nav>
  );
