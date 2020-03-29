import React, { Component } from 'react';
import IMAGES from '../../config/images';
import './navigasi.css';
import '../../assets/css/styles.css';

class Navigasi extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <img className="wow fadeInDown" src={IMAGES.logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item hvr wow zoomIn">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item hvr wow zoomIn">
                                <a class="nav-link" href="#">Service</a>
                            </li>
                            <li class="nav-item hvr wow zoomIn">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item hvr wow zoomIn">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item hvr wow zoomIn">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="wow zoomIn">
                            <a href="#" className="nav-link get-started">Get Started</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigasi;