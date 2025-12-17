import React from 'react';

const Highlights = () => {
    return (
        <section className="highlight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="highlight-thumb">
                            <img src="images/highlight/EGO New Thumbnail.jpg" className="highlight-image img-fluid" alt="" />
                            <div className="highlight-info">
                                <h3 className="highlight-title">Best of MMA Entertainment</h3>
                                <a href="https://www.youtube.com/playlist?list=PLANeCS48WeFmwlh7woqlO5D_gRdB1NCER" target="_blank" className="bi-youtube highlight-icon"></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="highlight-thumb">
                            <img src="images/highlight/MMA Logo without Border.png" className="highlight-image img-fluid" alt="" />
                            <div className="highlight-info">
                                <h3 className="highlight-title">MMA Short Films</h3>
                                <a href="https://www.youtube.com/playlist?list=PLANeCS48WeFlQLNGeji06YnbSBak5XUEL" target="_blank" className="bi-youtube highlight-icon"></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="highlight-thumb">
                            <img src="images/highlight/Trip Thumbnail (1).jpg" className="highlight-image img-fluid" alt="" />
                            <div className="highlight-info">
                                <h3 className="highlight-title">Collection of Attrocities</h3>
                                <a href="https://www.youtube.com/playlist?list=PLANeCS48WeFmMZPKzJjhhLTt-jxrJPC0D" target="_blank" className="bi-youtube highlight-icon"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
