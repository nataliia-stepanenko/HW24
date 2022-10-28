import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstname: yup.string().trim().required("Firstname is required").min(3, "Firstname should consist of minimum 3 symbols"),
    lastname: yup.string().trim().required("Lastname is required").min(3, "Lastname must consist of minimum 3 symbols"),
    country: yup.string().required("Please, select your country")
}).required();

const ProfileYupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Firstname <input type="text" {...register("firstname")} />
                {errors.firstname && <div className="error">{errors.firstname.message}</div>}
            </label>
            <label>
                Lastname <input type="text" {...register("lastname")} />
                {errors.lastname && <div className="error">{errors.lastname.message}</div>}
            </label>
            <label>
                Country <select {...register("country")}>
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
    );
};

export default ProfileYupForm;