import React from 'react';
import photo from '../../images/photo.jpg';

export default class Student extends React.Component{
    render(){
        return (
            <section className="student">
                <h2 className="student__title">Студент</h2>
                <div className="student__content">
                    <div className="student__info">
                        <h3 className="student__subtitle">Дмитрий</h3>
                        <p className="student__professian">Фронтенд-разработчик, 24 года</p>
                        <p className="student__paragraph">Я родился и живу в Сергиев Посаде, закончил факультет приборостроения в МИРЭА. Есть прекрасная жена. Я люблю компьютерные игры, музыку, фильмы, пинг-понг, бильярд, а так же увлекаюсь шахматами. Увлекаться кодом начал ещё с 16 лет. Попробовал себя во многих областях от программирования микроконтроллеров до компьютерных игр. В этом году прошел курс веб-разработки сразу устроился в студию Pmotion.</p>
                        <div className="student__social">
                            <a  className="student__social-item">VK</a>
                            <a href="https://t.me/t_storage" className="student__social-item">telegram</a>
                        </div>
                    </div>
                    <div className="student__photo">
                        <img className="student__photo-item" src={photo} alt="Моя фотография:)"/>
                    </div>
                </div>
            </section>
        )
    }
}