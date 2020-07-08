
import { useForm } from "react-hook-form";

export const createFormPage = () => {
    return function FormPage(props) {
        const { register, handleSubmit, errors } = useForm();

        const submitPage = data => {
            props.submitPage(data);
        };

        return (
            <form>
                <input type="text" name="nname" id="nnameid" value="val" ref={register({ required: true })} />
                {errors["nname"] && <span>This field is required</span>}
                <button onClick={handleSubmit(submitPage)}>Continuă</button>
            </form>
        );
    };
};
