import axios from 'axios'
import { useState } from 'react'
import { Button, Card, CardContent, Form } from 'semantic-ui-react'

export default function SingleFileUpload() {

    const [file, setFile] = useState()
    const [name, setName] = useState()

    const handleChange = e => {
        setFile(e.target.files[0])
        setName(e.target.files[0].name)
    }

    const handleSubmit = e => {
        let url = 'http://localhost:8000/examples/single-file-upload'
        let form_data = new FormData()
        form_data.append('name', name)
        form_data.append('file', file)

        axios.post(
            url,
            form_data,
            {
                'content_type': 'multipart/form-data'
            }
        ).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Card>
            <CardContent>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Select A File</label>
                        <input type="file" name="file" onChange={handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </CardContent>
        </Card>
    )

}