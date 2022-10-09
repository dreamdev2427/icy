import React, { useEffect } from 'react';

// Import images
import banner2 from '../images/banner2.png';
// import components
import HomeTab from './HomeTab';
import TradeTab from './TradeTab';
import FarmsTab from './FarmsTab';
import StackingTab from './StakingTabs';

const Presentation = () => {


    useEffect(() => {
        const tabs = document.querySelectorAll(".tab");
        const tabContent = document.querySelectorAll(".tab-content");

        let tabNo = 0;
        let contentNo = 0;

        tabs.forEach((tab) => {
            tab.dataset.id = tabNo;
            tabNo++;
            tab.addEventListener("click", function () {
                tabs.forEach((tab) => {
                    tab.classList.remove("active");
                    tab.classList.add("non-active");
                });
                this.classList.remove("non-active");
                this.classList.add("active");
                tabContent.forEach((content) => {
                    content.classList.add("hidden");
                    if (content.dataset.id === tab.dataset.id) {
                        content.classList.remove("hidden");
                    }
                });
            });
        });

        tabContent.forEach((content) => {
            content.dataset.id = contentNo;
            contentNo++;
        });

    })

    return (
        <>
            <section
                className="u-align-center u-clearfix u-image u-shading u-section-1"
                id="carousel_e2f7"
                data-image-width={3000}
                data-image-height={2136}
            >
                <div className="u-align-left u-clearfix u-sheet u-sheet-1">
                    <img
                        className="u-image u-image-round u-radius-22 u-image-1"
                        src={banner2}
                        alt=""
                        data-image-width={2993}
                        data-image-height={546}
                    />
                    <div className="u-tab-links-align-left u-tabs u-tabs-1">
                        <ul className="u-black u-spacing-10 u-tab-list u-unstyled u-tab-list-1">
                            <li className="u-tab-item" >
                                <button className="tab active u-button-style u-tab-link u-text-active-white u-text-body-alt-color">
                                    HOME
                                </button>
                            </li>
                            <li className="u-tab-item ">
                                <button className=" tab non-active u-button-style u-tab-link u-text-active-white u-text-body-alt-color" >
                                    TRADE
                                </button>
                            </li>
                            <li className="u-tab-item">
                                <button className=" tab non-active u-button-style u-tab-link u-text-active-white u-text-body-alt-color">
                                    FARMS
                                </button>
                            </li>
                            <li className="u-tab-item ">
                                <button className=" tab non-active u-button-style u-tab-link u-text-active-white u-text-body-alt-color" >
                                    STAKING
                                </button>
                            </li>
                        </ul>
                        {/* Tabs Component */}
                        <div className="tab-content">
                            <HomeTab />
                        </div>
                        <div className="tab-content hidden animate__animated animate__fadeInUp">
                            <TradeTab />
                        </div>
                        <div className="tab-content hidden animate__animated animate__fadeInUp">
                            <FarmsTab />
                        </div>
                        <div className="tab-content hidden animate__animated animate__fadeInUp">
                            <StackingTab />
                        </div>
                        {/* Tabs Component Finsh*/}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Presentation;