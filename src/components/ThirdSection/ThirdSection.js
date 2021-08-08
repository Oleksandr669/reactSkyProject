import { Container } from '@material-ui/core'
import React from 'react'
import './ThirdSection.css'

const ThirdSection = () => {
    return (
        <>
            <div
                className="fullScreanSection"
                style={{
                    backgroundImage: `url("./images/section4.jpg")`,
                }}
            >
                <Container>
                    <div className="flexBox">
                        <div className="fistFlexItem">
                            <div className="firstBox">
                                <h2>
                                    Enjoy winter sports and staying in our
                                    hotels
                                </h2>
                                <div className="spanBox">
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla mauris dolor,
                                        gravida a varius blandit, auctor eget
                                        purus.
                                    </span>
                                </div>
                                <div>
                                    <button className="button">
                                        {' '}
                                        <span>Lear more</span>{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="secondFflexItem">
                            <div className="flexItem-card">
                                <div className="firstCard">
                                    <div className="card-images">
                                        <img src="./images/skinni.png" />
                                    </div>
                                    <h3>Skiing</h3>
                                    <span>Duis dignissim laoreet mollis</span>
                                </div>
                                <div className="line">
                                    ____________________________________
                                </div>
                                <div className="secondCard">
                                    <div className="card-images">
                                        <img src="./images/snowboard.png" />
                                    </div>
                                    <h3>Snowboard</h3>
                                    <span>Fusce ut velit laoreet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="container__flex">
                        <div className="full-screen__title">
                            <h2>
                                Luxury Ski <br /> Resort
                            </h2>
                        </div>
                        <div className="full__screen-info">
                            <p className="title">Ski slope</p>
                            <p className="miles">5.8 miles</p>
                            <div className="full__screen-text">
                                <p>
                                    Sed ultrices nisl velit, eu ornare est
                                    ullamcorper a. Nunc quis nibh magna. Proin
                                    risus erat, fringilla vel purus sit amet,
                                    mattis porta enim. Duis fermentum faucibus
                                    est, sed vehicula velit sodales vitae.
                                </p>
                            </div>
                        </div>
                        <div className="button-box">
                            <button className="full__screen-button">
                                {' '}
                                <span>Lear more</span>{' '}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ThirdSection
