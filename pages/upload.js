import { Grid } from "semantic-ui-react";
import MultipleFileUpload from "../components/MultipleFileUpload";
import SingleFileUpload from "../components/SingleFileUpload";

export default function Upload() {
    return (
        <Grid className={"middle aligned"} style={{ height: '100vh' }}>
            <Grid.Column textAlign="center">
                <SingleFileUpload />
                <MultipleFileUpload />
            </Grid.Column>
        </Grid>
    )
}