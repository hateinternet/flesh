import React from 'react';
import cn from 'classnames';
import Icon from '../icon';
import './cities.css';

export default class Cities extends React.Component {
  cities = [
    {
      city: "PETROZAVODSK",
      date: "20.03",
      link: "https://vk.com/flesh_ptz",
      tickets: '#qtickets:event_id=13152&window_width=960&window_height=645&base_color=ffcc00',
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "SMOLENSK",
      date: "25.03",
      link: "https://vk.com/event190505881",
      tickets: "#qtickets:event_id=12504&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "OREL",
      date: "26.03",
      link: "https://vk.com/event190506729",
      tickets: "#qtickets:event_id=12505&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "BRYANSK",
      date: "27.03",
      link: "https://vk.com/event190507256",
      tickets: "#qtickets:event_id=12506&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "VORONEZH",
      date: "28.03",
      link: "https://vk.com/event190507793",
      tickets: "#qtickets:event_id=12507&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "BELGOROD",
      date: "29.03",
      link: "https://vk.com/event190508441",
      tickets: "#qtickets:event_id=12594&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "SOCHI",
      date: "01.04",
      link: "https://vk.com/fleshsochii",
      tickets: "#qtickets:event_id=12597&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "NOVOROSSIYSK",
      date: "02.04",
      link: "https://vk.com/fleshnvrsk ",
      tickets: "#qtickets:event_id=12595&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "ROSTOV-ON-DON",
      date: "03.04",
      link: "https://vk.com/rndflesh",
      tickets: "#qtickets:event_id=12566&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "KRASNODAR",
      date: "04.04",
      link: "https://vk.com/krdflesh",
      tickets: "#qtickets:event_id=12567&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "EKATERINBURG",
      date: "05.04",
      link: 'https://vk.com/newwavevol1',
      tickets: "https://svoboda-kontsert-holl.timepad.ru/event/1277187/",
      ticketTarget: "_blank",
      major: true,
    },
    {
      city: "SYKTYVKAR",
      date: "09.04",
      link: "https://vk.com/fleshskt",
      tickets: "https://artembilet.ru/events/293",
      ticketTarget: "_blank",
      major: false,
    },
    {
      city: "KRASNOYARSK",
      date: "25.04",
      link: "https://vk.com/flesh_kry",
      tickets: "#qtickets:event_id=11224&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "TOMSK",
      date: "26.04",
      link: "https://vk.com/flesh_tsk",
      tickets: "#qtickets:event_id=11223&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "NOVOSIBIRSK",
      date: "30.04",
      link: "https://vk.com/flesh__nsk",
      tickets: "#qtickets:event_id=11219&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "OMSK",
      date: "01.05",
      link: "https://vk.com/flesh_omsk",
      tickets: "#qtickets:event_id=11218&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "BARNAUL",
      date: "02.05",
      link: "https://vk.com/flesh_brn",
      tickets: "#qtickets:event_id=11221&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "KEMEROVO",
      date: "03.05",
      link: "https://vk.com/flesh_kem",
      tickets: "#qtickets:event_id=11222&window_width=960&window_height=645&base_color=ffcc00",
      ticketTarget: "_self",
      major: false,
    },
    {
      city: "BLAGOVESHENSK",
      date: "06.05",
      link: "https://vk.com/flesh_blg",
      tickets: "https://sike-events.timepad.ru/event/1243440/",
      ticketTarget: "_blank",
      major: false,
    },
    {
      city: "KHABAROVSK",
      date: "08.05",
      link: "https://vk.com/flesh_khv",
      tickets: "https://sike-events.timepad.ru/event/1243441/",
      ticketTarget: "_blank",
      major: false,
    },
    {
      city: "VLADIVOSTOK",
      date: "10.05",
      link: "https://vk.com/flesh_vl",
      tickets: "https://sike-events.timepad.ru/event/1243438/",
      ticketTarget: "_blank",
      major: false,
    },
    {
      city: "MOSCOW",
      date: "15.05",
      link: "https://vk.com/fleshmsk1930",
      tickets: "https://clck.ru/MF24Z",
      ticketTarget: "_blank",
      major: true,
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

  renderLink = (link, icon, target = '_blank') => {
    if (!link) {
      return null;
    }

    return (
      <a className="cities__link" href={link} target={target}>
        <Icon name={icon} />
      </a>
    );
  };

  renderCities() {
    const { activeCity } = this.state;

    return this.cities.map(item => {
      const { city, date, link, tickets, ticketTarget, major } = item;
      const cls = cn({
        'cities__item': true,
        'cities__item--active': city === activeCity,
        'cities__item--major': major,
      });
      // const cls = city === activeCity ? "cities__item cities__item--active" : "cities__item";
      const meetingLink = this.renderLink(link, 'vk');
      const ticketsLink = this.renderLink(tickets, 'ticket2', ticketTarget);
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
