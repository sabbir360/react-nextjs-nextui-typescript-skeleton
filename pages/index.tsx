import type {NextPage} from 'next'
import {Container, Row, Col, Card, Link, Text, Spacer} from '@nextui-org/react'

const Home: NextPage = () => {
    const title: string = 'React with NextJS + NextUI + TypeScript'
    return (
        <Container fluid>
            <title>{title}</title>
            <Spacer y={1}/>

            <Row gap={1}>
                <Text h1>Welcome to {title} Example/Tutorial</Text>
            </Row>

            <Row gap={1} justify="center">
                <Text h2>NextJS reference link to go further.</Text>
            </Row>
            <Spacer y={1}/>
            <Row gap={1}>
                <Col>
                    <Card hoverable clickable animated={true}>

                        <Card.Header>
                            <Link target="_blank" href="https://nextjs.org/docs/getting-started">
                                <Text h3>Documentation</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                NextJS Reference Documentations!
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable clickable animated={true} >

                        <Card.Header>
                            <Link target="_blank" href="https://nextjs.org/learn/foundations/about-nextjs">
                                <Text h3>Tutorial</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                You will learn through some basic page creation example.
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable clickable animated={true}>

                        <Card.Header>
                            <Link target="_blank" href="https://nextjs.org/learn/excel/typescript">
                                <Text h3>Typescript</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                All the hints required to use power of typescript into NextJS
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Spacer y={1}/>
            <Row gap={1} justify="center">
                <Text h2>NextUI reference link to go further.</Text>
            </Row>
            <Spacer y={1}/>
            <Row gap={1}>
                <Col>
                    <Card hoverable clickable animated={true}>

                        <Card.Header>
                            <Link target="_blank" href="https://nextui.org/docs/guide/getting-started">
                                <Text h3>Documentation</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                NextUI Reference Documentations!
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable clickable animated={true}>

                        <Card.Header>
                            <Link target="_blank" href="https://nextui.org/docs/components/">
                                <Text h3>Components</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                NextUI core components and its API and options to make your desired User experience.
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable clickable animated={true}>

                        <Card.Header>
                            <Link target="_blank" href="https://nextui.org/docs/theme/typescript">
                                <Text h3>Typescript</Text>
                            </Link>
                        </Card.Header>

                        <Card.Body>
                            <Text>
                                Typescript instructions to use NextUI
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
