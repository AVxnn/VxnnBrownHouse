import React, {useEffect, useState} from 'react';
import logo from '../../img/logo.png'
import logoBlack from '../../img/logo-black.png'
import fb from '../../img/fb.png'
import bg1 from '../../img/bg1.png'
import bg2 from '../../img/bg2.png'
import bg3 from '../../img/bg3.png'
import vk from '../../img/vk.png'
import inst from '../../img/inst.png'
import fbb from '../../img/fbb.png'
import vkb from '../../img/vkb.png'
import instb from '../../img/instb.png'
import tractor from '../../img/tractor.png'
import arrow from '../../img/arrow.png'
import arrowDown from '../../img/arrowDown.png'
import house from '../../img/house.png'
import park from '../../img/park.png'
import people from '../../img/people.png'
import children from '../../img/children.png'
import dude from '../../img/dude.png'
import dude2 from '../../img/dude2.png'
import forest from '../../img/forest.png'
import camerdude from '../../img/camerdude.png'
import weed from '../../img/weed.png'
import akademia from '../../img/akadimia.png'
import apartaments from '../../img/appartaments.png'
import apartaments1 from '../../img/apartaments1.png'
import apartaments2 from '../../img/apartaments2.png'
import message from '../../img/message.png'
import Shop from '../../img/Shop.png'
import Health from '../../img/Health.png'

import './style.css'

const img = [bg3, bg2, bg1]

const data = [
    {title: 'РЯДОМ — ОЗЕРО И КАПРАЛЬЕВ ПАРК', description: 'В 300 метрах от ЖК «Браун Хаус» располагаются озеро и сквер, где можно отдохнуть, погулять с детьми или заняться спортом. Здесь есть теннисный корт, Летний театр и смотровая площадка. Отличным местом для досуга на свежем воздухе станет обширный Капральев парк. В нем оборудованы площадки для барбекю, дорожки для прогулок и езды на велосипедах. Лесной массив также благоприятно влияет на состояние экологии, поглощая выхлопные газы автомобилей.'},
    {title: 'РАЗВИТАЯ ИНФРАСТРУКТУРА РАЙОНА И НЕВЫСОКАЯ ПЛОТНОСТЬ ЗАСТРОЙКИ', description: 'Дом появится в обжитом районе и будет включен в уже существующий двор. При этом плотность застройки здесь не так высока, как в западной части Мурино, что снижает нагрузку на объекты торговой и социальной инфраструктуры в пешей доступности.'},
    {title: 'БЛАГОУСТРОЙСТВО ПРИДОМОВОЙ ТЕРРИТОРИИ', description: 'С одной стороны двора мы оборудуем открытую автостоянку. С другой — игровую площадку для детей разных возрастов и зоны отдыха. Разработан ландшафтный дизайн, предполагающий высадку газонов и кустарников.'},
    {title: 'РЯДОМ — ОЗЕРО И КАПРАЛЬЕВ ПАРК', description: 'В 300 метрах от ЖК «Браун Хаус» располагаются озеро и сквер, где можно отдохнуть, погулять с детьми или заняться спортом. Здесь есть теннисный корт, Летний театр и смотровая площадка. Отличным местом для досуга на свежем воздухе станет обширный Капральев парк. В нем оборудованы площадки для барбекю, дорожки для прогулок и езды на велосипедах. Лесной массив также благоприятно влияет на состояние экологии, поглощая выхлопные газы автомобилей.'},
    {title: 'РАЗВИТАЯ ИНФРАСТРУКТУРА РАЙОНА И НЕВЫСОКАЯ ПЛОТНОСТЬ ЗАСТРОЙКИ', description: 'Дом появится в обжитом районе и будет включен в уже существующий двор. При этом плотность застройки здесь не так высока, как в западной части Мурино, что снижает нагрузку на объекты торговой и социальной инфраструктуры в пешей доступности.'},
    {title: 'БЛАГОУСТРОЙСТВО ПРИДОМОВОЙ ТЕРРИТОРИИ', description: 'С одной стороны двора мы оборудуем открытую автостоянку. С другой — игровую площадку для детей разных возрастов и зоны отдыха. Разработан ландшафтный дизайн, предполагающий высадку газонов и кустарников.'},
    {title: 'РЯДОМ — ОЗЕРО И КАПРАЛЬЕВ ПАРК', description: 'В 300 метрах от ЖК «Браун Хаус» располагаются озеро и сквер, где можно отдохнуть, погулять с детьми или заняться спортом. Здесь есть теннисный корт, Летний театр и смотровая площадка. Отличным местом для досуга на свежем воздухе станет обширный Капральев парк. В нем оборудованы площадки для барбекю, дорожки для прогулок и езды на велосипедах. Лесной массив также благоприятно влияет на состояние экологии, поглощая выхлопные газы автомобилей.'},
]

