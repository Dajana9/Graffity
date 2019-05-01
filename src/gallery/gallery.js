import axios from 'axios';
import React from 'react';
import {css} from 'emotion';
import {BaseModal} from '../components/modal';
import {Header} from '../header';

const listStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    height: 200px;
    width: 250px;
    height: 250px;
    display: inline-flex;

    @media only screen and (max-device-width: 640px) {
        min-width: unset;
        max-width: 100%;
        flex-direction: column;
    }
`;

const imageStyle = css`
    width: inherit;
    height: inherit;
    object-fit: scale-down;
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    border: solid 1px #ccc;
`;

export class Gallery extends React.Component {
    state = {
        articles: '',
        showModal: false,
        article: ''
    };

    componentDidMount = async () => {
        axios.get('/api/gallery').then(res => {
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
                    {/* <div className={flexGrowStyle}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div> */}
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
                <Header pageTitle="Gallery" content={items} />
                <BaseModal isOpen={showModal} closeModal={closeModal} article={article} />
            </>
        );
    }
}
