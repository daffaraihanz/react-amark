import React, { Component } from 'react';
import './content.css';
import IMAGES from '../../config/images';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeWidth: true
        }
    }
    render() {
        const { haha = 55, dot, ulDisplay, moreDisplay, posLeft, posRight,posTop } = this.props;
        return (
            <section className="content">
                <div className="d-flex data-wrapper" style={{ width: haha + '%' }}>
                    <h2 className="primary-color data wow fadeInDown">{this.props.title}</h2>
                    <div className="dot wow bounce" style={{ display: dot, left: posLeft, right: posRight, top:posTop }}></div>
                </div>
                <p className="mt-5 wow fadeInLeft">{this.props.desc}</p>
                <div style={{ display: ulDisplay }}>
                    <p className="mt-5 mb-2 wow slideInUp">What can we do for you?</p>
                    <ul className="wow slideInUp">
                        <li className="d-flex align-items-center mb-2">
                            <div className="lala mr-3"></div>
                            <p>
                                Lorem ipsum
                            </p>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <div className="lala mr-3"></div>
                            <p>
                                Lorem ipsum
                            </p>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <div className="lala mr-3"></div>
                            <p>
                                Lorem ipsum
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="mb-3"></div>
                <div className="wow slideInUp align-items-center d-flex">
                    <a className="more mr-2" style={{ display: moreDisplay }} href="#">More</a>
                    <img className="arrLeft" src={IMAGES.arrLeft} alt=""/>
                </div>
            </section>
        )
    }
}

export default Content;