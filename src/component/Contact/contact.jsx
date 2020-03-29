import React, { Component } from 'react';
import './contact.css';
import IMAGES from '../../../src/config/images';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <img className="wow zoomIn img-fluid contact-img" src={IMAGES.contact} alt="" />
                        <div className="col-lg-6">
                            <h2 className="wow fadeInDown">Contact Us</h2>
                            <p className="wow slideInLeft">Feel like contacting us? Submit your queries here <br />
                                and we will get back to you as soon as possible</p>
                            <div className="div xaxa wow pulse">
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="m-0 wow" htmlFor="">Name</label>
                                            <input className="inputan" type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="m-0 wow" htmlFor="">Surname</label>
                                            <input type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="m-0 wow" htmlFor="">Email Address</label>
                                            <input className="inputan" type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="m-0 wow" htmlFor="">Telephone</label>
                                            <input className="inputan" type="text" className="form-control" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 ">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="m-0 wow" htmlFor="">Your Message</label>
                                            <input className="inputan" type="text" className="form-control" name="" id="" />
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