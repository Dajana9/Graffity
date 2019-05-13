import React from 'react';
import {css} from 'emotion';
import {NavLink} from 'react-router-dom';

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
        justify-content: center;
    }
`;

const linksListStyle = css`
    display: flex;
    border: solid 1px;
    // flex-basis: 25%;
    min-height: calc(100vh - 90px);
    flex-direction: column;
    margin: 10px 10px 10px 0;
    @media only screen and (max-device-width: 640px) {
        min-height: unset;
        width: unset;
        margin-right: unset;
    }
    & a {
        padding: 10px;
        font-weight: 500;
        font-family: fantasy;
        font-size: 22px;
        pointer-events: auto;
        color: darkred;
        width: 150px !important;
    }
    & a:hover {
        color: black;
    }
`;

const contentStyle = css`
    flex-grow: 1;
    @media only screen and (max-device-width: 640px) {
        justify-content: center;
    }
`;

const logoStyle = css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 5px;
    & img {
        width: 150px;
        margin-right: 10px;
        border-radius: 50%;
    }
    @media only screen and (max-device-width: 640px) {
        justify-content: center;
    }
`;
const activeLinkStyle = css`
    background: #cccc;
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
                        <NavLink to="/gallery" activeClassName={activeLinkStyle}>
                            Gallery
                        </NavLink>
                        <NavLink to="/workshop" activeClassName={activeLinkStyle}>
                            Workshop
                        </NavLink>
                        <NavLink to="/webshop" activeClassName={activeLinkStyle}>
                            Webshop
                        </NavLink>
                    </div>
                    <div className={contentStyle}>{content}</div>
                </div>
            </div>
        );
    }
}