const news = [
    {title: 'Подписан договор с ЛенРусСтрой', time: '12 июня 2020', description: "Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это значит, что дом строит не абы кто"},
    {title: 'Подписан договор проектного финансирования с ООО«Сбербанк»', time: '12 июня 2020', description: "Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это значит, что дом строит не абы кто"},
    {title: 'Подписан договор с ЛенРусСтрой', time: '12 июня 2020', description: "Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это значит, что дом строит не абы кто"},
    {title: 'Подписан договор проектного финансирования с ООО«Сбербанк»', time: '12 июня 2020', description: "Они являются генподрядчиком стротельства Браун Хауса. Это имеет значение, так как это значит, что дом строит не абы кто"},

]

const Main = () => {

    const [open, setOpen] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [thereIndex, setThereIndex] = useState(0);

    const openMenu = () => {
        open ? setOpen(false) : setOpen(true)
    }

    const handlerChoseBg = (num) => {
        setActiveIndex(num)
    }

    const handlerNext = () => {
        setSecondIndex((current) => {
            const res = current === data.length - 1 ? 0 : current + 1
            return res
        })
        console.log(secondIndex)
    }

    const handlerBack = () => {
        setSecondIndex((current) => {
            const res = current ===  0 ? data.length - 1 : current - 1
            return res
        })
        console.log(secondIndex)
    }

    const newsNext = () => {
        setThereIndex((current) => {
            const res = current === news.length - 1 ? 0 : current + 1
            return res
        })
        console.log(secondIndex)
    }

    const newsBack = () => {
        setThereIndex((current) => {
            const res = current ===  0 ? news.length - 1 : current - 1
            return res
        })
        console.log(secondIndex)
    }

    const skipDownHandler = () => {
        document.querySelector(".link-top").scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {open ? (
                    <section className='mobile-menu' style={open ? {opacity: 1} : {opacity: 0}}>
                        <section className='container-help'>
                            <section className='mobule-menu-container'>
                                <section className='mobile-menu-header'>
                                    <a href="#"><img className='mobile-menu-logo' src={logoBlack} alt="Braun House Family"/></a>
                                    <section onClick={openMenu} className='mobile-menu-container-close'>
                                        <div className='mobile-menu-close'></div>
                                    </section>
                                </section>
                                <nav className='mobile-menu-nav'>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Квартиры</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Как купить</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Ход строительства</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Документы</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Новости</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Коммерция</a></li>
                                    <li className='mobile-menu-nav_item'><a className='nav-item_a' href="#">Контакты</a></li>
                                </nav>
                                <section className='mobile-menu-footer'>
                                    <a className='mobile-menu-number' href="#">+7 (905) 600-60-06</a>
                                    <nav className='mobile-menu-contact_nav'>
                                        <a className='mobile-menu-contact-nav_a' href="#"><img className='mobile-menu-contact-nav_img' src={vkb} alt="vk"/></a>
                                        <a className='mobile-menu-contact-nav_a' href="#"><img className='mobile-menu-contact-nav_img' src={instb} alt="instagram"/></a>
                                        <a className='mobile-menu-contact-nav_a' href="#"><img className='mobile-menu-contact-nav_img' src={fbb} alt="facebook"/></a>
                                    </nav>
                                    <a className='mobile-menu-footer-top-right-site' href="#">info@brownhouse.ru</a>
                                </section>
                            </section>
                        </section>
                    </section>
            ) : null }
            {activeIndex ? (
                <section className='background' style={{backgroundImage: `url(${img[activeIndex]})`}}>
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
                            <section className='header-contact-container'>
                                <section className='header-contact'>
                                    <nav className='header-contact_nav'>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={vk} alt="vk"/></a>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={inst} alt="instagram"/></a>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={fb} alt="facebook"/></a>
                                    </nav>
                                    <a className='contact-number' href="#">+7 (905) 600-60-06</a>
                                </section>
                                <section onClick={openMenu} className='mobile-menu-btn'>
                                    <div className='mobile-menu-burger'></div>
                                </section>
                            </section>
                        </header>
                        <section className='content'>
                            <section className='stepWork'>
                                <section className='stepWork-container'>
                                    <img className='stepWork-img' src={tractor} alt="tractor"/>
                                    <span className='stepWork-text'>ХОД СТРОИТЕЛЬСТВА</span>
                                </section>
                            </section>
                            <section className='appartments'>
                                <h1 className='appartments-text'>КВАРТИРЫ РЯДОМ <br/> С ПАРКОМ И ОЗЕРОМ <br/> ОТ 2,7 МЛН</h1>
                            </section>
                            <section className='choose'>
                                <section className='choose-container'>
                                    <span className='choose-text'>Всего 96 квартир от 24 — 64м² <br/> Сдача в 4 кв. 2022</span>
                                    <section className='choose-link'>
                                        <img className='choose-link-img' src={arrow} alt="arrow"/>
                                        <span className='choose-link-text'>Выбрать квартиру</span>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className='down'>
                            <section className='arrowDown'>
                                <img className='arrowDown-img' onClick={() => skipDownHandler()} src={arrowDown} alt="Стрелка вниз"/>
                            </section>
                            <section className='slider-numbers'>
                                <section className='slider-numbers-container'>
                                    <span className='slider-number-span'>{activeIndex == 0 ? '01' : activeIndex == 1 ? '02' : '03'} / 03</span>
                                </section>
                            </section>
                            <section className='slider-pin'>
                                <li onClick={() => handlerChoseBg(0)} className={`slider-pin-item ${activeIndex == 0 ? 'slider-pin-item_active' : ''}`}></li>
                                <li onClick={() => handlerChoseBg(1)} className={`slider-pin-item ${activeIndex == 1 ? 'slider-pin-item_active' : ''}`}></li>
                                <li onClick={() => handlerChoseBg(2)} className={`slider-pin-item ${activeIndex == 2 ? 'slider-pin-item_active' : ''}`}></li>
                            </section>
                        </section>
                    </section>
                </section>
            ) : (
                <section className='background' style={{backgroundImage: `url(${img[0]})`}}>
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
                            <section className='header-contact-container'>
                                <section className='header-contact'>
                                    <nav className='header-contact_nav'>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={vk} alt="vk"/></a>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={inst} alt="instagram"/></a>
                                        <a className='contact-nav_a' href="#"><img className='contact-nav_img' src={fb} alt="facebook"/></a>
                                    </nav>
                                    <a className='contact-number' href="#">+7 (905) 600-60-06</a>
                                </section>
                                <section onClick={openMenu} className='mobile-menu-btn'>
                                    <div className='mobile-menu-burger'></div>
                                </section>
                            </section>
                        </header>
                        <section className='content'>
                            <section className='stepWork'>
                                <section className='stepWork-container'>
                                    <img className='stepWork-img' src={tractor} alt="tractor"/>
                                    <span className='stepWork-text'>ХОД СТРОИТЕЛЬСТВА</span>
                                </section>
                            </section>
                            <section className='appartments'>
                                <h1 className='appartments-text'>КВАРТИРЫ РЯДОМ <br/> С ПАРКОМ И ОЗЕРОМ <br/> ОТ 2,7 МЛН</h1>
                            </section>
                            <section className='choose'>
                                <section className='choose-container'>
                                    <span className='choose-text'>Всего 96 квартир от 24 — 64м² <br/> Сдача в 4 кв. 2022</span>
                                    <section className='choose-link'>
                                        <img className='choose-link-img' src={arrow} alt="arrow"/>
                                        <span className='choose-link-text'>Выбрать квартиру</span>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className='down'>
                            <section className='arrowDown'>
                                <img className='arrowDown-img' onClick={() => skipDownHandler()} src={arrowDown} alt="Стрелка вниз"/>
                            </section>
                            <section className='slider-numbers'>
                                <section className='slider-numbers-container'>
                                    <span className='slider-number-span'>01 / 03</span>
                                </section>
                            </section>
                            <section className='slider-pin'>
                                <li onClick={() => handlerChoseBg(0)} className={`slider-pin-item ${activeIndex == 0 ? 'slider-pin-item_active' : ''}`}></li>
                                <li onClick={() => handlerChoseBg(1)} className={`slider-pin-item ${activeIndex == 1 ? 'slider-pin-item_active' : ''}`}></li>
                                <li onClick={() => handlerChoseBg(2)} className={`slider-pin-item ${activeIndex == 2 ? 'slider-pin-item_active' : ''}`}></li>
                            </section>
                        </section>
                    </section>
                </section>
            )}

            <section className='container-help'>
                <section className='container link-top'>
                    <section className='info-block'>
                        <section className='info-block_container'>
                            <section className='info-first'>
                                <img className='info-first_img' src={house} alt="Дом для комфортной жизни"/>
                                <h3 className='info-first_title'>ДОМ <br/> ДЛЯ КОМФОРТНОЙ <br/> ЖИЗНИ</h3>
                            </section>
                            <section className='info-second'>
                                <p className='info-second_text'>Браун Хаус Family — семейный жилой комплекс повышенной комфортности. Созданный ГК «Академия» проект — идеальный баланс трех составляющих удобного жилого пространства. <br/>
                                    Обжитая зеленая локация с озером, парком и необходимой инфраструктурой. Здание с современным оборудованием и безопасный закрытый двор. Плюс — просторные планировки с кухнями-гостиными.</p>
                                <img className='info-second_img' src={park} alt="Дом для комфортной жизни"/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            {secondIndex ? (
                <section className='container-help'>
                    <section className='container'>
                        <section className='seven-problems-block'>
                            <section className='seven-problems'>
                                <h4 className='right-block_seven'>7</h4>
                                <h4 className='right-block_title'>ПРИЧИН КУПИТЬ <br/> ЗДЕСЬ КВАРТИРУ</h4>
                            </section>
                            <section className='slider-block'>
                                <section className='left-block'>
                                    <h4 className='left-block_title'>{data[secondIndex].title}</h4>
                                    <p className='left-block_paragraph'>{data[secondIndex].description}</p>
                                    <section className='left-block-slider-buttons'>
                                        <img onClick={() => handlerBack()} className='left-block-slider-buttons-left slider-btn' src={arrow} alt="arrow"/>
                                        <img onClick={() => handlerNext()} className='left-block-slider-buttons-right slider-btn' src={arrow} alt="arrow"/>
                                    </section>
                                    <section className='left-block-slider-count'>
                                        <span className='left-block-slider-count_text'>{`0${secondIndex + 1}`} / 07</span>
                                    </section>
                                </section>
                                <section className='right-block'>
                                    <section className='right-block-slider' style={{left: `-${secondIndex * (380 + (437 - 380) * ((window.screen.availWidth - 1280) / (1920 - 1280)))}px`}}>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            ) : (
                <section className='container-help'>
                    <section className='container'>
                        <section className='seven-problems-block'>
                            <section className='seven-problems'>
                                <h4 className='right-block_seven'>7</h4>
                                <h4 className='right-block_title'>ПРИЧИН КУПИТЬ <br/> ЗДЕСЬ КВАРТИРУ</h4>
                            </section>
                            <section className='slider-block'>
                                <section className='left-block'>
                                    <h4 className='left-block_title'>{data[0].title}</h4>
                                    <p className='left-block_paragraph'>{data[0].description}</p>
                                    <section className='left-block-slider-buttons'>
                                        <img onClick={() => handlerBack()} className='left-block-slider-buttons-left slider-btn' src={arrow} alt="arrow"/>
                                        <img onClick={() => handlerNext()} className='left-block-slider-buttons-right slider-btn' src={arrow} alt="arrow"/>
                                    </section>
                                    <section className='left-block-slider-count'>
                                        <span className='left-block-slider-count_text'>{`0${secondIndex + 1}`} / 07</span>
                                    </section>
                                </section>
                                <section className='right-block'>
                                    <section className='right-block-slider' style={{left: `-${secondIndex * (380 + (437 - 380) * ((window.screen.availWidth - 1280) / (1920 - 1280)))}px`}}>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={people} alt="people"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={children} alt="children"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                        <section className='right-block-slider-container'>
                                            <img className='right-block-slider-item' src={weed} alt="weed"/>
                                            <section className='right-block-slider-item-info'>
                                                <h4 className='right-block-title'>{data[secondIndex].title}</h4>
                                                <p className='right-block_paragraph'>{data[secondIndex].description}</p>
                                                <a className='right-block_link' href="#">ПОДРОБНЕЕ</a>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            )

            }

            <section className='container-help'>
                <section className='container'>
                    <section className='developer'>
                        <section className='developer-left'>
                            <img className='developer-left_img' src={akademia} alt="akademia"/>
                        </section>
                        <section className='developer-right'>
                            <h4 className='developer-right_title'>НАДЕЖНЫЙ ЗАСТРОЙЩИК</h4>
                            <section className='developer-right-info'>
                                <p className='developer-right-info-text'>ГК «Академия» строит жилье и коммерческую недвижимость с 2015 года. Компания выполняет полный цикл работ: от разработки концепции до управления готовым объектом.</p>
                                <section className='developer-right-container'>
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
            </section>
            <section id='map' className='map-background'>
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
                                <img onClick={() => newsBack()} className='news-header-tool-buttons-left' src={arrow} alt="arrow"/>
                                <img onClick={() => newsNext()} className='news-header-tool-buttons-right' src={arrow} alt="arrow"/>
                            </section>
                        </section>
                        <section className='news-info-container'>
                            <section className='news-info' style={{left: `-${thereIndex * (354 + (582 - 390) * ((window.screen.availWidth - 375) / (1920 - 375)))}px`}}>
                                {news ? news.map((i, num) => {
                                    return (
                                        <section key={num} className='news-info-item'>
                                            <time className='news-info-time'>{i.time}</time>
                                            <h5 className='news-info-item-title'>{i.title}</h5>
                                            <p className='news-info-item-description'>{i.description}</p>
                                        </section>
                                    )
                                }) : null

                                }
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
                        <section className='apartments-info-container'>
                            <section className='apartments-info'>
                                <section className='apartments-info-item'>
                                    <section className='apartments-info-container-img'>
                                        <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                    </section>                                <h4 className='apartments-info-price'>2 739 000 руб.</h4>
                                    <p className='apartments-info-apart'>1 комн. 32.4 м² <span className='apartments-info-apart_roof'>- Этаж 3/9</span></p>
                                </section>
                                <section className='apartments-info-item'>
                                    <section className='apartments-info-container-img'>
                                        <img className='apartments-info-img' src={apartaments1} alt="appartaments"/>
                                    </section>
                                    <h4 className='apartments-info-price'>2 769 000 руб.</h4>
                                    <p className='apartments-info-apart'>1 комн. 33.4 м² <span className='apartments-info-apart_roof'>- Этаж 5/9</span></p>
                                </section>
                                <section className='apartments-info-item'>
                                    <section className='apartments-info-container-img'>
                                        <img className='apartments-info-img' src={apartaments2} alt="appartaments"/>
                                    </section>                                <h4 className='apartments-info-price'>2 719 000 руб.</h4>
                                    <p className='apartments-info-apart'>1 комн. 31.4 м² <span className='apartments-info-apart_roof'>- Этаж 2/9</span></p>
                                </section>
                                <section className='apartments-info-item'>
                                    <section className='apartments-info-container-img'>
                                        <img className='apartments-info-img' src={apartaments} alt="appartaments"/>
                                    </section>                                <h4 className='apartments-info-price'>2 799 000 руб.</h4>
                                    <p className='apartments-info-apart'>1 комн. 32.4 м² <span className='apartments-info-apart_roof'>- Этаж 7/9</span></p>
                                </section>
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
                            <section className='footer-top-right-container'>
                                <a className='footer-top-right-number' href="#">+7 (812) 429-56-73</a>
                                <a className='footer-top-right-site' href="#">info@brownhouse.ru</a>
                            </section>
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
                        <span className='footer-map-last-info-text'>Информация, предоставленная на сайте, не является публичной офертой. Все цены действительны на 25 июня 2021 г. при условии единовременной оплаты. Элементы благоустройства, иллюстрации и описания дизайн-проектов квартир приведены для сведения, являются примером возможной организации жилого пространства. Представленные сведения носят исключительно информационный характер.</span>
                    </section>
                </section>
            </footer>
        </>
    );
};

export default Main;
