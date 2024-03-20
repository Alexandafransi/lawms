import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import { Card, Carousel, Col, Row} from "react-bootstrap";
import './Category.css';


function CategoryList() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex:any)=>{
        console.log(selectedIndex);
        setIndex(selectedIndex);
    }
    // const handleIndex = (index: any) =>{
    //     console.log(index)
    // }
    return (
        <>
            <Container fluid id="category-list">
                <Row>
                    <Col>
                        <div id="title-category">
                            <h2>Categories</h2>
                        </div>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div id="category-card">
                            {/* For md and larger screens */}
                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                interval={null /* Set interval to null to stop auto sliding */}
                                indicators={false} // Set indicators to false to hide them
                                controls={true}    // Set controls to true to show next and previous arrows
                                wrap={false}       // Set wrap to false to prevent wrapping from the last to the first item
                                slide={true}       // Enable sliding behavior
                                id="small-size"
                                style={{display:"none"}}
                                // className="d-block d-md-none" // Hide for xs, sm screens
                            >
                                {[1, 2, 3, 4, 5,6,7].map((item) => (
                                    <Carousel.Item key={item}>
                                        <Row>
                                            <Col style={{ width: '100%' }} >
                                                <Card>
                                                    <Card.Img variant="top" src={`https://via.placeholder.com/800x400?text=${item}`} />
                                                    <Card.Body>
                                                        <Card.Title>Criminal cases {item}</Card.Title>
                                                        <Card.Text style={{textAlign:"left"}}>
                                                            Criminal cases involve enforcing public codes of behavior, which are codified in the laws of the state. In criminal cases, the government prosecutes individuals                                                        </Card.Text>
                                                        {/*<Button variant="primary">More..</Button>*/}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            {/* For sm and xs screens */}
                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                interval={null}
                                indicators={false}
                                controls={true}
                                wrap={false}
                                slide={true}
                                id="large-size"
                                style={{display:"none"}}
                                // className="d-none d-md-block" // Hide for md and larger screens
                            >
                                    <Carousel.Item>
                                        <Row>
                                            {[1, 2, 3,4,5,6].map((innerItem) => (
                                                <Col key={innerItem} style={{ width: '100%' }} >
                                                    <Card>
                                                        <Card.Img variant="top" src={`https://via.placeholder.com/800x400?text=${innerItem}`} />
                                                        <Card.Body>
                                                            <Card.Title>
                                                                Divorce {innerItem}</Card.Title>
                                                            <Card.Text style={{textAlign:"left"}}>


                                                                Divorce, legal separation, and custody disputes fall under civil litigation. The court rules on breaking the union, sharing of the marital assets, child ...                                                            </Card.Text>
                                                            {/*<Button variant="primary">More..</Button>*/}
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>            </Container>
        </>
    )
}
export default CategoryList;