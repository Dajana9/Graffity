import axios from 'axios';
import React from 'react';
import {css} from 'emotion';
import {BaseModal} from '../components/modal';
import {isMobile} from 'react-device-detect';

const listStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #cccc;
    margin: 10px;
    padding: 20px;
    height: 200px;
    max-width: 500px;
    min-width: 500px;
    @media only screen and (max-device-width: 640px) {
        min-width: unset;
        max-width: 100%;
        flex-direction: column;
    }
`;

const flexGrowStyle = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: inherit;
    height: inherit;
    overflow: auto;
`;

const imageStyle = css`
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
`;

const centerElementsStyle = css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export class Game extends React.Component {
    state = {
        articles: '',
        showModal: false,
        article: ''
    };

    componentDidMount = async () => {
        axios.get('http://127.0.0.1:8000/api/').then(res => {
            const data = res.data;
            this.setState({articles: data});
        });
    };

    render() {
        const articleModal = article => {
            this.setState({
                showModal: true,
                article: article
            });
        };

        const closeModal = () => {
            this.setState({showModal: false});
        };

        const {articles, showModal, article} = this.state;
        const items = [];
        for (const article of articles) {
            items.push(
                <div className={listStyle} key={article.id}>
                    <div className={flexGrowStyle}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                    <img
                        className={imageStyle}
                        src={article.image}
                        alt={article.title}
                        onClick={() => articleModal(article)}
                    />
                </div>
            );
        }
        return (
            <>
                <h2>Gallery</h2>
                <div className={centerElementsStyle}>{items}</div>
                {isMobile && <BaseModal isOpen={showModal} closeModal={closeModal} article={article} />}
            </>
        );
    }
}
