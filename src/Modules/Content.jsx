import { useState } from 'react';
import '../Styles/Style.css';
import MyHeader from "./Header";
import InputDisplay from "./Body";
import DisplayCv from './Display';



const MyContent = () => {   
    
    /* States */
    const [eduList, setEduList] = useState([]);
    const [expList, setExpList] = useState([]);

    const [pData, setPData] = useState({
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
            about: '',
        });

    const [expData, SetExpData] = useState({
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
    })

    const [eduData, setEduData] = useState({
        university: "",
        city: "",
        subject: "",
        degree: "",
        from: "",
        to: "",
    })


    /* Handlers */    
    const handlePdata = (e) => {
        const {name, value} = e.target;
        setPData((prevState) => ({
            ...prevState,
            [name]: value,
    }))};

    const handleExpData = (e) => {
        const {name, value} = e.target;
        SetExpData((prevState) => ({
            ...prevState,
            [name]: value
    }))};

    const handleEduData = (e) => {
        const {name, value} = e.target;
        setEduData((prevState) => ({
            ...prevState,
            [name]: value
    }))};


    const handleEduList = (data) =>{
        let old = [...eduList];
        let newData = data;
        old.push(newData);
        setEduList(old);
    }

    const handleExpList = (data) =>{
        let old = [...expList];
        let newData = data;
        old.push(newData);
        setExpList(old);
    }

    /* Render */

    return(
        <div className="mainContent">
            <MyHeader/>
            <InputDisplay handlePdata={handlePdata} pData={pData} handleExpData={handleExpData} expData={expData} handleEduData={handleEduData} eduData={eduData} handleEduList={handleEduList} setEduList={setEduList} handleExpList={handleExpList} expList={expList}/>
            <DisplayCv pData={pData} expData={expData} eduData={eduData} eduList={eduList} expList={expList}/>
        </div>
    )
}

export default MyContent;