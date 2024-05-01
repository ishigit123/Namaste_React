import { useRouteError } from "react-router-dom";
const ErrorComp = () =>{
    const error = useRouteError();
    console.error(error);
    return (
        <div className="center">
            <h1>Oops!!</h1>
            <h1> Sorry, something went wrong 😓</h1>
            <p>
        <i>{error.status} : {error.statusText}</i>
      </p>
        </div>
    )
};
export default ErrorComp;