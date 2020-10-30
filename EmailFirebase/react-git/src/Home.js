import React, { useState } from 'react'
import Axios from 'axios'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Card,
    CardTitle,
    CardText
} from 'reactstrap'
const Home = () => {

    const [userName, setUserName] = useState('')
    const [repos, setRepos] = useState([])
    const [key] = useState('')
    const [secret] = useState('')

    const getProfile = () => {
        if (userName !== '') {
            Axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${key}&client_secret=${secret}`)
                .then(res => setRepos(res.data))
                .catch(err => console.log(err))
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>GiHub Search</h1>
                    <Input className="mt-5" onChange={(e) => setUserName(e.target.value)} />
                    <Button className="mt-2 btn btn-info" type="submit" onClick={getProfile}>Search</Button>
                    <Row>
                        {repos.length !== 0 && (
                            <img src={`${repos[0].owner.avatar_url}`} className="h-25 w-50 mt-5" />
                        )}
                    </Row>
                    <Row>
                        <p>{userName}</p>
                    </Row>
                </Col>
                <Col className="mt-5">
                    {repos.map(((profile, i) => {
                        return (
                            <Card body key={i}>
                                <CardTitle>{profile.name}</CardTitle>
                                <CardText><a>{profile.git_url}</a></CardText>
                            </Card>
                        )
                    }))}

                </Col>
            </Row>
        </Container>
    )
}

export default Home
