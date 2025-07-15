import {useState, useRef} from 'react'
export default function RenderTest(){
    const [render, setRender] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;


    console.log('***** 렌더링 후 Ref:', countRef.current);
    console.log('***** 렌더링 후 Var:', countVar);

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref Up! --->', countRef.current);
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('Var Up! --->', countVar);
    }

    const doRender = () => {
        setRender(s=>s+1);
    }
    

    return (
    
    <div className="App">
        <header className="App-header">
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <p>State: {render}</p>
            <div>
                <button onClick={increaseRef}>Ref Up!</button>
                <button onClick={increaseVar}>Var Up!</button>
                <button onClick={doRender}>Render!</button>
            </div>
        </header>
    </div>
    );
}
