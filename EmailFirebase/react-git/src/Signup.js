import React, { useState, useContext } from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Input,

    CardFooter,
    Button
} from "reactstrap"
import { userContext } from './context/userContent'
import firebase from 'firebase/app'
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"




const Signup = () => {

    let context = useContext(userContext)

    const [email, setEmail] = useState('gauravbajaj837@gmal.com')
    const [password, setPassword] = useState('123456789')


    const handleFormSubmit = (e) => {

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                context.setUser({ email: res.user.email, id: res.user.uid })
            })
            .catch(err => toast(err.message, {
                type: "error"
            }))
        e.preventDefault()
        setEmail('')
        setPassword('')

    }


    if (context.user && context.user.id) {
        return <Redirect to="/Signin" />
    }



    return (
        <div>
            <Container className='text-center'>
                <Row>
                    <Col lg={6} className='offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleFormSubmit}>
                                <CardHeader className=''>SignUp here</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                            Email
									</Label>
                                        <Col sm={9}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='password' sm={3}>
                                            Password
									</Label>
                                        <Col sm={9}>
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='your password here'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" block color='primary' >
                                        Sign In
								</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup
