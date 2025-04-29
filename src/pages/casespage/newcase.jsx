
import { Form, FormControl, Button } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { createCase } from '../../redux/caseslice';
import { useState } from 'react';

const NewCase = () => {
    
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState('');
    const validate = (name, value) => {
        // Add validation logic here if needed  
        if (!value && name === "title") {
            return "Title is required";
        }   
        if (!value && name === "contact") {
            return "Contact is required";
        }
        if (!value && name === "account") {
            return "Account is required";
        }
        if (!value && name === "priority") {
            return "Priority is required";
        }
        if (!value && name === "description") {
            return "Description is required";
        }        
    }

    const handleFormSubmit = (values) => {
        values.created = new Date().toISOString();
        values.updated = new Date().toISOString();
        values.status = 'Open';
        console.log('New Case Submitted:', values);
        // Add logic to post the formData to your backend API
        const res = dispatch(createCase(values));
        console.log(res);
        
        
    };

    const initValues = {
        title: '',
        contact: '',
        account: '',
        description: '',                    
        priority: '',
    };

    const inputs = [
        
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Title",
            label: "Title",
        },
        {
            id: 2,
            name: "contact",
            type: "text",
            placeholder: "Phone Number",
            label: "Contact",
        },
        {
            id: 3,
            name: "account",
            type: "text",
            placeholder: "Kirkland Inc.",
            label: "Account",
        },
        {
            id: 4,
            name: "priority",
            type: "select",
            options: [
                { value: 'P0', label: '--Select Priority--' },
                { value: 'P4', label: 'Low' },
                { value: 'P3', label: 'Medium' },
                { value: 'P2', label: 'High' },
                { value: 'P1', label: 'Critical' }
            ],
            placeholder: "P1, P2, P3",
            label: "Priority",
        },
        {
            id: 5,
            name: "description",
            type: "textarea",
            placeholder: "description",
            label: "Description",
        },
        {
            id: 6,
            name: "file",
            type: "file",
            placeholder: "upload file",
            label: "Upload File",
        }
    ]

    const {values, errors, handleChange, handleBlur, handleSubmit } = useForm(initValues, validate, handleFormSubmit)

    return (

        <div className="container mt-5 mb-5">
            <h1 className="text-center text-primary">Create New Case</h1>
            <p className="text-center text-info">Please fill out the form below to create a new case.</p>
            <p className="text-center text-danger">All fields are required.</p>
            <p className="text-center text-info">Please make sure to fill out the form correctly.</p>
            {successMessage && <small className="text-success ps-1">Case created successfully</small>}
            <hr />
            <Form onSubmit={handleSubmit}>
                
                {inputs.map(input => (
                    <div key={input.id}>
                        { <Form.Label htmlFor={input.name}>{input.label}</Form.Label> }
                        {input.type === 'select' ? (
                            <FormControl as="select" key={input.id} {...input} className="mb-3"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                {input.options.map(option => (
                                    option.value !== '' ? (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ) : (
                                        <option key={option.value} value={option.value} selected disabled>{option.label}</option>
                                    )
                                ))}
                            </FormControl>
                        ) : input.type === 'textarea' ? (
                            <FormControl as="textarea" rows={3} key={input.id} {...input} className="mb-3"
                                value={values[input.name]} onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        ) : (
                            <FormControl key={input.id} {...input} className="mb-3" 
                            value={values[input.name]} onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        )}
                        
                        {errors[input.name] && <small className="text-danger ps-1">{errors[input.name]}</small>}
                    </div>
                ))}
                <Button variant="primary" type="submit" className="mt-3">Submit</Button>
            </Form> 
        </div>
    );
};

export default NewCase;