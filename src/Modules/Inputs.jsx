const InputTest = ({handlePersona, persona}) =>{

    return(
        <div>
            <input type="text" name="name" value={persona.name} onChange={handlePersona}/>
            <input type="text" name="age" value={persona.age} onChange={handlePersona}/>
            <input type="text" name="city" value={persona.city} onChange={handlePersona}/>
            <input type="text" name="number" value={persona.number} onChange={handlePersona}/>
        </div>
    )
}

export default InputTest;