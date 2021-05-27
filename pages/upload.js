import { Container } from "semantic-ui-react";
import MultipleFileUpload from "../components/MultipleFileUpload";
import SingleFileUpload from "../components/SingleFileUpload";

export default function Upload() {
    return (
        <Container>
            <SingleFileUpload />
            <MultipleFileUpload />
        </Container>
    )
}