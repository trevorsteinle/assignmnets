import React, { Component, createContext } from 'react';
import axios from 'axios';

const { Consumer, Provider} = createContext();

export default class ProfileData extends Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        }
        this.getProfiles = this.getProfiles.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.removeProfile = this.removeProfile.bind(this)
    }
    getProfiles(url) {
        return axios.get(url)
            .then(response => this.setState({
                profiles: response.data
            }))
            .catch(err => this.setState({
                errMsg: 'Your Data Is Unavailable'
            }))
    }
    addProfile(profile) {
        return axios.post('/api/profile/', profile)
            .then(response => this.setState(ps => ({
                profiles: [...ps.profiles, response.data]
            })))
            
    }
    editProfile(id, updatedProfile) {
        return axios.put(`/api/profile/${id}`, updatedProfile)
            .then(response => this.setState(ps => ({
                profiles: ps.profiles.map(profile => profile._id === id ? response.data : profile)
            })))
    }

    removeProfile(id) {
        return axios.delete(`/api/profile/${id}`)
            .then(() => {
                this.setState(ps => ({
                    profiles: ps.profiles.filter((x) => x._id !== id)
                }))
            })

    }


    // removeProfile(id) {
    //     //  return axios.delete(`/profile/${id}`)
    //     //     .then(response => this.setState(ps => ({
    //     //         profiles: [...ps.profiles, response.data]
    //     //     })))

    // //    return axios.delete(`/api/profile/${id}`)
    // //         .then(response => this.setState(ps => ({
                
    // //                 profiles: ps.profiles(profile)
                
    // //         })))
    // }

    // return axios.delete(`/profiles/${id}`, profile)
        //     .then(response => this.setState(ps => ({
        //         profiles: [...ps.profiles, response.data]
        //     })))


    componentDidMount() {
        this.getProfiles('/api/profile/')
    }

    render() {
        const value = {
            ...this.state,
            addProfile: this.addProfile,
            getProfile: this.getProfile,
            editProfile: this.editProfile,
            removeProfile: this.removeProfile
            
        }
        return (
            // this.props.children(this.state)
            /*{ <div>
            {this.props.children}

            </div> }*/
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withProfileContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)