import React from 'react';
import ReactModal from 'react-modal';
import {css} from 'emotion';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -50%)',
        minWidth: '75%'
    }
};

const textStyle = css`
    text-transform: capitalize;
    background-image: url('../images/gray-paper.jpg') !important;
`;

const portalStyle = css`
    display: block;
`;

const imageStyle = css`
    height: calc(100vh - 250px);
    width: calc(100vh - 250px);
    object-fit: scale-down;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const overlayStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.75);
`;

const closeStyle = css`
    position: absolute;
    right: 15px;
    top: 15px;
    font-weight: 700;
    font-size: 20px;
    color: #ccc;
    &:hover {
        color: black;
    }
`;
export class BaseModal extends React.Component {
    state = {
        modalIsOpen: this.props.isOpen
    };

    render() {
        const {article} = this.props;

        return (
            <ReactModal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                portalClassName={portalStyle}
                overlayClassName={overlayStyle}
                // className={contentStyle}
                ariaHideApp={false}
            >
                <img className={imageStyle} src={article.image} alt={article.title} />
                <h2 className={textStyle} ref={subtitle => (this.subtitle = subtitle)}>
                    {article.title}
                </h2>
                <p>{article.description}</p>
                <closebutton className={closeStyle} onClick={this.props.closeModal}>
                    X
                </closebutton>
            </ReactModal>
        );
    }
}
