import {useParams, useNavigate, useLocation} from "react-router-dom"

function Movies() {
    const { title } = useParams();
    const value = useNavigate();
    

    //const value2 = useLocation()
    //console.log(value)

    const moveToBack = () => {
        console.log('click')
        value(-1);
    }

    
    console.log(value);
    return (
        <div>
            <h2>Hello from Movies {title}</h2>
            <button onClick={()=>moveToBack()}> Back </button>
        </div>
    )
}

export {Movies}