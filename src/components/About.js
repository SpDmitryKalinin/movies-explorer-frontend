import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <section className="about">
                <h2 className="about__title">О проекте</h2>
                <div className="about__info">
                    <div className="about__info-item">
                        <h3 className="about__info-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about__info-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about__info-item">
                        <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about__info-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-item">
                        <p className="progress-bar">1 неделя</p>
                        <p className="progress-caption">Back-end</p>
                    </div>
                    <div className="progress-item">
                        <p className="progress-bar">4 недели</p>
                        <p className="progress-caption">Front-end</p>
                    </div>
                </div>
            </section>
            
        )
    }
}