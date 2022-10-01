import React from 'react'

import { useParams } from 'react-router';


function Event() {
  const {eventId} = useParams()

  return (
    <div>
      {eventId}
    </div>
  )
}

export default Event
