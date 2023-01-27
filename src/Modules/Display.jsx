const DisplayCv = ({pData, expData, eduData, eduList, expList}) =>{
    return(
        <div className="displayCv">
            <div className="displayHeader">
                <h1>{pData.firstName} {pData.lastName}</h1>
            </div>

            <div className="displayLeft">
                <div className="displayDescription">
                    <div className="underLine">Ferdigheter</div>
                    <div className="card">
                        <div>{pData.about}</div>
                    </div>
                </div>

{/********************************** Erfaringer ******************************/}
                <div className="displayExperience">
                    <div className="underLine">Erfaringer</div>                    
                    <div className="card">
                        {(expData.company )  && <div>{expData.position} at {expData.company}</div>}
                        <div>{expData.city}</div>
                        {expData.startDate && <div>{expData.startDate} - {expData.endDate}</div>}
                    </div>

                    { expList.map((item, key) => {
                        return(
                            <div className="card" key={key}>
                                { (item.company || item.position ) && <div>{item.position} at {item.company}</div>}
                                <div>{item.city}</div>
                                { item.startDate && <div>{item.startDate} - {item.endDate}</div> }
                            </div>
                        )
                    })}
                </div>

{/********************************** Utdanning ******************************/}
                <div className="displayEducation">
                    <div className="underLine">Utdanning</div>
                    <div className="card">
                        {eduData.university && <div>{eduData.university} i {eduData.city}</div>}
                        {eduData.subject && <div>{eduData.degree} i {eduData.subject}</div>}
                        {eduData.from && <div>{eduData.from} - {eduData.to}</div> }
                        {eduData.degree && <div className="underlineDiv"></div>}
                        </div>

                    { eduList.map((item, key ) =>{
                        return(
                            <div className="card" key={key}>
                                <div>{item.university} i {item.city}</div>
                                <div>{item.degree} i {item.subject}</div>
                                <div>{item.from} - {item.to}</div>
                                <div className="underlineDiv"></div>
                            </div>
                        )
                    })}                    
                </div>
            </div>

            <div className="displayRight">
                <div className="cvPicture">Bilde Her</div>
                <div className="details">
                    <div className="displayAddress">
                        <div>Addresse:</div>
                        <p>{pData.address}</p>
                    </div>
                    <div className="displayNumber">
                        <div>Telefon Nummer:</div>
                        <p>{pData.phoneNumber}</p>
                    </div>
                    <div className="displayEmail">
                        <div>Epost:</div>
                        <p>{pData.email}</p>
                    </div>
                </div>
            </div>

            <div className="displayFooter">
                <button className="inputBtns saveToPDF" onClick={()=> alert("Not implemented yet..")}>Save to PDF</button>
            </div>
        </div>
    )
}

export default DisplayCv;