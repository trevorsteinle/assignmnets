import React from 'react';
import FormContainer from './FormContainer';
function EditProfileForm({inputs, submit}) {
    return (
        <FormContainer inputs={inputs} submit={submit}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input value={inputs.coin} onChange={handleChange} type="text" name="coin" placeholder="Coin Name" /> <br/>
                    <input value={inputs.pool1} onChange={handleChange} type="text" name="pool1" placeholder="Pool1" /> <br/>
                    <input value={inputs.pool2} onChange={handleChange} type="text" name="pool2" placeholder="Pool2" /> <br/>
                    <input value={inputs.wallet} onChange={handleChange} type="text" name="wallet" placeholder="Wallet Address" /> <br/>
                    <input value={inputs.password} onChange={handleChange} type="text" name="password" placeholder="Password" /> <br/>
                    <input onChange={handleChange} type="checkbox" name="enabled" checked={inputs.enabled} checked={inputs.enabled} /> <br/>
                    <button>Update</button>
                </form>
            )}
        </FormContainer>
    )
}

export default EditProfileForm
