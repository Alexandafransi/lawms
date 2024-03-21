import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import postData from "./PostData.json";
import latestPosts from "./SortedPostDesc";



function PostDetail() {

    const {id} = useParams();
    const location = useLocation();
    const [post, setPost] = useState<any>(null);
    const [recentPosts, setRecentPosts] = useState<any[]>([]);

    useEffect(()=>{
        let matchedPost;
        if (typeof id === "string") {
             matchedPost = postData.find((post) => post.id === parseInt(id));
        }

        setPost(matchedPost);
    },[id]);


    useEffect(() => {
        // Filter out the current post from the recent posts
        if (typeof id === "string") {
            const filteredPosts = latestPosts.filter((post) => post.id !== parseInt(id));
            setRecentPosts(filteredPosts);
        }
    }, [latestPosts, id]);
    return (
       <>
           <Container fluid style={{backgroundColor:"#FAF6F6", height:"auto"}}>
               <Row>
                   {/* Left column with a single card */}
                   <Col md={6} xs={12} sm={12} style={{marginTop:"1%", marginBottom:"2%"}}>
                       {

                           post &&(
                               <Card className="card-detail" style={{ width: '80%', border:"none" }}>
                                   <Card.Img variant="top" src="/assets/law3.jpg" />
                                   <Card.Body>
                                       <Card.Title>{post.title}</Card.Title>
                                       <hr/>
                                       <small style={{float:"left"}}>{post.date}</small>
                                       <small style={{float:"right"}}>{post.time}</small>
                                       <Card.Text id="card-text-detail">
                                           <div style={{marginTop:"8%"}}>
                                               <p style={{textAlign:"left"}}> {post.content} In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                                           </div>
                                       </Card.Text>
                                       {/*<Button variant="primary">Go somewhere</Button>*/}
                                   </Card.Body>
                               </Card>


                           )


                       }
                   </Col>
                   {/* Right column with five cards listed vertically */}
                   <Col className="column-recent-post" md={5} style={{marginTop:"1%",marginLeft:"8%"}}>
                       <h4 style={{float:"left"}}>Recent Posts</h4>
                       <div style={{marginTop:"5%"}} id="empty-div"></div>
                       {recentPosts.map((posts) => (
                           <Card className="mb-3" style={{ width: '100%' }}>
                               <div className="row">
                                   <div className="col-md-4">
                                       <Card.Img src={posts.img} style={{width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center"}} alt="Card image" />
                                   </div>
                                   <div className="col-md-8">
                                       <Card.Body>
                                           <Card.Title>{posts.title}</Card.Title>

                                           <small style={{float:"left"}}><b>{posts.date}</b></small>
                                           <small style={{float:"right"}}><b>{posts.time}</b></small>

                                           <Card.Text>
                                               <div style={{marginTop:"10%"}}>
                                                   <p style={{textAlign:"left"}}>{posts.content}.</p>
                                               </div>
                                               <Card.Link href={`/post/${posts.id}`} style={{textDecoration:"none",float:"left"}}>Read more....</Card.Link>

                                           </Card.Text>
                                           {/*<Button variant="primary">Read More</Button>*/}
                                       </Card.Body>
                                   </div>
                               </div>
                           </Card>
                       ))}
                   </Col>
               </Row>
           </Container>

       </>
    );
}

export default PostDetail;