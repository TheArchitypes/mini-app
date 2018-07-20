import React from 'react';
import PropTypes from 'prop-types';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from '../../logo.svg';
// import sammyGomez from './assets/images/sammy-gomez.png';
// import chrisAlvorado from './assets/images/chris-alvorado.png';
// import carlosPortillo from './assets/images/carlos-portillo.png';

const agentArray = [
  {
    name: 'Sammy Gomez',
    title: 'Executive Realtor',
    address: '563 S. Brand Blvd. San Fernando, CA 91340',
    phone: '818.282.2979',
    email: 'sammygomez@realtyexecutives.com',
    photo: 'sammyGomez',
    site: 'http://www.goggle.com',
    details: '',
    socialMedia: [
      { type: 'facebook', link: 'facebook.com'},
      { type: 'twitter', link: 'twitter.com'},
      { type: 'linkedin', link: ''},
      { type: 'instagram', link: ''},
      { type: 'youtube', link: ''},
    ],
  },
  {
    name: 'Chris Alvorado',
    title: 'Realtor',
    address: '563 S. Brand Blvd. San Fernando, CA 91340',
    phone: '818.209.9490',
    email: 'calvorado@realtyexecutives.com',
    photo: 'chrisAlrarado',
    site: 'http://www.goggle.com',
    details: '',
    socialMedia: [
      { type: 'facebook', link: 'facebook.com'},
      { type: 'twitter', link: 'twitter.com'},
      { type: 'linkedin', link: 'linkedin.com'},
      { type: 'instagram', link: 'instagram.com'},
      { type: 'youtube', link: 'youtube.com'},
    ],
  },
  {
    name: 'Carlos Portillo',
    title: 'Realtor',
    address: '563 S. Brand Blvd. San Fernando, CA 91340',
    phone: '818.282.2979',
    email: 'cportillo@realtyexecutives.com',
    photo: 'carlosPortillo',
    site: 'http://www.goggle.com',
    details: '',
    socialMedia: [
      { type: 'facebook', link: ''},
      { type: 'twitter', link: ''},
      { type: 'linkedin', link: ''},
      { type: 'instagram', link: ''},
      { type: 'youtube', link: ''},
    ],
  },
];

export default function ContactAgentContainer({ history }) {
  return (
      <div className="container">
        <div className="contact-agent-content">
          <div className="flex-container no-border">
            <div className="flex-col no-border">
              <div className="flex-row"><h1>Contact Our Agents</h1></div>
              <div className="flex-row">
                <div className="flex-col agent-col" style={{ width: '50%' }}>
                  {agentArray.map((agent, index) => (
                    <div className="flex-row agent-row">
                      <div className="flex-col no-border float-l">
                        <div className="flex-row">
                          <div className="flex-col no-border">
                            <img className="float-l" src={agent.photo} />
                          </div>
                          <div className="flex-col no-border">
                            <div className="social-media-tabs">
                              {agent.socialMedia.map((media, index) => {
                                if (!_.isEmpty(media.link)) {
                                  return (<div className="flex-row"><button className={`social-media-${media.type}`} onClick={() => history.push(media.link)} /></div>);
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col no-border float-l">
                        <div className="flex-row"><h2>{agent.name}</h2></div>
                        <div className="flex-row"><h4>{agent.title}</h4></div>
                        <div className="flex-row"><p className="contact-agent-address">{agent.address}</p></div>
                        <div className="flex-row"><p>Phone: {agent.phone}</p></div>
                        <div className="flex-row"><p className="contact-agent-email">Email: {agent.email}</p></div>
                        <div className="flex-row">
                          <div className="flex-col no-border no-grow">
                            <button onClick={() => history.push(agent.details)}><span>Details</span></button>
                          </div>
                          <div className="flex-col no-border no-grow">
                            <button onClick={() => history.push(agent.site)}><span>Visit Site</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-col agent-col" style={{ width: '50%' }}>
                  {agentArray.map((agent, index) => (
                    <div className="flex-row agent-row">
                      <div className="flex-col no-border float-l">
                        <div className="flex-row">
                          <div className="flex-col no-border">
                            <img className="float-l" src={agent.photo} />
                          </div>
                          <div className="flex-col no-border">
                            <div className="social-media-tabs">
                              {agent.socialMedia.map((media, index) => {
                                if (!_.isEmpty(media.link)) {
                                  return (<div className="flex-row"><button className={`social-media-${media.type}`} onClick={() => history.push(media.link)} /></div>);
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col no-border float-l">
                        <div className="flex-row"><h2>{agent.name}</h2></div>
                        <div className="flex-row"><h4>{agent.title}</h4></div>
                        <div className="flex-row"><p className="contact-agent-address">{agent.address}</p></div>
                        <div className="flex-row"><p>Phone: {agent.phone}</p></div>
                        <div className="flex-row"><p className="contact-agent-email">Email: {agent.email}</p></div>
                        <div className="flex-row">
                          <div className="flex-col no-border no-grow">
                            <button onClick={() => history.push(agent.details)}><span>Details</span></button>
                          </div>
                          <div className="flex-col no-border no-grow">
                            <button onClick={() => history.push(agent.site)}><span>Visit Site</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

{
  const { shape } = PropTypes;
  ContactAgentContainer.propTypes = {
    history: shape({}),
  }

  ContactAgentContainer.defaultProps = {
    history: () => {},
  }
}
