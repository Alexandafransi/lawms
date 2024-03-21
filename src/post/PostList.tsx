import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Form, Card, Spinner, Pagination} from "react-bootstrap";
import './PostList.css';
import postData from "./PostData.json";


function PostList() {


    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12
    const [loading, setLoading] = useState(true);
    // fetch data from json file
    useEffect(() => {

        setTimeout(()=>{
            setLoading(false);
        },1000);
    }, []);

    const totalPosts = postData.length;
    const totalPages = Math.ceil(totalPosts/ postsPerPage);
    const paginate = function (pageNumber:number) {
        return setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsPost = indexOfLastPost - postsPerPage;
    const currentPosts = postData.slice(indexOfFirsPost,indexOfLastPost);
    return(
        <>
            <Container fluid id="background-image"  style={{position:"relative"}}>
                <Row>
                    <Col>
                        <div className="text-overlay">
                            <h4>Laws play a vital role in promoting equality and justice. They establish a framework for treating all individuals fairly and impartially, regardless of factors such as race, gender, or socioeconomic status</h4>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container fluid style={{marginTop:"2%"}}>
                <Row>
                    <Col md={6} id="column1">
                        <h4>Post List</h4>
                    </Col>
                    <Col md={2} style={{ paddingRight: "5px", paddingLeft: "0px" }} id="column2">
                        <Form.Control type="date" placeholder="date"/>
                    </Col>

                    <Col md={2} style={{ paddingRight: "5px", paddingLeft: "5px" }} id="column3">
                        <Form.Select aria-label="sort-post">
                            <option>Sort Post by Date</option>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </Form.Select>
                    </Col>

                    <Col md={2} style={{ paddingRight: "0px", paddingLeft: "5px" }} id="column4">
                        <Form.Control type="text" placeholder="search by title or category..."/>
                    </Col>

                </Row>
            </Container>

            <Container fluid style={{marginTop:"3%"}}>
                <Row>
                    {
                        loading ? (
                            <div style={{marginLeft:"5%"}}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>

                        ):(
                            currentPosts.map(post=>(
                                <Col md={2} key={post.id}>
                                    <div>
                                        <Card style={{marginTop:"5%"}}>
                                            <Card.Img variant="top" src="/assets/law3.jpg"/>
                                            <Card.Body style={{padding:"5px"}}>
                                                <Card.Title>{post.title}</Card.Title>
                                                <hr/>
                                                <small style={{float:"left"}}><b>{post.date}</b></small>
                                                <small style={{float:"right"}}><b>{post.time}</b></small>

                                                <Card.Text>
                                                    <div style={{marginTop:"16%"}}>
                                                        <p style={{textAlign:"left"}}> Lorem ipsum dolor sit amet consectetur. Pharetra enim orci
                                                            pellentesque maecenas id vitae
                                                            scelerisque facilisis. In sapien
                                                            consectetur fringilla ornare.</p>
                                                    </div>
                                                    {/*<Button variant="primary" style={{float:"left"}}>Read More...</Button>*/}
                                                    <Card.Link href={`/post/${post.id}`} style={{textDecoration:"none",float:"left"}}>Read more....</Card.Link>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            ))
                        )
                    }

                </Row>

                <Row>
                    <Col style={{marginTop: "2%"}}>
                        <Pagination className="justify-content-center">
                            <Pagination.Prev onClick={()=>paginate(currentPage-1)} disabled={currentPage===1}/>
                            {[
                                ...Array(totalPages)
                            ].map((_,index)=>(
                                <Pagination.Item key={index+1} active={index+1 === currentPage} onClick={()=>paginate(index+1)}>{index+1}</Pagination.Item>
                            ))
                            }
                            <Pagination.Next onClick={()=>paginate(currentPage+1)} disabled={currentPage ===totalPages}/>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PostList;