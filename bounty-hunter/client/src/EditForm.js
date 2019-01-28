import React from 'react'
import FormContainerDemo from './FormContainerDemo';
                    // submit
function EditForm({inputs, submit}) {
    console.log(inputs)
    return (
        // {/* <form>
        //     <input type="text" name="name" value={inputs.name} />
        //     <input type="checkbox" checked={inputs.alive} />
        // </form> */}

        <FormContainerDemo inputs={inputs} submit={submit}>
            {({handleChange, handleSubmit, inputs}) => (
                <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="fName" value={inputs.fName} />
                <input type="text" onChange={handleChange} name="lName" value={inputs.lName} />
                <input type="number" onChange={handleChange} name="bounty" value={inputs.bounty} />
                <input type="text" onChange={handleChange} name="type" value={inputs.type} />
                <input type="checkbox" onChange={handleChange} checked={inputs.living} />
                <button>Save</button>
                </form>
        )}
        </FormContainerDemo>
    )
}

export default EditForm
