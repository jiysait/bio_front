import axios from 'axios'
import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default function CreateSequence() {

    const [fileListObj, setFileListObj] = useState()

    const handleFilesChange = e => {
        setFileListObj(e.target.files)
    }

    const handleSubmit = e => {
        let url = 'http://localhost:8000/ebs/sequence/add'
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        let form_data = new FormData()

        if (fileListObj) {
            let fileList = [...fileListObj]
            fileList.forEach(file => {
                form_data.append('files', file)
            })
        }

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
            <h3>Add Sequence</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Choose Sequence Files</label>
                    <input type="file" name="files" onChange={handleFilesChange} multiple />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    )

}