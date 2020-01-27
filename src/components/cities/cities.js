import React from 'react';
import Icon from '../icon';
import './cities.css';

export default class Cities extends React.Component {
  cities = [
    {
      city: "VLADIVOSTOK",
      date: "13.03",
      link: "https://vk.com/flesh_vl",
      tickets: "https://sike-events.timepad.ru/event/1243438/",
    },
    {
      city: "KHABAROVSK",
      date: "14.03",
      link: "https://vk.com/flesh_khv",
      tickets: "https://sike-events.timepad.ru/event/1243441/",
    },
    {
      city: "BLAGOVESHENSK",
      date: "15.03",
      link: "https://vk.com/flesh_blg",
      tickets: "https://sike-events.timepad.ru/event/1243440/",
    },
    {
      city: "SMOLENSK",
      date: "25.03",
      link: "https://vk.com/event190505881",
      tickets: "https://bryansk.qtickets.events/12504-flesh-smolensk-25-marta",
    },
    {
      city: "OREL",
      date: "26.03",
      link: "https://vk.com/event190506729",
      tickets: "https://bryansk.qtickets.events/12505-flesh-orel-26-marta",
    },
    {
      city: "BRYANSK",
      date: "27.03",
      link: "https://vk.com/event190507256",
      tickets: "https://bryansk.qtickets.events/12506-flesh-bryansk-27-marta",
    },
    {
      city: "VORONEZH",
      date: "28.03",
      link: "https://vk.com/event190507793",
      tickets: "https://bryansk.qtickets.events/12507-flesh-voronezh-28-marta",
    },
    {
      city: "BELGOROD",
      date: "29.03",
      link: "https://vk.com/event190508441",
      tickets: "https://bryansk.qtickets.events/12594-flesh-belgorod-29-marta",
    },
    {
      city: "SOCHI",
      date: "01.04",
      link: "https://vk.com/fleshsochii",
      tickets: "https://sochi.qtickets.events/12597-flesh-sochi-1-aprelya-at-mr-jager",
    },
    {
      city: "NOVOROSSIYSK",
      date: "02.04",
      link: "https://vk.com/fleshnvrsk ",
      tickets: "https://novorossijsk.qtickets.events/12595-flesh-novorossiysk-2-aprelya-at-orange-club",
    },
    {
      city: "ROSTOV-ON-DON",
      date: "03.04",
      link: "https://vk.com/rndflesh",
      tickets: "https://vk.com/app5898182_-190619847#s=620294",
    },
    {
      city: "KRASNODAR",
      date: "04.04",
      link: "https://vk.com/krdflesh",
      tickets: "https://vk.com/app5898182_-190619270#s=625539",
    },
    {
      city: "EKATERINBURG",
      date: "05.04",
      link: null,
      tickets: null,
    },
    {
      city: "SYKTYVKAR",
      date: "09.04",
      link: "https://vk.com/fleshskt",
      tickets: "https://artembilet.ru/events/293",
    },
    {
      city: "KRASNOYARSK",
      date: "25.04",
      link: "https://vk.com/flesh_kry",
      tickets: "https://krasnoyarsk.qtickets.events/11224-flesh-2902-krasnoyarsk-at-circus",
    },
    {
      city: "TOMSK",
      date: "26.04",
      link: "https://vk.com/flesh_tsk",
      tickets: "https://tomsk.qtickets.events/11223-flesh-2802-tomsk-at-rayon",
    },
    {
      city: "NOVOSIBIRSK",
      date: "30.04",
      link: "https://vk.com/flesh__nsk",
      tickets: "https://novosibirsk.qtickets.events/11219-flesh-2302-novosibirsk-at-podzemka",
    },
    {
      city: "OMSK",
      date: "01.05",
      link: "https://vk.com/flesh_omsk",
      tickets: "https://omsk.qtickets.events/11218-flesh-2202-omsk-at-pushkin-pubclub",
    },
    {
      city: "BARNAUL",
      date: "02.05",
      link: "https://vk.com/flesh_brn",
      tickets: "https://barnaul.qtickets.events/11221-flesh-2502-barnaul-at-cocobongo-club",
    },
    {
      city: "KEMEROVO",
      date: "03.05",
      link: "https://vk.com/flesh_kem",
      tickets: "https://kemerovo.qtickets.events/11222-flesh-2602-kemerovo-at-zavod",
    },
    {
      city: "MOSCOW",
      date: "15.05",
      link: "https://vk.com/fleshmsk1930",
      tickets: null,
    },
  ];

  state = {
    activeCity: null,
  };

  showDetails = (city) => {
    const { activeCity } = this.state;
    if (activeCity === city) {
      this.setState({ activeCity: null });
    } else {
      this.setState({ activeCity: city });
    }
  };

  renderLink = (link, icon) => {
    if (!link) {
      return null;
    }

    return (
      <a className="cities__link" href={link} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} />
      </a>
    );
  };

  renderCities() {
    const { activeCity } = this.state;

    return this.cities.map(item => {
      const { city, date, link, tickets } = item;
      const cls = city === activeCity ? "cities__item cities__item--active" : "cities__item";
      const meetingLink = this.renderLink(link, 'vk');
      const ticketsLink = this.renderLink(tickets, 'ticket2');
      const linksDefault = <div className="cities__no-links">Информация скоро!</div>;

      return (
        <div key={city} className={cls} onClick={() => this.showDetails(city)}>
          <span className="cities__date">{date}</span>
          <div className="cities__content">
            <span className="cities__name">{city}</span>
            <div className="cities__links">
              { !meetingLink && !ticketsLink && linksDefault}
              { meetingLink }
              { ticketsLink }
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const cities = this.renderCities();

    return (
      <div className="cities">
        { cities }
      </div>
    );
  }
}
