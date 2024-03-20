import React from "react";
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FaPhone, FaWhatsapp} from "react-icons/fa6";


function ContactUs() {
    return (

        <>
            <Container fluid style={{ position:"relative"}}>
                <Row>
                    <Col xs={12} md={6} style={{background:"white"}}>
                        <div id="getinId" style={{textAlign:"left", marginLeft:"25%", marginTop:"8%"}}>
                            <div>
                                <h1>GET IN TOUCH.</h1>
                            </div>
                            <div style={{color:"gray",textAlign:"left", marginLeft:"10px"}}>
                                <h3>Want to get in touch? We'd love to hear from you.</h3>
                                <h3>Here's how you can reach us.</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src="/assets/contact-2.jpg" style={{ width:"100%", height:"100%", borderRadius:"30px 0 0 30px", objectFit:"cover"}}/>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ position:"relative"}}>
                <Row>
                    <Col xs={12} md={4} style={{marginTop:"3%"}}> {/* Adjust the column width for different screen sizes */}
                        <div > {/* Adjust the left margin */}
                            <Card id="card-style">
                                <Card.Body>
                                    <FaPhone style={{ fontSize: '48px', color: 'green', marginBottom: '1rem' }} />
                                    {/*<FontAwesomeIcon icon="fa-brands fa-whatsapp" />*/}

                                    <Card.Title>Talk to Customer Support</Card.Title>
                                    <Card.Text style={{textAlign:"center"}}>+255 657 458 535</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col xs={12} md={4} style={{marginTop:"3%"}} > {/* Adjust the column width for different screen sizes */}
                        <div > {/* Adjust the margins */}
                            <Card id="card-style">
                                <Card.Body>
                                    <FaWhatsapp style={{ fontSize: '48px', color: 'green', marginBottom: '1rem' }} />

                                    <Card.Title>Chart with Us.</Card.Title>
                                    <Card.Text style={{textAlign:"center"}}>+255 747 094 696</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={4} style={{marginTop:"3%"}} > {/* Adjust the column width for different screen sizes */}
                        <div> {/* Adjust the left margin */}
                            <Card id="card-style">
                                <Card.Body>
                                    <Card.Title>Contact Form</Card.Title>
                                    <Form>
                                        <div></div>
                                        <Form.Group className="mb-3 mt-4" controlId="form.ControlInput1" >
                                            <Form.Control type="text" placeholder="your names" required={true} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="form.ControlInput1" >
                                            <Form.Control type="email" placeholder="name@example.com" required={true} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="form.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} required={true}/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" style={{float:"left"}}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


                </Row>
            </Container>
        </>
        // <>
        //     <Container fluid style={{ position:"relative"}}>
        //
        //         <Row>
        //            <Col style={{background:"whitesmoke"}}>
        //                <div style={{textAlign:"left", marginLeft:"25%", marginTop:"8%"}}>
        //                    <div>
        //                        <h1>GET IN TOUCH.</h1>
        //                    </div>
        //                    <div style={{color:"gray",textAlign:"left", marginLeft:"10px"}}>
        //                        <h3>Want to get in touch? We'd love to hear from you.
        //                        </h3>
        //                        <h3>Here how you can reach us.</h3>
        //                    </div>
        //                </div>
        //
        //            </Col>
        //             <Col>
        //                <Image src="/assets/contact-2.jpg" style={{ width:"100%", height:"100%", borderRadius:"30px 0 0 30px", objectFit:"cover"}}/>
        //             </Col>
        //         </Row>
        //     </Container>
        //
        //     <Container fluid style={{ position:"relative", marginTop:"2%"}}>
        //
        //     <Row>
        //             <Col >
        //                 <div style={{marginLeft:"24%"}}>
        //                     <Card style={{width:"50%",background:"white",border:"none" }}>
        //                         <Card.Body>
        //                             {/*<Card.Img src="/assets/contact.jpg"></Card.Img>*/}
        //                             {/*<i className="bi bi-telephone-fill" style={{fontSize:"48px",color:"blue", marginBottom:"1rem"}}></i>*/}
        //                             <Card.Title>Talk to Customer Support</Card.Title>
        //                             <Card.Text style={{textAlign:"center"}}>+255 657 458 535</Card.Text>
        //                         </Card.Body>
        //                     </Card>
        //                 </div>
        //             </Col>
        //
        //             <Col>
        //                 <div style={{marginLeft:"20%"}}>
        //                     <Card style={{width:"70%",background:"white", border:"none"}}>
        //                         <Card.Body>
        //                             {/*<Card.Img src="/assets/contact.jpg"></Card.Img>*/}
        //                             {/*<i className="bi bi-telephone-fill" style={{fontSize:"48px",color:"blue", marginBottom:"1rem"}}></i>*/}
        //                             <Card.Title>Contact Form</Card.Title>
        //                             <Form>
        //                                 <div></div>
        //                                 <Form.Group className="mb-3 mt-4" controlId="form.ControlInput1" >
        //                                     <Form.Control type="text" placeholder="your names" required={true} />
        //                                 </Form.Group>
        //                                 <Form.Group className="mb-3 mt-4" controlId="form.ControlInput1" >
        //                                     <Form.Control type="email" placeholder="name@example.com" required={true} />
        //                                 </Form.Group>
        //                                 <Form.Group className="mb-3" controlId="form.ControlTextarea1">
        //                                     <Form.Control as="textarea" rows={3} required={true}/>
        //                                 </Form.Group>
        //                                 <Button variant="primary" type="submit" style={{float:"left"}}>
        //                                     Submit
        //                                 </Button>
        //                             </Form>
        //                         </Card.Body>
        //                     </Card>
        //                 </div>
        //             </Col>
        //         </Row>
        //         <Row>
        //             <Col  tyle={{marginBottom:"40%"}}>
        //                <div style={{marginLeft:"12%"}}>
        //                    <Card style={{width:"21%",background:"white",border:"none" }}>
        //
        //                        <Card.Body>
        //                            <Card.Title>Chart with Us.</Card.Title>
        //                            <Card.Text style={{textAlign:"center"}}>+255 747 094 696</Card.Text>
        //
        //                        </Card.Body>
        //                    </Card>
        //                </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </>
    );
}

export default ContactUs;