import React, { useState, useEffect } from 'react';

const Work = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const tabs = [
        { title: 'Event Shoot', id: 'nav-DayOne', content: '"Wedding photography is one of the hardest damn jobs in photography."', img: 'images/avatar/menu1.jpg' },
        { title: 'AD Shoot', id: 'nav-DayTwo', content: '"Advertising is the modern substitute for argument, its function is to make the worse appear the better."', img: 'images/avatar/menu2.jpg' },
        { title: 'Photography', id: 'nav-DayThree', content: '“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever. It remembers little things, long after you have forgotten everything.”', img: 'images/avatar/menu3.jpg' },
        { title: 'Editing', id: 'nav-DayFour', content: '“An editor is successful when the audience enjoys the story and forgets about the juxtapositions of the shots. If the audience is aware of the editing, the editor has failed.”', img: 'images/avatar/menu4.jpg' },
        { title: 'DI & Coloring', id: 'nav-DayFive', content: '"Shadow is a colour as light is, but less brilliant; light and shadow are only the relation of two tones."', img: 'images/avatar/menu5.jpg' },
        { title: 'Sound Engineering', id: 'nav-DaySix', content: '“A great sound system will only get you as far as the engineers’ ability to mix.”', img: 'images/avatar/menu6.jpg' },
    ];

    // Auto-rotation effect
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % tabs.length);
            }, 5000); // 5 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused, tabs.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsPaused(true); // Pause auto-rotation when user clicks

        // Resume auto-rotation after 10 seconds of inactivity
        setTimeout(() => setIsPaused(false), 10000);
    };

    return (
        <section className="schedule section-padding" id="section_4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <h2 className="mb-5 text-center">Our <u className="text-info">Work</u></h2>

                        <nav>
                            <div className="nav nav-tabs align-items-baseline" id="nav-tab" role="tablist">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab.title}
                                        className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                        type="button"
                                        style={{
                                            transition: 'all 0.3s ease',
                                            transform: activeTab === index ? 'scale(1.05)' : 'scale(1)',
                                        }}
                                    >
                                        <h3><span>{tab.title}</span></h3>
                                    </button>
                                ))}
                            </div>
                        </nav>

                        <div
                            className="tab-content mt-5"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {tabs.map((tab, index) => (
                                <div
                                    key={tab.title}
                                    className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                                    style={{
                                        animation: activeTab === index ? 'fadeInSlide 0.6s ease-in-out' : 'none',
                                    }}
                                >
                                    <div className="row border-bottom pb-5 mb-5">
                                        <div className="col-lg-4 col-12">
                                            <img
                                                src={tab.img}
                                                className="schedule-image img-fluid"
                                                alt={tab.title}
                                                style={{
                                                    animation: activeTab === index ? 'zoomIn 0.6s ease-in-out' : 'none',
                                                }}
                                            />
                                        </div>

                                        <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                                            <p style={{
                                                animation: activeTab === index ? 'fadeInUp 0.6s ease-in-out 0.2s both' : 'none',
                                            }}>
                                                {tab.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInSlide {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Work;
