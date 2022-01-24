import { useEffect } from "react/cjs/react.development";

function Alert(props) {
    const { name = '', handleAlertName = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(handleAlertName, 130000);
        
        return () => { clearTimeout(timerId) }
    },[name])

    return <div id="toast-container" className="my-toast-container">
        <div className="toast">{ name } добавлен в корзину </div>
    </div>
}

export { Alert }