import PersonalInfoInput from "./PersonalInfo";
import ExperienceInput from "./WorkExperience";
import EducationInput from "./Education";

const InputDisplay = ({handlePdata, pData, handleExpData, expData, handleEduData, eduData, handleEduList, eduList, handleExpList, expList}) => {

    return(
        <div className='inputDisplay'>
            <PersonalInfoInput handlePdata={handlePdata} pData={pData}/>
            <ExperienceInput handleExpData={handleExpData} expData={expData} handleExpList={handleExpList} expList={expList}/>
            <EducationInput handleEduData={handleEduData} eduData={eduData} handleEduList={handleEduList} eduList={eduList}/>
        </div>
    )
}

export default InputDisplay;