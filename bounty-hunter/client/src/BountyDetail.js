import React from 'react'
import EditForm from './EditForm';
import { withBountyContext } from './DataProvider'

import { withToggler } from './Toggler.js'

//  function BountyDetail({ name, price, alive, toggle, on}) {
// _id, editbounty
// function BountyDetail(props) {
function BountyDetail(
    {toggle, on, location: {state: {bounty: {fName, lName, living, type, bounty}}, editBounty, _id}}) {
    // const { bounty } = props.location.state;
    return (
        <div>
            <h3>First Name: {fName}</h3>
            <h3>Last Name: {lName}</h3>
            <p>Bounty: ${bounty}</p>
            <p>Jedi/Sith: {type}</p>
            {/* <p>Alive: {bounty.living}</p> */}
            {/* <p>Alive: <input onChange={onChange}/></p> */}
            <p>Status: {living ? 'Alive' : 'Dead'}</p>

            <button>X</button>
            <button onClick={toggle}>Edit</button>

            {on && <EditForm
                inputs={{ fName, bounty, living }}
                submit={inputs => editBounty(_id, inputs)}>
            </EditForm>}
        </div>
    )
}

// export default withBountyContext(withToggle(BountyDetail))
export default withBountyContext(withToggler(BountyDetail))
