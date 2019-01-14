import { Component } from 'react'
import axios from 'axios';

export default class HitData extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            loading: true,
            errMsg: null
        }
    }

    getList(url) {
        return axios.get(url)
            .then(response => this.setState({
                list: response.data,
                loading: false,
                errMsg: null
            }))

            .catch(err => this.setState ({
                errMsg: 'Data is unavailable',
                loading: false
            }))
    }

    componentDidMount() {
        this.getList('https://s3.amazonaws.com/v-school/data/hitlist.json')
    }


    render() {
        return (
            this.props.children(this.state)
        )
    }
}
