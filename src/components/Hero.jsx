import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="section_1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12 m-auto">
                        <div className="hero-text" style={{ top: '30%' }}>
                            <h1 className="text-white mb-4"><u className="text-info">MMA</u> Entertainment Tamil</h1>
                            <a href="#section_2" className="custom-link bi-arrow-down arrow-icon"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-wrap">
                <video autoPlay loop muted className="custom-video" poster="">
                    <source src="videos/MMA intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default Hero;
