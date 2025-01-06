import { useState } from "react";

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) => {
        console.log(event)
        const { target } = event
        const { name } = target //I can use {name,value}! but if the input is a checkbox I'dnt
        const { value } = target
        setInputs({
            ...inputs,
            [name]: value
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
                <div>
                    <label>Valor da carta</label>
                    <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value} />
                </div>
                <div>
                    <label>Naipe da carta</label>
                    <input type="" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit} />
                </div>
                <input type="submit" />
            </form>
        </>
    )

}

export default Form