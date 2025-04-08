
import NavigationBar from "../../components/navbar/navbar";
import FormCard from "../../components/formcard/formcard";
import useForm from "../../hooks/useForm";

function LoginPage(){
    const message = {
        formTitle: "Sign In",
        welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        btnMessage: "Haven't register yet?",
        btnText: "Sign Up",
        redirect: "/register"
    }
    
    const initValues = {
        email: "",
        password: ""
    }
    

    const handleFormSubmit = (formData) => {
        console.log("Submitted Data:", formData);
    };

    const validate = (name, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if (!value) return `${name} is required`;
        if(value && name === "email"){
            if(!emailRegex.test(value)){
                return "Invalid Email"
            }
        }
        if(value && name === "password"){
            if(!passwordRegex.test(value)){
                return "Invalid password"
            }
        }
        return "";
    };

    const {values, errors, handleChange, handleBlur, handleSubmit } = useForm(initValues, validate, handleFormSubmit)

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: "Email",
            label: "Email"
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
        }
    ]
    
    return (   
        <div className="loginbody">
            <NavigationBar />
            <FormCard inputs={inputs} 
                onChange={handleChange} 
                onSubmit={handleSubmit} 
                values={values} 
                errors={errors} 
                onBlur={handleBlur}
                message={message}
            />
    
        </div> 
    )
}

export default LoginPage;