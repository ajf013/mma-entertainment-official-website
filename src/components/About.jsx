import React from 'react';

const About = () => {
    return (
        <section className="about section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-12">
                        <h2 className="mb-4">About <u className="text-info">Us</u></h2>
                    </div>

                    <div className="col-lg-6 col-12">
                        <h3 className="mb-3">Welome to our official website of MMA Entertainment.</h3>
                        <p>We've been entertaining people since 2017.</p>
                        <a className="custom-btn custom-border-btn btn custom-link mt-3 me-3" href="#section_3">Our team</a>
                        <a className="custom-btn btn custom-link mt-3" href="#section_4">Our work</a>
                    </div>

                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                        <p>This is our Official Website and we do all the services listed below in our website. You can use our chatbot to book a slot and Please tell your friends about <a href="https://www.youtube.com/c/MMAEntertainment" target="_blank"><b>MMA Entertainment.</b></a></p>
                        <div className="mma-intro">
                            <video loop autoPlay muted style={{ width: '100%' }}>
                                <source src="videos/mmaent-intro.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
