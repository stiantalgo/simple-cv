const EducationInput = ({handleEduData, eduData, handleEduList}) => {

    const addEducation =() =>{
        let data = {university: eduData.university, 
            city: eduData.city, 
            subject: eduData.subject, 
            degree: eduData.degree, 
            from: eduData.from, 
            to: eduData.to}
            handleEduList(data);
    }

    return(
        <div className="education">
        <div>Utdanning</div>
        <input name="university" className="inputFields" type="text" placeholder="Utdanningsinstitusjon" value={eduData.university} onChange={handleEduData}/>
        <input name="city" className="inputFields" type="text" placeholder="By" value={eduData.city} onChange={handleEduData}/>
        <input name="subject" className="inputFields" type="text" placeholder="Fag" value={eduData.subject} onChange={handleEduData}/>
        <input name="degree" className="inputFields" type="text" placeholder="Master, bachelor.." value={eduData.degree} onChange={handleEduData}/>
        <input name="from" className="inputFields" type="date" placeholder="Fra" value={eduData.from} onChange={handleEduData}/>
        <input name="to" className="inputFields" type="date" placeholder="Til" value={eduData.to} onChange={handleEduData}/>
        <button className="inputBtns" onClick={addEducation}>Legg til</button>
        {/* <button className="inputBtns">Tøm felt</button> */}
    </div>
    )
}

export default EducationInput;