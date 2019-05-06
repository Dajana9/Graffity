import axios from 'axios';
import React from 'react';
import {css} from 'emotion';
import {Header} from '../header';

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
    & div {
        padding: 5px 5px 0 0;
    }
`;

const imageStyle = css`
    width: 250px;
    height: inherit;
    object-fit: scale-down;
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
`;

export class Webshop extends React.Component {
    state = {
        articles: '',
        showModal: false,
        article: ''
    };

    componentDidMount = async () => {
        axios.get('/api/webshop').then(res => {
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

        const {articles} = this.state;
        const items = [];
        if (articles) {
            for (const article of articles) {
                items.push(
                    <div className={listStyle} key={article.id}>
                        <div className={flexGrowStyle}>
                            <h3>{article.title}</h3>
                            <div style={{marginBottom: 5}}>{article.description}</div>
                            <div>
                                <b>Price:</b>
                                {` ${article.price} kn`}
                            </div>
                            <div>
                                <b>Size:</b>
                                {` ${article.size}`}
                            </div>
                            <div>
                                <b>Shipping:</b>
                                {` ${article.shipping}`}
                            </div>
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
        }
        return (
            <>
                <Header pageTitle="Webshop" content={items} />
            </>
        );
    }
}
