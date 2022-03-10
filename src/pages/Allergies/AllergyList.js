import React, {useState} from 'react'
import AllergyForm from './AllergyForm'
import Allergy from './Allergy';

function AllergyList() {
    const [allergies, setAllergies] = useState([]);
    
    const addAllergy = allergy => {
        if(!allergy.text || /^\s*$/.test(allergy.text)) {
            return
        }
        const newAllergies = [allergy, ...allergies]

        setAllergies(newAllergies)
    };

    const editAllergy = (allergyId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setAllergies(prev => prev.map (item=>(item.id === allergyId ? newValue : item)));
    }

    const removeAllergy = id => {
        const removeArr = [...allergies].filter(allergy => allergy.id !== id)

        setAllergies(removeArr);
    };


    const addedAllergy = id => {
        let updatedAllergies = allergies.map(allergy => {
            if (allergy.id === id) {
                allergy.addedAllergy = !allergy.addedAllergy
            }
            return allergy
        })
        setAllergies(updatedAllergies);
    }
    return (
      <div>
        <h1>Please add any additional allergies that are not part of the Big 8</h1>
        <AllergyForm onSubmit={addAllergy}/>
        <Allergy 
            allergies={allergies}
            addedAllergy={addedAllergy}
            removeAllergy={removeAllergy}
            editAllergy={editAllergy}
        />
     </div>
  )
}

export default AllergyList