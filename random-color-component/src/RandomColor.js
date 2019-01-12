import { Component } from 'react'
import axios from 'axios'

export default class RandomColor extends Component {
    constructor() {
        super();
        this.state = {
            color: []
        }
    }
    getRandomColor(url) {
        return axios.get(url)
            .then(response => this.setState({
                color: response.data.new_color,

            }))
    }

    componentDidMount() {
        this.getRandomColor('http://www.colr.org/json/color/random')
    }


    render() {
        return (
            this.props.children(this.state)
        )
    }
}


// {
//     "colors":
//     [{ "timestamp": 0, "hex": "8b847e", "id": 5227, "tags": [{ "timestamp": 1108110877, "id": 4873, "name": "schooner" }] }],
//     "schemes": [],
//     "schemes_history": { },
//     "success": true,
//     "colors_history": { "8b847e": [{ "d_count": 0, "id": "4873", "a_count": 1, "name": "schooner" }] },
//     "messages": [],
//     "new_color": "8b847e"
// }