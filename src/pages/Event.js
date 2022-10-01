import React, { useEffect } from 'react'

import { useParams } from 'react-router';


function Event() {
  const {id} = useParams()
  
  useEffect(() => {
    //makeAPIcall()
  })

  const makeAPIcall = async () => {
    try{
      const response = await fetch(`https://app.ticketmaster.com/partners/v1/events/${id}/availability?apikey=dA3X0sZr80HtgnoERWtHVk6y3BSvtXdA`)
      const json = await response.json()  
      console.log(json)     
      //setLoading(false)
      //setEvents(json._embedded.events)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      {id}
      {/*
      https://app.ticketmaster.com/partners/v1/events/${id}/availability?apikey=dA3X0sZr80HtgnoERWtHVk6y3BSvtXdA
      */}

    </div>
  )
}

export default Event
