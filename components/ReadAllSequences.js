import axios from "axios"
import { useEffect, useState } from "react"
import { List } from "semantic-ui-react"

export default function ReadAllSequences() {

    const [sequences, setSequences] = useState()

    const fetchData = () => {
        let url = 'http://localhost:8000/ebs/sequence/all'
        let config = {
            headers: {
                'Content-Type': 'text/html',
            }
        }

        axios.get(
            url,
            config
        ).then(res => {
            setSequences(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h3>List of Sequences</h3>
            <List divided relaxed>
                {sequences &&
                    sequences.map(seq => (
                        <List.Item key={seq.id}>
                            <List.Content>
                                <List.Header as='a'>{seq.seqfile_path}</List.Header>
                                {/* <List.Description as='a'>Updated 10 mins ago</List.Description> */}
                            </List.Content>
                        </List.Item>

                    ))
                }
            </List>
        </>
    )

}
