import React from 'react';
// Import images
import QET from '../images/QET.png';
import WER from '../images/WER.png';

const FarmsTab = () => {
    return (
        <>
            <div className="u-container-layout u-container-layout-11">
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-7">
                    <div className="u-container-layout u-container-layout-12">
                        <h3 className="u-align-right u-custom-font u-font-ubuntu u-text u-text-17">
                            ICY-ETH LP
                        </h3>
                        <img
                            className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3 animate__animated animate__backInDown"
                            src={WER}
                            alt=""
                            data-image-width={351}
                            data-image-height={351}
                        />
                        <div className="u-align-center u-table u-table-responsive u-table-2">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="61.3%" />
                                    <col width="38.7%" />
                                </colgroup>
                                <tbody className="u-align-left u-table-body u-table-body-2">
                                    <tr style={{ height: 34 }}>
                                        <td className="u-table-cell">
                                            <span style={{ fontSize: 13 }}>APR:</span>
                                        </td>
                                        <td className="u-table-cell">Na%</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Earn:</td>
                                        <td className="u-table-cell">ICY</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Deposit Fee:</td>
                                        <td className="u-table-cell">NaN%</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Harvest Lockup:</td>
                                        <td className="u-table-cell">6 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-18">
                            <span className="u-text-white">ICY</span> EARNED
                        </h3>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-5-base u-text-19">
                            0
                        </h3>
                        <a
                            href="#"
                            className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-palette-1-light-1 u-radius-50 u-btn-5"
                        >
                            HARVEST
                        </a>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-20">
                            <span className="u-text-white">ICY-ETH LP</span> STAKED
                        </h3>
                        <a
                            href="#"
                            className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-6"
                        >
                            unlock wallet
                        </a>
                    </div>
                </div>
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-8">
                    <div className="u-container-layout u-container-layout-13">
                        <h3 className="u-align-right u-custom-font u-font-ubuntu u-text u-text-21">
                            ICY-USDC LP
                        </h3>
                        <img
                            className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4 animate__animated animate__backInDown"
                            src={QET}
                            alt=""
                            data-image-width={351}
                            data-image-height={351}
                        />
                        <div className="u-align-center u-table u-table-responsive u-table-3">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="61.3%" />
                                    <col width="38.7%" />
                                </colgroup>
                                <tbody className="u-align-left u-table-body u-table-body-3">
                                    <tr style={{ height: 34 }}>
                                        <td className="u-table-cell">
                                            <span style={{ fontSize: 13 }}>APR:</span>
                                        </td>
                                        <td className="u-table-cell">Na%</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Earn:</td>
                                        <td className="u-table-cell">ICY</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Deposit Fee:</td>
                                        <td className="u-table-cell">NaN%</td>
                                    </tr>
                                    <tr style={{ height: 39 }}>
                                        <td className="u-table-cell">Harvest Lockup:</td>
                                        <td className="u-table-cell">6 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-22">
                            <span className="u-text-white">ICY</span> EARNED
                        </h3>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-5-base u-text-23">
                            0
                        </h3>
                        <a
                            href="#"
                            className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-palette-1-light-1 u-radius-50 u-btn-7"
                        >
                            HARVEST
                        </a>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-24">
                            <span className="u-text-white">ICY-USDC LP</span> STAKED
                        </h3>
                        <a
                            href="#"
                            className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-8"
                        >
                            unlock wallet
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FarmsTab;