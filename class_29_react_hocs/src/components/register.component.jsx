import React, {useState, useCallback} from "react";

import ButtonComponent from "./button.component";
import TitleComponent from "./title.component";

const Register = () => {

    const [clickCount, setClickedCount] = useState(0);
    const [googleClickCount, setGoogleClickedCount] = useState(0);

    const incrementCount = useCallback(() => {
        console.log('incrementCount register count', clickCount);
        setClickedCount((clickCount) => clickCount + 1);
    },[]);

    const googleIncrementCount = useCallback(() => {
        console.log('googleIncrementCount register count', googleClickCount);
        setGoogleClickedCount((googleClickCount) => googleClickCount + 1);
    },[]);

    return(
        <div>
            <TitleComponent title="Register"/>
            <div>
                <ButtonComponent
                    buttonCount={clickCount}
                    buttonName={"Facebook"}
                    handleBtnClick={incrementCount}
                />

                <ButtonComponent
                    buttonCount={googleClickCount}
                    buttonName={"Google"}
                    handleBtnClick={googleIncrementCount}
                />
            </div>
        </div>

    )
}
export  default  Register;

// state change component re-render
// useCallback not working