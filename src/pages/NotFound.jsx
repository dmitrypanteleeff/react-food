import {useNavigate} from 'react-router-dom'

function NotFound() {

    const page = useNavigate();

    const moveToBack = () => {
        console.log('click')
        page(-1);
    }

    return (
        <div>
            <h3>Sorry, but this page is not found. Please, try to search something else</h3>
            <button className="btn" onClick={()=>moveToBack()}> Back </button>
        </div>
    )
}

export {NotFound}