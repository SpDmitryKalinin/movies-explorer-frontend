import React from 'react';

export default class Portfolio extends React.Component{
    render(){
        return (
            <section className="portfolio">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item">
                        <a href="https://github.com/SpDmitryKalinin/how-to-learn" className="portfolio__link">
                            <p className="portfolio__link-description">Статичный сайт</p>
                            <div className="portfolio__link-icon">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="white"/>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li className="portfolio__list-item">
                        <a href="https://github.com/SpDmitryKalinin/russian-travel" className="portfolio__link">
                            <p className="portfolio__link-description">Адаптивный сайт</p>
                            <div className="portfolio__link-icon">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="white"/>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li className="portfolio__list-item">
                        <a href="https://github.com/SpDmitryKalinin/react-mesto-api-full" className="portfolio__link">
                            <p className="portfolio__link-description">Одностраничное приложение</p>
                            <div className="portfolio__link-icon">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="white"/>
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}