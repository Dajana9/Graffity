import React from 'react';
import {css} from 'emotion';

const containerStyle = css`
    display: flex;
    flex-direction: column;
`;

const headerStyle = css`
    padding: 10px 0 0 10px;
    flex-grow: 3;
    font-size: 50px;
    font-weight: 900;
    font-family: fantasy;
    margin: 10px;
`;

const linkContentStyle = css`
    display: flex;
    border: solid;
    flex-grow: 1;
    flex-direction: row;
    @media only screen and (max-device-width: 640px) {
        flex-direction: column;
    }
`;

const linksListStyle = css`
    display: flex;
    border: solid 1px;
    // flex-basis: 25%;
    height: calc(100vh - 90px);
    flex-direction: column;
    margin-top: 10px;
    margin-right: 10px;
    @media only screen and (max-device-width: 640px) {
        height: unset;
        width: unset;
    }
    & a {
        padding: 10px;
        font-weight: 500;
        font-family: fantasy;
        font-size: 22px;
        pointer-events: auto;
        color: darkred;
        width: 150px !important;
        & .hover: {
            color: black;
        }
    }
`;

const contentStyle = css`
    flex-grow: 1;
`;

const logoStyle = css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & img {
        width: 150px;
        margin-right: 10px;
    }
`;

export class Header extends React.Component {
    render() {
        const {pageTitle, content} = this.props;
        return (
            <div className={containerStyle}>
                <div className={linkContentStyle}>
                    <div className={headerStyle}>{pageTitle}</div>
                    <div className={logoStyle}>
                        <img
                            src="https://images1.miaminewtimes.com/imager/u/745xauto/10764041/instagram-monkey.jpg"
                            alt={'logo'}
                        />
                    </div>
                </div>
                <div className={linkContentStyle}>
                    <div className={linksListStyle}>
                        <a href="/gallery">Gallery</a>
                        <a href="/workshop">Workshop</a>
                        <a href="/webshop">Webshop</a>
                    </div>
                    <div className={contentStyle}>{content}</div>
                </div>
            </div>
        );
    }
}
