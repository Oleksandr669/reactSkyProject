import React from 'react'
import './SecondSection.css'

const SecondSection = () => {
    return (
        <div className="offer-blok">
            <div className="container__flex">
                <div className="thre-blok">
                    <div className="thre-blok__colum">
                        <div className="offer-item">
                            <div className="offer__h2">
                                See our offer for upcoming season 20/21
                            </div>

                            <span>
                                Duis dignissim mi ut laoreet mollis. Nunc id
                                tellus finibus, eleifend mi vel, maximus justo.
                                Maecenas mi tortor, pellentesque.
                            </span>
                            <div>
                                <button className="offer__button">
                                    <span>Lear more</span>{' '}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="thre-blok__colum">
                        <div className="offer__list-blok">
                            <div className="offer__list">
                                <ul className="list">
                                    <li>Guest rooms</li>

                                    <li>Breakfast/food</li>
                                    <li> Sports</li>
                                </ul>
                            </div>

                            <div className="offer__info">
                                <div className="info-text">
                                    Lorem ipsum dolor sit amet enim. Etiam
                                    ullamcorper. Suspendisse a pellentesque dui,
                                    non felis. Maecenas malesuada elit lectus
                                    felis, malesuada ultricies. Donec vestibulum
                                    justo a diam ultricies pellentesque. Quisque
                                    mattis diam vel lacus tincidunt elementum.
                                    Sed vitae adipiscing turpis. Aenean ligula
                                    nibh, molestie id viverra a, dapibus at
                                    dolor. In iaculis viverra neque, ac eleifend
                                    ante lobortis id. In viverra ipsum ac eros
                                    tristique dignissim. Donec aliquam velit
                                    vitae mi dictum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection
