import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <Container>
            <h1 className="my-3">Dashboard</h1>
            <Row>
                <Col md={4}>
                    <Card className="my">
                        <Card.Body>
                            <Card.Title>Sigma School Analytic</Card.Title>
                            <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}