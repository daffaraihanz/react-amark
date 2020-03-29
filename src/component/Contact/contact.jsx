import React, { Component } from 'react';
import './contact.css';
import IMAGES from '../../../src/config/images';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="container nena">
                    <div className="row  justify-content-end">
                    <div className="col" style={{zIndex: 99}}>
                        <h2 className="wow fadeInDown">Contact Us</h2>
                        <p className="wow slideInLeft">Feel like contacting us? Submit your queries here <br />
                            and we will get back to you as soon as possible</p>
                    </div>
                        <img className="wow slideInUp img-fluid contact-img" src={IMAGES.contact} alt="" />
                        <div className="col-lg-6">
                            <div className="div xaxa">
                                <div className="row mb-4">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group wow slideInLeft">
                                            <label className="m-0 wow" htmlFor="">Name</label>
                                            <input style={{borderRadius: 10}} className="inputan " type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group wow slideInLeft">
                                            <label className="m-0 wow" htmlFor="">Surname</label>
                                            <input style={{borderRadius: 10}} type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group wow slideInLeft">
                                            <label className="m-0 wow" htmlFor="">Email Address</label>
                                            <input style={{borderRadius: 10}} className="inputan " type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group wow slideInLeft">
                                            <label className="m-0 wow" htmlFor="">Telephone</label>
                                            <input style={{borderRadius: 10}} className="inputan " type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group wow slideInLeft">
                                            <label className="m-0 wow" htmlFor="">Your Message</label>
                                            <textarea style={{borderRadius: 10}} class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a className="sumbit" href="#">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;