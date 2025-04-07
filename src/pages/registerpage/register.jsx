
import FormCard from "../../components/formcard/formcard";
import NavigationBar from "../../components/navbar/navbar";
import useForm from "../../hooks/useForm";

function RegisterPage(){

    const initValues = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        title: "",
        companycode: ""
    }
    const message = {
        formTitle: "Sign Up",
        welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        btnMessage: "Already registered?",
        btnText: "Sign In",
        redirect: "/login"
    }

    const handleFormSubmit = (formData) => {
        console.log("Submitted Data:", formData);
    };

    const validate = (name, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) return `${name} is required`;
        if(value && name === "email"){
            if(!emailRegex.test(value)){
                return "Invalid Email"
            }
        }
        if(value && name === "phone"){
            if(value.length !== 10){
                return "Invalid phone number"
            }
        }
        return "";
    };

    

    const inputs = [
        {
            id: 1,
            name: "firstname",
            placeholder: "first name",
            type: "text",
            label: "First name"
        },
        {
            id: 2,
            name: "lastname",
            placeholder: "last name",
            type: "text",
            label: "Last name"
        },
        {
            id: 3,
            name: "email",
            placeholder: "something@example.com",
            type: "email",
            label: "Email"
        },
        {
            id: 4,
            name: "phone",
            placeholder: "(000)-000-0000",
            type: "text",
            label: "Phone"
        },
        {
            id: 5,
            name: "title",
            placeholder: "Job title",
            type: "text",
            label: "Title"
        },
        {
            id: 6,
            name: "companycode",
            placeholder: "Your company registration code",
            type: "text",
            label: "Registration Code"
        }
    ]

    const {values, errors, handleChange, handleBlur, handleSubmit } = useForm(
        initValues, validate, handleFormSubmit)

    return (
        <div>
            <NavigationBar />
            <FormCard 
                inputs={inputs} 
                values={values} 
                errors={errors} 
                onSubmit={handleSubmit} 
                onChange={handleChange}
                onBlur={handleBlur}
                message={message}
            />
        </div>
    )
}

export default RegisterPage;