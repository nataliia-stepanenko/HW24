import {useForm} from "react-hook-form";

const ProfileForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Firstname <input type="text" {...register("firstname", {
                    required: "Firstname is required",
                    minLength: {
                        value: 3,
                        message: "Firstname should consist of minimum 3 symbols"
                    }
                })} />
                {errors.firstname && <div className="error">{errors.firstname.message}</div>}
            </label>
            <label>
                Lastname <input type="text" {...register("lastname", {
                    required: "Lastname is required",
                    minLength: {
                        value: 3,
                        message: "Lastname must consist of minimum 3 symbols"
                    }
                })} />
                {errors.lastname && <div className="error">{errors.lastname.message}</div>}
            </label>
            <label for="select">
                Country <select id="select" {...register("country", { required: "Please, select your country" })}>
                    <option disabled selected value="">Please, select</option>
                    <option value="ua">Ukraine</option>
                    <option value="uk">Great Britain</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                </select>
                {errors.country && <div className="error">{errors.country.message}</div>}
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default ProfileForm