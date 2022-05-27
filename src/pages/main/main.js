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
        </>
    );
};

export default Main;
