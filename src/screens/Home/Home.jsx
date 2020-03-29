import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from '../../component/Navigasi/navigasi';
import Jumbotron from '../../component/Jumbotron/jumbotron';
import How from '../../component/How/how';
import Article from '../../component/Article/article';
import Contact from '../../component/Contact/contact';
import Footer from '../../component/Footer/footer';

class Home extends Component {
    render() {
        return (
            <section>
                <Navigasi />
                <Jumbotron />
                <How />
                <Article />
                <Contact />
                <Footer />
            </section>
        );
    }
}

export default Home;