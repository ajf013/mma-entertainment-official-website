import React from 'react';

const Team = () => {
    return (
        <section className="speakers section-padding" id="section_3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="speakers-text-info">
                            <h2 className="mb-4">Our <u className="text-info">team</u></h2>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="speakers-thumb">
                            <img src="images/avatar/vishnu.jpg" className="img-fluid speakers-image" alt="" />
                            <div className="speakers-info">
                                <h5 className="speakers-title mb-0">Vishnu</h5>
                                <p className="speakers-text mb-0">CEO</p>
                                <ul className="social-icon">
                                    <li><a href="https://www.instagram.com/jesh143forever/" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                    <li><a href="https://twitter.com/mma_ent_tamil" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                    <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="speakers-thumb speakers-thumb-small">
                                    <img src="images/avatar/gino.jpg" className="img-fluid speakers-image" alt="" />
                                    <div className="speakers-info">
                                        <h5 className="speakers-title mb-0">Prabhu Suriya</h5>
                                        <p className="speakers-text mb-0">Editor</p>
                                        <ul className="social-icon">
                                            <li><a href="https://www.instagram.com/prabusuriya.s.r/" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                            <li><a href="https://twitter.com/mma_ent_tamil" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                            <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="speakers-thumb speakers-thumb-small">
                                    <img src="images/avatar/jhones.jpg" className="img-fluid speakers-image" alt="" />
                                    <div className="speakers-info">
                                        <h5 className="speakers-title mb-0">Jhones</h5>
                                        <p className="speakers-text mb-0">Director</p>
                                        <ul className="social-icon">
                                            <li><a href="https://www.instagram.com/mr_.j.h.o.n.e.s._/" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                            <li><a href="https://twitter.com/mma_ent_tamil" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                            <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="speakers-thumb speakers-thumb-small">
                                    <img src="images/avatar/francis.jpg" className="img-fluid speakers-image" alt="" />
                                    <div className="speakers-info">
                                        <h5 className="speakers-title mb-0">F Cruz</h5>
                                        <p className="speakers-text mb-0">Client Manager</p>
                                        <ul className="social-icon">
                                            <li><a href="https://www.instagram.com/fcruz_013/" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                            <li><a href="https://twitter.com/Itsme_Ajf013" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                            <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                                            <li><a href="https://www.linkedin.com/in/ajf013-francis-cruz/" target="_blank" className="social-icon-link bi-linkedin"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="speakers-thumb speakers-thumb-small">
                                    <img src="images/avatar/sithar.jpg" className="img-fluid speakers-image" alt="" />
                                    <div className="speakers-info">
                                        <h5 className="speakers-title mb-0">Infant (Sithar)</h5>
                                        <p className="speakers-text mb-0">Asst.Cinematographer</p>
                                        <ul className="social-icon">
                                            <li><a href="https://www.instagram.com/infantfranklin888/?next=%2F" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                            <li><a href="https://twitter.com/mma_ent_tamil" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                            <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .speakers-info {
                        opacity: 1 !important;
                        visibility: visible !important;
                    }
                    
                    .social-icon {
                        opacity: 1 !important;
                        visibility: visible !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Team;
