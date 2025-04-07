import { Form, FormControl, Button} from "react-bootstrap";


import './formcard.css'

function FormCard({inputs, onSubmit, onChange, values, errors, onBlur, message}){

    return(
        <div className="container mt-5 container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="welcome col-sm-6">
                    <h1>Welcome!</h1>
                    <p>{message.welcomeMessage}</p>
                    <p>{message.btnMessage}</p>
                    <a className="animated-button" href={message.redirect}>{message.btnText}</a>
                </div>
                <div className="form-content col-sm-6">
                    <div className="form-title">
                        <h3 className="typing-title text-primary">{message.formTitle}</h3>
                    </div>
                    
                    <Form onSubmit={onSubmit}>
                        {inputs.map(input => (
                            <div key={input.id}>
                                {/* <Form.Label htmlFor={input.name} className="mt-3">{input.label}</Form.Label> */}
                                <FormControl key={input.id} {...input} className="mt-3" 
                                    value={values[input.name]} onChange={onChange}
                                    onBlur={onBlur}
                                />
                                {errors[input.name] && <small className="text-danger ps-1">{errors[input.name]}</small>} 
                            </div>
                        ))}
                        <Button variant="primary" type="submit" className="mt-3">Submit</Button>
                    </Form> 
                </div>
            </div>
            
        </div>          
    )    
}

export default FormCard;