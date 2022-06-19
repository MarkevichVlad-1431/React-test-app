import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStoreTests } from "../../../store/TestSlice";
import OneText from "./OneTest";


const Test = () => {
    const [text, settext] = useState('');
    const dispatch = useDispatch();
    const arrTest = useSelector(state => state.Test.tests);

    const updateText = (e) => {
        settext(e.target.value);
    }
    const addTest = () => {
        dispatch(updateStoreTests({id:2, text: text}));
        settext('');
    }

    const Tests = arrTest.map(item => <OneText 
        id = {item.id}
        key = {item.id}
        text = {item.text}

    />)

    return (
        <div>
            <h1>
               Test  
            </h1>
            <input 
                type="text"
                value={text}
                onChange={updateText}
            /> 
            <button onClick={addTest}>Add test</button>
            <div>
                {Tests}
            </div>
        </div>
    )
}

export default Test;