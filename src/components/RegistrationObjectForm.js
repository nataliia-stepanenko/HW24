import {useState} from "react";

const RegistrationObjectForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmation: "",
        errorMessage: ""
    })

const handleChange = ({target: {value, name}}) => {
    setForm({
        ...form,
        errorMessage: "",
        [name]: value
    });
}




const handleSubmit = (event) => {
event.preventDefault();

if (form.email === "" || form.password === "" || form.confirmation === "") {
    setForm({
        ...form,
        errorMessage: "Please, fill all fields"
    });
    return;
}

if (form.password !== form.confirmation){
    setForm({
        ...form,
        errorMessage: "The values does not match"
    });
    return;
}

let regexp = /^\w{1,}@\w{1,}\.\w{1,}$/i;
if (!regexp.test(form.email)){
    setForm({
        ...form,
        errorMessage: "Please, enter valid email address"
    });
    return;
}

console.log("Email:", form.email, "Password:", form.password, "Confirmation:", form.confirmation)
}



return (
    <form onSubmit={handleSubmit} noValidate>
        <label>
            Email: <input type="email" name="email" value={form.emailValue} onChange={handleChange}/>
        </label>
        <label>
            Password: <input type="password" name="password" value={form.passwordValue} onChange={handleChange}/>
        </label>
        <label>
            Confirm password: <input type="password" name="confirmation" value={form.confirmValue} onChange={handleChange}/>
        </label>
        {form.errorMessage && <p className="error">{form.errorMessage}</p>}
        <button type="submit">Register</button>
    </form>
)
};

export default RegistrationObjectForm