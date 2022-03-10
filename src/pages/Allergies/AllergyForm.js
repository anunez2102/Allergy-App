import React, { useState, useEffect, useRef } from 'react'

function AllergyForm(props) {
    const [input, setInput] = useState("")

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value)
    }

   // const onSubmit = () => {
        // implement what I am trying to do in this function
     // }

    //so that page would not refresh 
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
    });

    setInput('');
};

    return (
        <form className='allergy-form' onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                placeholder="Add an allergy" 
                value={input} 
                name="text"
                className='allergy-input'
                onChange={handleChange}   
                ref={inputRef}
            />
            <button className="allergy-button">
                Add allergy
            </button>
            
        </form>
    )
}

export default AllergyForm
