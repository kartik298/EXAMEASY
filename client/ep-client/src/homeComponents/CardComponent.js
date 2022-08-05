import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./HomeComponents.css";
import Card1 from "./images/Card-1.jpg";
import Card2 from "./images/Card-2.jpg";
import Card3 from "./images/Card-3.jpg";
import Card4 from "./images/Card-4.jpg";

export default function CardComponent() {
return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src={Card1} />
    <Card.Body>
      <Card.Title className="card_title">Create Test</Card.Title>
      <Card.Text>
        ExamPlus allows you to create your customizable test, schedule the date
        and duration, and monitor the results.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Card2} />
    <Card.Body>
      <Card.Title className="card_title"> Unlimited Tests</Card.Title>
      <Card.Text>
        ExamPlus allows you to attempt unlimited tests and
        keep a track of the past and upcoming tests.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Card3} />
    <Card.Body>
      <Card.Title className="card_title">Score Records</Card.Title>
      <Card.Text>
        With ExamPlus, you can keep a track of the your scores and past records, all in one-place! 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Card4} />
    <Card.Body>
      <Card.Title className="card_title">Customer Support</Card.Title>
      <Card.Text>
        You can contact our customer team directly in case of queries.
        {<br/>}Write to us: ExamPlus@gmail.com
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
)
}