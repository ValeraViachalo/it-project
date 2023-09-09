import { Button } from "../../components/Button";
import { Lines } from "../../components/Lines/Lines";

import tedeshi from '../../images/contacts.png';

import './Сontacts.scss';

export const Сontacts = () => (
  <div className="container contacts" id="contacts">
    <div className="contacts__content">
      <h1 className="blue-text">
        Консультація
      </h1>

      <p className="contacts__main-text">
        Наші фахівці надають консультацію для
        покращення вашого бізнесу та оптимізації робочіх
        процесів!
      </p>

      <Button
        content={'Замовити'}
        container={'contacts'}
      />
    </div>

    <div className="contacts__image">
      <img
        src={tedeshi}
        alt="tedeshi"
      />
    </div>

    <Lines />
  </div>
);
