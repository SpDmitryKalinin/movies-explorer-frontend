import React from 'react';

export default class Technologies extends React.Component{
    render(){
        return (
            <section className="technologies">
                <h2 className="technologies__title">Технологии</h2>
                <div className="technologies__info-box">
                    <h3 className="technologies__subtitle">7 технологий</h3>
                    <p className="technologies__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="technologies__list-container">
                    <ul className="technologies__list">
                        <li className="technologies__list-item">HTML</li>
                        <li className="technologies__list-item">CSS</li>
                        <li className="technologies__list-item">JS</li>
                        <li className="technologies__list-item">React</li>
                        <li className="technologies__list-item">Git</li>
                        <li className="technologies__list-item">Express.js</li>
                        <li className="technologies__list-item">mongoDB</li>
                    </ul>

                </div>
            </section>
        )
    }
}