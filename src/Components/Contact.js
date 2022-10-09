import React from 'react';
import banner2 from '../images/banner2.png';

const Contact = () => {
    return (
        <>
            <section
                className="u-align-center u-clearfix u-image u-shading u-section-1"
                id="carousel_e2f7"
                data-image-width={3000}
                data-image-height={2136}
            >
                <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                    <section id="contact">
                        <div className="contact-box">
                            <div className="contact-links">
                                <h2>CONTACT</h2>
                                <div className="links">
                                    <div className="link">
                                        <a>
                                            <img
                                                src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                                                alt="linkedin"
                                            />
                                        </a>
                                    </div>
                                    <div className="link">
                                        <a>
                                            <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
                                        </a>
                                    </div>
                                    <div className="link">
                                        <a>
                                            <img
                                                src="https://i.postimg.cc/W4Znvrry/codepen.png"
                                                alt="codepen"
                                            />
                                        </a>
                                    </div>
                                    <div className="link">
                                        <a>
                                            <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-wrapper">
                                <form>
                                    <div className="form-item">
                                        <input type="text" name="sender" required="" />
                                        <label>Name:</label>
                                    </div>
                                    <div className="form-item">
                                        <input type="text" name="email" required="" />
                                        <label>Email:</label>
                                    </div>
                                    <div className="form-item">
                                        <textarea className="" name="message" required="" defaultValue='' />
                                        <label>Message:</label>
                                    </div>
                                    <button className="submit-btn">Send</button>
                                </form>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </>
    );
}

export default Contact;