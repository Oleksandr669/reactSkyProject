import React from 'react'
import './Explore.css'

import CartsListItem from '../../components/Carts/CartsListItem'

const Explore = () => {
    return (
        <>
            <div className="backGround-container ">
                <div className="container ">
                    <div className="explore-textBox">
                        <div className="textBox-itemOne">
                            <div className="itemOne">
                                <h2>Duis dignissim mi ut laoreet mollis</h2>
                                <span className="spanMargin">
                                    Ut ultricies imperdiet sodales. Aliquam
                                    fringilla aliquam ex sit amet elementum.
                                    Proin bibendum sollicitudin feugiat.
                                    Curabitur ut egestas justo, vitae molestie
                                    ante. Integer magna purus, commodo in diam
                                    nec, pretium auctor sapien.
                                </span>
                                <button className="offer__button">
                                    <span>Lear more</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="textBox-itemTwo"
                            style={{
                                backgroundImage: `url("./images/textIcon.jpg")`,
                            }}
                        >
                            <div className="itemTwo">
                                <h4>Vivamus diam</h4>
                                <span className="itemTwo-span">
                                    In condimentum maximus tristique. Maecenas
                                    non laoreet odio. Fusce lobortis porttitor
                                    purus, vel vestibulum. <br /> Sed mollis
                                    consequat eleifend. Aliquam consectetur.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CartsListItem />
                </div>
            </div>
        </>
    )
}

export default Explore
