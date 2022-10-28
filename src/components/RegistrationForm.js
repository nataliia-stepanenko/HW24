import {useState} from "react";

const RegistrationForm = () => {
const [emailValue, setEmail] = useState("");
const [passwordValue, setPassword] = useState("");
const [confirmValue, setConfirmation] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleEmailChange = ({target: {value}}) => {
    if (errorMessage){
        setErrorMessage("");
    }
    setEmail(value);
}

const handlePasswordChange = ({target: {value}}) => {
    if (errorMessage){
        setErrorMessage("");
    }
    setPassword(value);
}

const handleConfirmChange = ({target: {value}}) => {
    if (errorMessage){
        setErrorMessage("");
    }
    setConfirmation(value);
}



const handleSubmit = (event) => {
event.preventDefault();

if (emailValue === "" || passwordValue === "" || confirmValue === "") {
    setErrorMessage("Please, fill all fields");
    return;
}

if (passwordValue !== confirmValue){
    setErrorMessage("The values does not match ");
    return;
}

let regexp = /^\w{1,}@\w{1,}\.\w{1,}$/i;
if (!regexp.test(emailValue)){
    setErrorMessage("Please, enter valid email address");
    return;
}

console.log("Email:", emailValue, "Password:", passwordValue, "Confirmation:", confirmValue)
}



return (
    <form onSubmit={handleSubmit} noValidate>
        <label>
            Email: <input type="email" name="email" value={emailValue} onChange={handleEmailChange}/>
        </label>
        <label>
            Password: <input type="password" name="password" value={passwordValue} onChange={handlePasswordChange}/>
        </label>
        <label>
            Confirm password: <input type="password" name="confirmation" value={confirmValue} onChange={handleConfirmChange}/>
        </label>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Register</button>
    </form>
)
};

export default RegistrationForm