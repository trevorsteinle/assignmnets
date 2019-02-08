import React from 'react'

import { withProfileContext } from './dataproviders/ProfileData';
import { withToggler } from './Toggler'
import EditProfileForm from './EditProfileForm';
import './css/ProfileDetail.css'

function ProfileDetail({ coin, pool1, pool2, wallet, password, enabled, _id, on, editProfile, removeProfile, toggle }) {
    return (
        <div className="profileBox">
            <ul>
                <h4>Coin: {coin}</h4>
                <p>Pool1: {pool1}</p>
                <p>Pool2: {pool2}</p>
                <p>Wallet: {wallet}</p>
                <p>Enabled: {enabled ? 'true' : 'false'}</p>
                {/* <button onClick={removeProfile(_id)}>X</button> */}
                <button onClick={() => removeProfile(_id)}>X</button>
                <button onClick={toggle}>Modify</button>

                {on && <EditProfileForm
                    inputs={{ coin, pool1, pool2, wallet, password, enabled}}
                    submit={inputs => editProfile(_id, inputs)}>
                </EditProfileForm>}
            </ul>
        </div>
    )
}

export default withProfileContext(withToggler(ProfileDetail))


