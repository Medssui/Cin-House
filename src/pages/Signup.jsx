import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Signup() {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
 
  return (
    <>
      <Card style={{backgroundColor: 'black', paddingTop:100}}>
        <Card.Body style={{width:500,marginLeft:400}}>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <br />
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br />
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <br />
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br />
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <br />
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br />
            <Button href="/login" style={{marginLeft:150}} disabled={loading}  type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login"> Log In</Link>
      </div>
    </>
  )
}