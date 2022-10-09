import React from 'react';
// Import images
import img1 from '../images/3524659-08c37069.png';
import img2 from '../images/5339037-8077d7b5.png';
import img3 from '../images/5339037-8077d7b5.png';
import img4 from '../images//3416111-0b6df605.png';


// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TradeTab = () => {
    return (
        <>
            <Tabs>
                <div className="u-container-layout u-container-layout-5">
                    <div className="u-tab-links-align-left u-tabs u-tabs-2">
                        <ul className="nav nav-pills u-spacing-10 u-tab-list u-unstyled">
                            <TabList>
                                <Tab> <li className="">
                                    <button
                                        className="u-button-style u-palette-5-dark-1 u-tab-link u-text-active-white u-text-black u-tab-link-5"
                                    >
                                        SWAP
                                    </button>
                                </li>
                                </Tab>
                                <Tab>
                                    <li className="">
                                        <button
                                            className="u-button-style u-palette-5-dark-1 u-tab-link u-text-active-white u-text-black u-tab-link-6"
                                        >

                                            LIQUIDITY
                                        </button>
                                    </li>
                                </Tab>
                            </TabList>
                        </ul>
                        <div className="u-tab-content">
                            <TabPanel>
                                <div
                                    className="u-container-style u-shape-rectangle u-tab-active u-tab-pane"
                                    id="tab-0da5"
                                    role="tabpanel"
                                    aria-labelledby="link-tab-0da5"
                                >
                                    <div className="u-container-layout u-container-layout-6">
                                        <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-4">
                                            <div className="u-container-layout u-container-layout-7">
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-10">
                                                    Exchange
                                                </h3>
                                                <span className="u-file-icon u-icon u-text-palette-4-base u-icon-2 animate__animated animate__pulse">
                                                    <img src={img1} alt="" />
                                                </span>
                                                <span className="u-file-icon u-icon u-text-palette-4-base u-icon-3 animate__animated animate__pulse">
                                                    <img src={img3} alt="" />
                                                </span>
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-11">
                                                    <span style={{ fontSize: "1rem", fontWeight: 400 }}>
                                                        Trade tokens in an instant
                                                    </span>
                                                </h3>
                                                <div className="u-opacity u-opacity-45 u-palette-4-base u-radius-19 u-shape u-shape-round u-shape-1" />
                                                <span className="u-file-icon u-icon u-text-palette-4-base u-icon-4 animate__animated animate__pulse">
                                                    <img src={img4} alt="" />
                                                </span>
                                                <div className="u-opacity u-opacity-45 u-palette-4-base u-radius-19 u-shape u-shape-round u-shape-2" />
                                                <a
                                                    href="#"
                                                    className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-3"
                                                >
                                                    unlock wallet
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className="u-align-left u-container-style u-shape-rectangle u-tab-pane"
                                    id="tab-14b7"
                                    role="tabpanel"
                                    aria-labelledby="link-tab-14b7"
                                >
                                    <div className="u-container-layout u-valign-top u-container-layout-8">
                                        <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-5">
                                            <div className="u-container-layout u-container-layout-9">
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-12">
                                                    Liquidity
                                                </h3>
                                                <span className="u-file-icon u-icon u-text-palette-4-base u-icon-5 animate__animated animate__pulse">
                                                    <img src={img1} alt="" />
                                                </span>
                                                <span className="u-file-icon u-icon u-text-palette-4-base u-icon-6 animate__animated animate__pulse">
                                                    <img src={img2} alt="" />
                                                </span>
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-13">
                                                    <span style={{ fontWeight: 400 }} />
                                                    Add liquidity to receive LP tokens
                                                </h3>
                                                <a
                                                    href="#"
                                                    className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-4"
                                                >
                                                    ADD liquidity
                                                </a>
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-14">
                                                    <span style={{ fontWeight: 400 }} />
                                                    YOUR LIQUIDITY
                                                </h3>
                                                <div className="u-align-center u-container-style u-group u-opacity u-opacity-45 u-palette-4-base u-radius-19 u-shape-round u-group-6">
                                                    <div className="u-container-layout u-valign-middle u-container-layout-10">
                                                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-15">
                                                            Connect to a wallet to view your liquidity
                                                        </h3>
                                                    </div>
                                                </div>
                                                <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-16">
                                                    <span style={{ fontWeight: 400 }} />
                                                    Don't see a pool you joined?
                                                    <span style={{ fontWeight: 700 }}>IMPORT IT.</span>
                                                    <br />
                                                    <br />
                                                    <span className="u-text-white">
                                                        Or, if you staked your ICY tokens in a farm, unstake
                                                        them to see them here.
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </>
    );
}

export default TradeTab;