import { Form, FormControl, Button} from "react-bootstrap";
import styles from './formcard.module.css'
import classNames from "classnames";

function FormCard({inputs, onSubmit, onChange, values, errors, onBlur, message}){

    return(
        <div className={classNames(styles['container'], 'mt-5 container d-flex justify-content-center align-items-center')} >
            <div className={classNames(styles['formcard'], 'shadow-lg')}>
            <div className="row">
                <div className={classNames(styles['welcome'], 'col-sm-6 p-3')}>
                    <h1 className={classNames(styles['linear-gradient'])}>Welcome!</h1>
                    <p>{message.welcomeMessage}</p>
                    <p>{message.btnMessage}</p>
                    <a className={classNames(styles['animated-button'])} href={message.redirect}>{message.btnText}</a>
                </div>
                <div className={classNames(styles['form-content'], 'col-sm-6')}>
                    <div className={classNames(styles['form-title'])}>
                        <h3 className={classNames(styles['typing-title'], 'text-primary')}>{message.formTitle}</h3>
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
        </div>          
    )    
}

export default FormCard;