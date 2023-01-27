const PersonalInfoInput = ({handlePdata, pData}) => {

    return (
      <div className="personalDiv">
        <div className="personalInfo">Personlig Informasjon</div>
        <input name="firstName" className="inputFields personalFields" type="text" placeholder="Fornavn" value={pData.firstName } onChange={handlePdata } />
        <input name="lastName" className="inputFields personalFields" type="text" placeholder="Etternavn" value={pData.lastName } onChange={handlePdata } />
        <input name="address" className="inputFields personalFields" type="text" placeholder="Addresse" value={pData.address} onChange={handlePdata } />
        <input name="phoneNumber" className="inputFields personalFields" type="text" placeholder="Telefon nummer" value={pData.phoneNumber} onChange={handlePdata } />
        <input name="email" className="inputFields personalFields" type="text" placeholder="Epost" value={pData.email} onChange={handlePdata } />
        <input name="about" className="inputFields personalFields" type="text" placeholder="Om deg.." value={pData.about} onChange={handlePdata } />
        {/* <button className="inputBtns" onClick={addPersonalInfo}>Lagre</button> */}
      </div>   
    );
  };
  
  export default PersonalInfoInput;
  