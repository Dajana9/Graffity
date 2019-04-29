import React from 'react';
import Select from 'react-select';
import axios from 'axios';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20
    }),
    control: () => ({
        // width: 200
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {...provided, opacity, transition};
    }
};

export class Dropdown extends React.Component {
    state = {
        selectedOption: null,
        articles: null
    };

    componentDidMount = async () => {
        axios.get('http://127.0.0.1:8000/api/').then(res => {
            const data = res.data;
            this.setState({articles: data});
        });
        console.log(this.state.articles);
    };

    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const {selectedOption, articles} = this.state;
        const articleOptions = [];
        if (articles) {
            for (const article of articles) {
                console.log('title', article.title);
                articleOptions.push({value: article.title, label: article.title});
            }
        }
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={articleOptions}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                styles={customStyles}
            />
        );
    }
}
