import React from 'react';
import logo from '../../img/logo.png'
import fb from '../../img/fb.png'
import vk from '../../img/vk.png'
import inst from '../../img/inst.png'
import tractor from '../../img/tractor.png'
import arrow from '../../img/arrow.png'
import arrowDown from '../../img/arrowDown.png'
import house from '../../img/house.png'
import park from '../../img/park.png'
import people from '../../img/people.png'
import children from '../../img/children.png'
import weed from '../../img/weed.png'
import akademia from '../../img/akadimia.png'
import apartaments from '../../img/appartaments.png'
import message from '../../img/message.png'

import './style.css'

const Main = () => {
    return (
        <>
            <section className='background'>
                <section className='container'>
                    <header className='header'>
                        <a href="#"><img className='header-logo' src={logo} alt="Braun House Family"/></a>
                        <nav className='header-nav'>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Квартиры</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Как купить</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Ход строительства</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Документы</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Новости</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Коммерция</a></li>
                            <li className='header-nav_item'><a className='nav-item_a' href="#">Контакты</a></li>
                        </nav>
                        <section className='header-contact'>
                            <nav className='header-contact_nav'>
                                <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={vk} alt="vk"/></a>
                                <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={inst} alt="instagram"/></a>
                                <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={fb} alt="facebook"/></a>
                            </nav>
                            <a className='contact-number' href="#">+7 (905) 600-60-06</a>
                        </section>
                    </header>
                    <section className='content'>
                        <section className='stepWork'>
                            <img className='stepWork-img' src={tractor} alt="tractor"/>
                            <span className='stepWork-text'>ХОД СТРОИТЕЛЬСТВА</span>
                        </section>
                        <section className='appartments'>
                            <h1 className='appartments-text'>КВАРТИРЫ РЯДОМ С ПАРКОМ И ОЗЕРОМ ОТ 2,7 МЛН</h1>
                        </section>
                        <section className='choose'>
                            <section className='choose-container'>
                                <span className='choose-text'>Всего 96 квартир от 24 — 64м² Сдача в 4 кв. 2022</span>
                                <section className='choose-link'>
                                    <img className='choose-link-img' src={arrow} alt="arrow"/>
                                    <span className='choose-link-text'>ХОД СТРОИТЕЛЬСТВА</span>
                                </section>
                            </section>
                        </section>
                        <section className='arrowDown'>
                            <img className='arrowDown-img' src={arrowDown} alt="Стрелка вниз"/>
                        </section>
                        <section className='slider-numbers'>
                            <span className='slider-number-span'>01 / 03</span>
                        </section>
                        <section className='slider-pin'>
                            <li className='slider-pin-item'></li>
                            <li className='slider-pin-item slider-pin-item_active'></li>
                            <li className='slider-pin-item'></li>
                            <li className='slider-pin-item'></li>
                        </section>
                    </section>
                </section>
            </section>
            <section className='container-help'>
                <section className='container'>
                    <section className='info-block'>
                        <section className='info-block_container'>
                            <section className='info-first'>
                                <img className='info-first_img' src={house} alt="Дом для комфортной жизни"/>
                                <h3 className='info-first_title'>ДОМ <br/> ДЛЯ КОМФОРТНОЙ ЖИЗНИ</h3>
                            </section>
                            <section className='info-second'>
                                <p className='info-second_text'>Браун Хаус Family — семейный жилой комплекс повышенной <br/> комфортности. Созданный ГК «Академия» проект — <br/> идеальный баланс трех составляющих удобного жилого <br/> пространства. <br/>
                                    Обжитая зеленая локация с озером, парком и необходимой <br/> инфраструктурой. Здание с современным оборудованием <br/> и безопасный закрытый двор. Плюс — просторные <br/> планировки с кухнями-гостиными.</p>
                                <img className='info-second_img' src={park} alt="Дом для комфортной жизни"/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className='container-help'>
                <section className='container'>
                    <section className='seven-problems'>
                        <h4 className='right-block_seven'>7</h4>
                        <h4 className='right-block_title'>ПРИЧИН КУПИТЬ <br/> ЗДЕСЬ КВАРТИРУ</h4>
                    </section>
                    <section className='slider-block'>
                        <section className='left-block'>
                            <h4 className='left-block_title'>РЯДОМ - РЕКА, ОЗЕРО <br/> И НЕСКОЛЬКО ПАРКОВ</h4>
                            <p className='left-block_paragraph'>В 200 метрах от комплекса расположено <br/> озеро со сквером и Летним театром, где <br/> проводятся праздничные мероприятия. <br/> На таком же удалении протекает река Охта, <br/> а через дорогу находится крупный зеленый <br/> массив — Капральев парк, где оборудованы <br/> прогулочные тропинки и зоны для барбекю. <br/> Экологически чистая местность располагает <br/> к прогулкам на свежем воздухе, семейным <br/> пикникам и тренировкам.</p>
                            <section className='left-block-slider-buttons'>
                                <img className='left-block-slider-buttons-left slider-btn' src={arrow} alt="arrow"/>
                                <img className='left-block-slider-buttons-right slider-btn' src={arrow} alt="arrow"/>
                            </section>
                            <section className='left-block-slider-count'>
                                <span className='left-block-slider-count_text'>01 / 07</span>
                            </section>
                        </section>
                        <section className='right-block'>
                            <section className='right-block-slider'>
                                <img className='right-block-slider-item' src={people} alt="people"/>
                                <img className='right-block-slider-item' src={children} alt="children"/>
                                <img className='right-block-slider-item' src={weed} alt="weed"/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className='container-help'>
                <section className='container'>
                    <section className='developer'>
                        <section className='developer-left'>
                            <img className='developer-left_img' src={akademia} alt="akademia"/>
                        </section>
                        <section className='developer-right'>
                            <h4 className='developer-right_title'>НАДЕЖНЫЙ ЗАСТРОЙЩИК</h4>
                            <section className='developer-right-info'>
                                <p className='developer-right-info-text'>ГК «Академия» строит жилье и коммерческую <br/> недвижимость с 2015 года. Компания выполняет полный <br/> цикл работ: от разработки концепции до управления <br/> готовым объектом.</p>
                                <section className='developer-right-info-item'>
                                    <p className='developer-right-info-item_text'><span className='item_slash'>/</span> 7  ЛЕТ</p>
                                    <span className='developer-right-info-item_down'>Работы</span>
                                </section>
                                <section className='developer-right-info-item'>
                                    <p className='developer-right-info-item_text'><span className='item_slash'>/</span> 3</p>
                                    <span className='developer-right-info-item_down'>Проекта</span>
                                </section>
                                <section className='developer-right-info-item'>
                                    <p className='developer-right-info-item_text'><span className='item_slash'>/</span> 465</p>
                                    <span className='developer-right-info-item_down'>Счастливых семей</span>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className='map-background'>
                <section className='container'>
                    <section className='map-top'>
                        <nav className='map-nav'>
                            <li className='map-nav-item'>ВСЕ</li>
                            <li className='map-nav-item'>ШКОЛА</li>
                            <li className='map-nav-item'>РЕСТОРАНЫ</li>
                            <li className='map-nav-item'>МАГАЗИНЫ</li>
                            <li className='map-nav-item'>ЗДОРОВЬЕ</li>
                            <li className='map-nav-item'>ОТДЫХ</li>
                        </nav>
                    </section>
                    <section className='map-bottom'>
                        <h4 className='map-bottom-title'>ВСЕ ВОЗМОЖНОСТИ <span className='map-bottom-title_gold'>В ОДНОМ МЕСТЕ</span></h4>
                    </section>
                </section>
            </section>
            <section className='container-help'>
                <section className='container'>
                    <section className='news'>
                        <section className='news-header'>
                            <h3 className='news-header-title'>Новости о ЖК</h3>
                            <section className='news-header-tool'>
                                <img className='news-header-tool-buttons-left' src={arrow} alt="arrow"/>
                                <img className='news-header-tool-buttons-right' src={arrow} alt="arrow"/>
                            </section>
                        </section>
                        <section className='news-info'>
                            <section className='news-info-item'>
                                <time className='news-info-time'>12 июня 2020</time>
                                <h5 className='news-info-item-title'>Подписан договор с ЛенРусСтрой</h5>
                                <p className='news-info-item-description'>Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это <br/> значит, что дом строит не абы кто</p>
                            </section>
                            <section className='news-info-item'>
                                <time className='news-info-time'>12 июня 2020</time>
                                <h5 className='news-info-item-title'>Подписан договор проектного финансирования с ООО«Сбербанк»</h5>
                                <p className='news-info-item-description'>Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это <br/> значит, что дом строит не абы кто</p>
                            </section>
                            <section className='news-info-item'>
                                <time className='news-info-time'>12 июня 2020</time>
                                <h5 className='news-info-item-title'>Подписан договор с ЛенРусСтрой</h5>
                                <p className='news-info-item-description'>Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это <br/> значит, что дом строит не абы кто</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className='container-help'>
                <section className='container'>
                    <section className='apartments'>
                        <section className='apartments-header'>
                            <h3 className='apartments-header-title'>Найдите свою <br/> идеальную квартиру</h3>
                            <section className='apartments-header-tool'>
                                <img className='apartments-header-tool-buttons-right' src={arrow} alt="arrow"/>
                                <span className='apartments-header-tool-text'>ВЫБРАТЬ КВАРТИРУ</span>
                            </section>
                        </section>
                        <section className='apartments-info'>
                            <section className='apartments-info-item'>
                                <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                <h4 className='apartments-info-price'>2 739 000 руб.</h4>
                                <p className='apartments-info-apart'>1 комн. 32.4 м² <span className='apartments-info-apart_roof'>- Этаж 3/9</span></p>
                            </section>
                            <section className='apartments-info-item'>
                                <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                <h4 className='apartments-info-price'>2 769 000 руб.</h4>
                                <p className='apartments-info-apart'>1 комн. 33.4 м² <span className='apartments-info-apart_roof'>- Этаж 5/9</span></p>
                            </section>
                            <section className='apartments-info-item'>
                                <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                <h4 className='apartments-info-price'>2 719 000 руб.</h4>
                                <p className='apartments-info-apart'>1 комн. 31.4 м² <span className='apartments-info-apart_roof'>- Этаж 2/9</span></p>
                            </section>
                            <section className='apartments-info-item'>
                                <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                <h4 className='apartments-info-price'>2 799 000 руб.</h4>
                                <p className='apartments-info-apart'>1 комн. 32.4 м² <span className='apartments-info-apart_roof'>- Этаж 7/9</span></p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <footer className='footer'>
                <section className='container'>
                    <section className='footer-top'>
                        <section className='footer-top-left'>
                            <h2 className='footer-top-left-title'>СВЯЖИТЕСЬ С НАМИ</h2>
                            <section className='footer-top-left-btn'>
                                <img className='footer-top-left-btn_img' src={message} alt="message"/>
                                <span className='footer-top-left-btn_text'>ОСТАВИТЬ ЗАЯВКУ</span>
                            </section>
                        </section>
                        <section className='footer-top-right'>
                            <a className='footer-top-right-number' href="#">+7 (812) 429-56-73</a>
                            <a className='footer-top-right-site' href="#">info@brownhouse.ru</a>
                            <section className='footer-top-right-contacts'>
                                <img className='footer-top-right-contacts-item' src={vk} alt="vk"/>
                                <img className='footer-top-right-contacts-item' src={inst} alt="instagram"/>
                                <img className='footer-top-right-contacts-item' src={fb} alt="facebook"/>
                            </section>
                        </section>
                    </section>
                    <section className='footer-map'>
                        <ul className='footer-map-list'>
                            <li className='footer-map-list-item'><a href="#">Квартиры</a></li>
                            <li className='footer-map-list-item'><a href="#">Как купить</a></li>
                            <li className='footer-map-list-item'><a href="#">Ход строительства</a></li>
                            <li className='footer-map-list-item'><a href="#">Коммерция</a></li>
                            <li className='footer-map-list-item'><a href="#">Документы</a></li>
                            <li className='footer-map-list-item'><a href="#">Контакты</a></li>
                        </ul>
                        <span className='footer-map-createEyeTronic'>Разработано в <span className='footer-map-createEyeTronic_style'>Eyetronic</span>, 2021©</span>
                    </section>
                    <section className='footer-map-last-info'>
                        <span className='footer-map-last-info-text'>Информация, предоставленная на сайте, не является публичной офертой. Все цены действительны на 25 июня 2021 г. при условии единовременной оплаты. Элементы благоустройства, иллюстрации и описания дизайн-проектов <br/> квартир приведены для сведения, являются примером возможной организации жилого пространства. Представленные сведения носят исключительно информационный характер.</span>
                    </section>
                </section>
            </footer>
        </>
    );
};

export default Main;
