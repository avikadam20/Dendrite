import React from 'react'
import '../Style/MainContainer.css'

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import img1 from '../img/images.jpeg'

export default function MainContainer() {
  return (
    <Stack direction="horizontal" gap={3}>
        <div className='body1'>
       <Card style={{ width: '20rem' }}>
       <Card.Img  src={img1} />
       <Card.Body>
        <Card.Title>Bella Chao</Card.Title>
      </Card.Body>
      </Card>
      </div>
      <div>
       <Card style={{ width: '25rem' }}>
       <Card.Img  src={img1} />
       <Card.Body>
        <Card.Title>Bella Chao</Card.Title>
      </Card.Body>
      </Card>
      </div>
     </Stack>
  )
}
