import React from 'react'
import { withProfileContext } from './dataproviders/ProfileData'
import FormContainer from './FormContainer';
import './css/MainView.css'

function AddProfileForm({ addProfile }) {
    return (
        <FormContainer submit={addProfile}
            inputs={{
                coin: '',
                pool1: '',
                pool2: '',
                wallet: '',
                password: 'x',
                enabled: false


            }}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input value={inputs.coin} onChange={handleChange} type="text" name="coin" placeholder="Coin Name" /> <br/>
                    <input value={inputs.pool1} onChange={handleChange} type="text" name="pool1" placeholder="Pool1" /> <br/>
                    <input value={inputs.pool2} onChange={handleChange} type="text" name="pool2" placeholder="Pool2" /> <br/>
                    <input value={inputs.wallet} onChange={handleChange} type="text" name="wallet" placeholder="Wallet Address" /> <br/>
                    <input value={inputs.password} onChange={handleChange} type="text" name="password" placeholder="Password" /> <br/>
                    Enable<input className='enableBox'onChange={handleChange} type="checkbox" name="enabled" checked={inputs.enabled} /> <br/>
                    <button className="addButton">ADD</button>
                </form>
            )}
        </FormContainer>

    )
}

export default withProfileContext(AddProfileForm)

