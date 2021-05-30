import axios from 'axios'
import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default function CreateAnalysis() {

    const [name, setName] = useState()
    const [description, setDescription] = useState()

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    const handleSubmit = e => {
        let url = 'http://localhost:8000/ebs/analysis/open'
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        let form_data = new FormData()
        form_data.append('name', name)
        form_data.append('description', description)

        axios.post(
            url,
            form_data,
            config
        ).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h3>Open Analysis</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleNameChange} />
                    <label>Description</label>
                    <textarea name="description" onChange={handleDescriptionChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    )

}