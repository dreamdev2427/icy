import React from 'react';
// Import images
import dripinu from '../images/dripinu.png';
import metamask1 from '../images/metamask1.png';

const HomeTab = () => {
    return (
        <>
            <div className="u-container-layout u-container-layout-1">
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-2">
                        <img
                            className="u-image u-image-contain u-image-default u-image-2 animate__animated animate__pulse"
                            src={dripinu}
                            alt=""
                            data-image-width={595}
                            data-image-height={842}
                        />
                        <a
                            href="#"
                            className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-1"
                        >
                            unlock wallet
                        </a>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-1">
                            Farms &amp; Staking
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-2">
                            $ICY to Harvest:
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-5-base u-text-3">
                            LOCKED
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-4">
                            $ICY in wallet:
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-5-base u-text-5">
                            LOCKED
                        </h3>
                        <a
                            href="https://nicepage.com/templates"
                            className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-2"
                        >
                            <span className="u-file-icon u-icon">
                                <img src={metamask1} alt="" />
                            </span>
                            &nbsp;add $icy to metamask
                        </a>
                    </div>
                </div>
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-2">
                    <div className="u-container-layout u-container-layout-3">
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-6">
                            DRIP INU ($ICY) Stats
                        </h3>
                        <div className="u-align-center u-table u-table-responsive u-table-1">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="61.3%" />
                                    <col width="38.7%" />
                                </colgroup>
                                <tbody className="u-align-left u-table-body u-table-body-1">
                                    <tr style={{ height: 34 }}>
                                        <td className="u-table-cell">
                                            <span style={{ fontSize: "0.8125rem" }}>
                                                Market Cap
                                            </span>
                                        </td>
                                        <td className="u-table-cell">0</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Total Minted</td>
                                        <td className="u-table-cell">0</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Circulating Supply</td>
                                        <td className="u-table-cell">0</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Max Tax amount</td>
                                        <td className="u-table-cell">0</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Transfer tax</td>
                                        <td className="u-table-cell">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-3">
                    <div className="u-container-layout u-container-layout-4">
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-7">
                            Farms &amp; Staking
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-white u-text-8">
                            $0.00
                        </h3>
                        <h3 className="u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-9">

                            Across all Farms, Pools and Launchpads
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTab;