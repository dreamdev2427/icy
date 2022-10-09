import React from 'react';
// Import images
import favicon from '../images/favicon.png';

const StackingTab = () => {
    return (
        <>
            <div className="u-container-layout u-container-layout-14">
                <div className="u-black u-border-3 u-border-custom-color-2 u-container-style u-group u-opacity u-opacity-55 u-radius-27 u-shape-round u-group-9">
                    <div className="u-container-layout u-container-layout-15">
                        <img
                            className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 animate__animated animate__backInDown"
                            src={favicon}
                            alt=""
                            data-image-width={257}
                            data-image-height={257}
                        />
                        <h3 className="u-align-right u-custom-font u-font-ubuntu u-text u-text-25">
                            DRIP INU <span className="u-text-palette-4-base">(ICY)</span>
                        </h3>
                        <div className="u-align-center u-table u-table-responsive u-table-4">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="61.3%" />
                                    <col width="38.7%" />
                                </colgroup>
                                <tbody className="u-align-left u-table-body u-table-body-4">
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
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-26">
                            <span className="u-text-white">ICY</span> EARNED
                        </h3>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-5-base u-text-27">
                            0
                        </h3>
                        <a
                            href="#"
                            className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-palette-1-light-1 u-radius-50 u-btn-9"
                        >
                            COMPOUND
                        </a>
                        <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-palette-4-light-1 u-text-28">
                            <span className="u-text-white">ICY</span>&nbsp;STAKED
                        </h3>
                        <a
                            href="#"
                            className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-palette-1-light-1 u-radius-50 u-btn-10"
                        >
                            HARVEST
                        </a>
                        <a
                            href="#"
                            className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-20 u-text-body-alt-color u-btn-11"
                        >
                            unlock wallet
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StackingTab;