import React from "react";
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import latestPosts from "./SortedPost";

function PostHomeList() {

    return    <>
        <Container fluid >
            <Row>
                <Col>
                    <div style={{marginTop:"1%"}}>
                        <h2>Latest Posts</h2>
                    </div>

                </Col>
            </Row>
        </Container>

        <Container fluid style={{marginTop:"1%"}}>



            <Row>
                {latestPosts.map((post)=>(
                    <Col md={2} key={post.id}>
                        <div>
                            <Card style={{marginTop:"5%"}}>
                                <Card.Img variant="top" src={post.img}/>
                                <Card.Body style={{padding:"5px"}}>
                                    <Card.Title>{post.title}</Card.Title>
                                    <hr/>
                                    <small style={{float:"left"}}><b>{post.date}</b></small>
                                    <small style={{float:"right"}}><b>{post.time}</b></small>

                                    <Card.Text>
                                        <div style={{marginTop:"16%"}}>
                                            <p style={{textAlign:"left"}}> {post.content}</p>
                                        </div>
                                        {/*<Button variant="primary" style={{float:"left"}}>Read More...</Button>*/}
                                        <Card.Link
                                            as={Link}
                                            // to={`/post/${post.id}?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}&time=${encodeURIComponent(post.time)}&content=${encodeURIComponent(post.content)}`}
                                            to={{
                                                // pathname: `/post/${post.id}`,
                                                pathname: `/post/${post.id}`,
                                                // state: { postData: post },
                                            }}
                                            style={{textDecoration:"none",float:"left"}}

                                        >Read more....</Card.Link>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
                <Col style={{marginTop:"1%",marginBottom:"1%"}}>
                    <Link to='/posts' style={{ textDecoration:"none", float:"right"}}> view all post..</Link>
                </Col>
            </Row>

        </Container>
    </>

}

export default PostHomeList;