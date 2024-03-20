import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Row,Col} from "react-bootstrap";
import './HomePage.css';
import CategoryList from "../category/CategoryList";
import PostList from "../post/PostList";
import PostHomeList from "../post/PostHomeList";

function HomePage() {
    return (
        <>

       <Container fluid className="background-container">
           <Row>
               <Col>
                   <div className="text-overlay">
                       <h4>Laws play a vital role in promoting equality and justice. They establish a framework for treating all individuals fairly and impartially, regardless of factors such as race, gender, or socioeconomic status</h4>
                   </div>
               </Col>
           </Row>
       </Container>

           <CategoryList/>
            <PostHomeList />
        </>
    )
}
export default HomePage