import React from 'react';
import Card from 'react-bootstrap/Card';

const UserList = ({user}) => {
   

  return (
    <div>
  <Card style={{ width: '18rem' ,margin: '20px'}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.usename}</Card.Subtitle>
        <Card.Text>
          {user.email}
         </Card.Text>
         <Card.Text>
          {user.phone}
         </Card.Text>
      </Card.Body>
      </Card>
    
    </div>
  )
}

export default UserList