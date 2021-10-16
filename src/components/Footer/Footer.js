import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <footer className="footer">
                <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__info">
                    <p className="footer__year">@ 2021</p>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="https://practicum.yandex.ru/profile/web/" className="footer__link">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="https://github.com/SpDmitryKalinin" className="footer__link">Github</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="#" className="footer__link">Facebook</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}