import { useState } from "react";
import { Grid, Item, Tab } from "semantic-ui-react";
import CreateAnalysis from "../../components/CreateAnalysis"
import CreateSequence from "../../components/CreateSequence";

const panes_analysis = [
    { menuItem: 'Add', render: () => <Tab.Pane><CreateAnalysis /></Tab.Pane> },
    { menuItem: 'List', render: () => <Tab.Pane>List</Tab.Pane> },
]

const panes_sequence = [
    { menuItem: 'Add', render: () => <Tab.Pane><CreateSequence /></Tab.Pane> },
    { menuItem: 'List', render: () => <Tab.Pane>List</Tab.Pane> },
]

export default function Workspace() {

    const [panes, setPanes] = useState(panes_analysis) // or 'Sequence'

    const handlePage = e => {
        if (e.target.innerText === 'Analysis') {
            setPanes(panes_analysis)
        } else if (e.target.innerText === 'Sequence') {
            setPanes(panes_sequence)
        }
    }

    return (
        <Grid divided='vertically' className="middle aligned" style={{ height: "100vh" }} centered>
            <Grid.Row columns={2}>
                <Grid.Column width={3} textAlign="center">
                    <Item.Group divided>
                        <Item>
                            <Item.Content verticalAlign="middle"><a onClick={handlePage} href="#">Analysis</a></Item.Content>
                        </Item>
                        <Item>
                            <Item.Content verticalAlign="middle"><a onClick={handlePage} href="#">Sequence</a></Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column>
                    <Tab panes={panes} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}