import React, { useState } from 'react'
import AllergyForm from './AllergyForm'
import {IoMdCloseCircle} from 'react-icons/io'
import {GrEdit} from 'react-icons/gr'

function Allergy({allergies, addedAllergy, removeAllergy, editAllergy}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        editAllergy(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <AllergyForm edit={edit}
        onSubmit={submitUpdate}
        />
    }
    return allergies.map((allergy, index) => (
        <div
            className={allergy.isAdded ? 'allergy-row added' : 'allergy-row'}
            key={index}
        >
        
            <div key={allergy.id} onClick={() => addedAllergy(allergy.id)}>
                {allergy.text}
            </div>
            <div className="icons">
                <IoMdCloseCircle
                    onClick={() => removeAllergy(allergy.id)}
                    className='delete-icon'/>
                <GrEdit
                    onClick={() => setEdit({id: allergy.id, value: allergy.text})}
                    className='edit-icon'/>
            </div>
        </div>
    ))

}

export default Allergy