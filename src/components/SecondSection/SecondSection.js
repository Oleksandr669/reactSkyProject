import './SecondSection.css'
import textArray from './textArray'
import React, { useState } from 'react'

const SecondSection = () => {
    let [text, setText] = useState(textArray[0])
    return (
        <>
            <div className="offer-blok">
                <div className="container__flex">
                    <div className="thre-blok ">
                        <div className="thre-blok__colum ">
                            <div className="offer-item">
                                <div className="offer__h2">
                                    See our offer for upcoming season 20/21
                                </div>

                                <span>
                                    Duis dignissim mi ut laoreet mollis. Nunc id
                                    tellus finibus, eleifend mi vel, maximus
                                    justo. Maecenas mi tortor, pellentesque.
                                </span>
                                <div>
                                    <button className="offer__button">
                                        <span>Lear more</span>{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="thre-blok__colum  ">
                            <div className="offer__list-blok">
                                <div className="offer__list">
                                    <ul className="list">
                                        <li
                                            onClick={() =>
                                                setText((text = textArray[0]))
                                            }
                                        >
                                            Guest rooms
                                        </li>

                                        <li
                                            onClick={() =>
                                                setText((text = textArray[1]))
                                            }
                                        >
                                            Breakfast/food
                                        </li>
                                        <li
                                            onClick={() =>
                                                setText((text = textArray[2]))
                                            }
                                        >
                                            Sports
                                        </li>
                                    </ul>
                                </div>

                                <div className="offer__info">
                                    <div className="info-text">{text}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="gorisont"
                style={{
                    backgroundImage: `url("./images/gorizont.png")`,
                }}
            >
                {' '}
            </div>
        </>
    )
}

export default SecondSection
