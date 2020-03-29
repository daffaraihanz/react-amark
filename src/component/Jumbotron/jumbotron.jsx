import React, { Component } from 'react';
import IMAGES from '../../config/images';
import './jumbotron.css';
import '../../assets/css/styles.css';
import WOW from 'wowjs'

class Jumbotron extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="jumbotronz bg-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 desc">
                            <h1 className="primary-color wow fadeInLeft">Digital Agency <br /> & Marketing</h1>
                            <p className="wow zoomIn">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus et neque at ante mattis sodales.</p>
                            <div className="wow pulse">
                                <a className="learn-more" href="#">Learn more</a>
                                <img className="dots" src={IMAGES.dots} alt=""/>
                            </div>
                        </div>
                        <img className="headline img-fluid wow slideInRight" src={IMAGES.headlineImg} alt="" />
                        <div className="lala wow zoomIn"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;