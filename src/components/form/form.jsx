import { useState } from "react";

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: ''
    })

    const handleInputChange = (event) => {
        setInputs({
            image: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCards(inputs)
    }

    return (
        <>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Endereço da carta</label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
                </div>
                <input type="submit" />
            </form>
        </>
    )

}

export default Form