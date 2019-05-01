import axios from 'axios';
import React from 'react';
import {css} from 'emotion';
import {Header} from '../header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../App.css';

const imageStyle = css`
    width: 250px;
    height: 250px;
    object-fit: scale-down;
    display: flex;
    justify-content: center;
    display: inline-flex;
`;

const sliderStyle = css`
    margin: 10px 40px 30px 40px;
    height: 250px;
    width: calc(100vw - 300px);

    & .slick-slider slick-initialized {
        margin: 20px;
    }
    &.slick-arrow slick-prev {
        background: blue !important;
    }
    & button::before {
        color: black;
    }
    & .slick-list {
        border: solid 1px black;
        height: 250px;
        & .slick-track {
            height: 250px;
            & .slick-slide {
                width: 260px !important;
            }
        }
    }
    & .slick-slide {
        // border: solid #ccc;
    }
    @media only screen and (max-device-width: 640px) {
        width: unset;
    }
`;

const descriptionStyle = css`
    margin: 10px;
`;

const videoStyle = css`
    margin: 10px;
    width: 250px !important;
    height: 250px !important;
    object-fit: scale-down;
`;

const participantsStyle = css`
    display: block;
    padding: 10px !important;
    & div {
        padding: 5px;
    }
`;

const headerStyle = css`
    margin: 10px;
    font-weight: 800;
    font-size: 25px;
    font-family: fantasy;
`;

export class Workshop extends React.Component {
    state = {
        articles: '',
        showModal: false,
        article: ''
    };

    componentDidMount = async () => {
        console.log('U workshopu san');
        axios.get('http://127.0.0.1:8000/api/workshop/').then(res => {
            const data = res.data;
            this.setState({articles: data});
            console.log(data);
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
            console.log('art', articles[0]);
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            };
            let images;
            if (articles[0].workshop_images) {
                images = articles[0].workshop_images.map(imageId => {
                    return (
                        <div>
                            <img key={imageId} src={imageId.image} alt={imageId} className={imageStyle} />
                        </div>
                    );
                });
            }
            for (const article of articles) {
                items.push(
                    <div>
                        <div className={headerStyle}>{article.title}</div>
                        <Slider {...settings} className={sliderStyle}>
                            {images}
                        </Slider>
                        <div className={descriptionStyle}>{article.description}</div>
                        <img
                            className={videoStyle}
                            src={article.video}
                            alt={article.title}
                            onClick={() => articleModal(article)}
                        />
                        <div className={participantsStyle}>
                            <div>{` - in this event will be ${article.peopleCapacity} people`}</div>
                            <div>{` - so far ${article.peopleJoined} joined`}</div>
                            <div>{` - if you want to join contact: ${article.contact}`}</div>
                        </div>
                    </div>
                );
                break;
            }
        }
        return (
            <>
                <Header pageTitle="Workshop" content={items} />
            </>
        );
    }
}
