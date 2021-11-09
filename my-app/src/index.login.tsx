import { useState } from 'react';



export default function HelpLogin(initial :any, submit: () => void) {


    const [form, SetForm] = useState(initial);

    const updateForm = (event: any) => {
        SetForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event: any) => {
        submit();
        // return false;
    }

    return [
        updateForm,
        submitForm,
        form
    ]
}
