import React, { Component } from 'react';
import './article.css';
import IMAGES from '../../config/images';
import Content from '../Content/content';

class Article extends Component {
    render() {
        return (
            <section className="article">
                <div className="container">
                    <div className="row align-items-center mb-6">
                        <div className="col-lg-6">
                            <img src={IMAGES.art1} alt="" className="img-fluid wow zoomIn" />
                        </div>
                        <div className="col-lg-4">
                            <Content posRight="0" posTop="-10px"  ulDisplay="none" title="Data Privacy" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem." />
                        </div>
                    </div>
                    <div className="row align-items-center img-down mb-6 justify-content-between">
                        <div className="col-lg-4">
                            <Content   ulDisplay="none" dot="none" title="User Friendly" panjang="214" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem." />
                        </div>
                        <div className="col-lg-6 fafa">
                            {/* <div className="bg-up"></div> */}
                            <img src={IMAGES.art2} alt="" className="img-fluid wow zoomIn" />
                            {/* <div className="bg-down wow fadeInLeftBig"></div> */}
                        </div>
                    </div>
                    <div className="row align-items-center mb-6">
                        <div className="col-lg-6 fafa">
                            <img src={IMAGES.art3} alt="" className="img-fluid wow zoomIn" />
                            <div className="bg-down zoomIn"></div>
                        </div>
                        <div className="col-lg-4">
                            <Content  ulDisplay="none" dot="none" haha="100" title="Analytics Security" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem." />
                        </div>
                    </div>
                    <div className="row align-items-center img-down mb-6 justify-content-between">
                        <div className="col-lg-4">
                            <Content dot="block" posRight="0" posTop="-15px" ulDisplay="none" haha="95" title="Multi Platform Support" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem." />
                        </div>
                        <div className="col-lg-6 fafa">
                            <img src={IMAGES.art4} alt="" className="img-fluid wow zoomIn" />
                        </div>
                    </div>
                    <div className="row align-items-center mb-6">
                        <div className="col-lg-6 fafa">
                            <img src={IMAGES.art5} alt="" className="img-fluid wow zoomIn" />
                        </div>
                        <div className="col-lg-4">
                            <Content dot="block" posLeft="-10px" posTop="-15px" ulDisplay="none" haha="95" title="Cloud Service" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem." />
                        </div>
                    </div>
                    <div className="row align-items-center img-down justify-content-between mb-6">
                        <div className="col-lg-4">
                            <Content posLeft="-10px" posTop="-15px"  dot="block" postLeft="0" ulDisplay="none" haha="95" title="Iterate at Speed" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque at ante mattis sodales. Pellentesque euismod, felis vitae maximus venenatis, ipsum turpis ultricies lorem, a commodo magna felis rhoncus sem. Donec feugiat dui at tristique faucibus. Nulla congue iaculis velit sed fringilla." />
                        </div>
                        <div className="col-lg-6 fafa">
                            <img src={IMAGES.art6} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Article;