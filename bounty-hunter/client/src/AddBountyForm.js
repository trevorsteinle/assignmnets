import React from 'react';
import { withBountyContext } from './DataProvider';
import FormContainer from './FormContainer';

function AddBountyForm({ addBounty }) {
    return (
        <FormContainer submit={addBounty}
            inputs={{
                fName: '',
                lName: '',
                //living: '',
                bounty: '',
                type: ''
            }}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input value={inputs.fName} onChange={handleChange} type="text" name="fName" placeholder="First Name" />
                    <input value={inputs.lName} onChange={handleChange} type="text" name="lName" placeholder="Last Name" />
                    <input value={inputs.bounty} onChange={handleChange} type="number" name="bounty" placeholder="Bounty $" />
                    <input value={inputs.type} onChange={handleChange} type="text" name="type" placeholder="Jedi/Sith" />
                    <input value={inputs.living} onChange={handleChange} type="checkbox" name="living"/>
                    <button>ADD</button>
                </form>
            )}
        </FormContainer>

    )
}

export default withBountyContext(AddBountyForm)
