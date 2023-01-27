const ExperienceInput = ({handleExpData, expData, handleEduList, handleExpList}) =>{
    
    const addExperience =() =>{
        let data = {
            position: expData.position, 
            company: expData.company, 
            city: expData.city, 
            startDate: expData.startDate, 
            endDate: expData.endDate}
            handleExpList(data);
    }

    return(
        <div className="workExperience">
            <div>Erfaring</div>
            <input name="position" className="inputFields" type="text" placeholder="Stilling" value={expData.position} onChange={handleExpData} />
            <input name="company" className="inputFields" type="text" placeholder="Bedrift" value={expData.company} onChange={handleExpData} />
            <input name="city" className="inputFields" type="text" placeholder="By" value={expData.city} onChange={handleExpData} />
            <input name="startDate" className="inputFields" type="date" placeholder="Fra" value={expData.startDate} onChange={handleExpData} />
            <input name="endDate" className="inputFields" type="date" placeholder="Til" value={expData.endDate} onChange={handleExpData}/>
            <button className="inputBtns" onClick={addExperience} >Legg til</button> 
        </div>
    )
}

export default ExperienceInput;

