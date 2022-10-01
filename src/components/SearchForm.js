import { useState } from "react"
import { Link } from "react-router-dom"

function SearchForm() {
  const [showMore,setShowMore] = useState(false)
  const [keyword,setKeyword] = useState("")
  const [city,setCity] = useState("")
  const [quantity,setQuantity] = useState(5)
  const [events,setEvents] = useState([])
  const [loading,setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    makeAPIcall(keyword,city,quantity)
    setKeyword("")
    setQuantity(5)
  }

  const makeAPIcall = async (k,c,qty) => {
      try{
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=${qty}&apikey=dA3X0sZr80HtgnoERWtHVk6y3BSvtXdA&keyword=${k}&city=${c}`)
        const json = await response.json()       
        setLoading(false)
        setEvents(json._embedded.events)
      } catch(error) {
        console.log(error)
      }
  }

  return (
    <div>
      <div className="w-full max-w-xs">
      <h3 className="text-xl mb-3">Search for events:</h3>
      <form onSubmit={handleSearch} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="keyword">Search: </label>
            <input 
                onChange={event => setKeyword(event.target.value)}
                value={keyword} 
                type="text" 
                id="keyword" 
                name="keyword" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"/>
            <br/>
            {showMore ? (
              <>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="keyword">City: </label>
                <input 
                  onChange={event => setCity(event.target.value)}
                  value={city} 
                  type="text" 
                  id="city" 
                  name="city" 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"/>

                <label className="block text-gray-700 text-sm font-bold mb-2" for="qty">Quantity: </label>
                <input 
                  onChange={event => setQuantity(event.target.value)}
                  value={quantity}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                  type="number" 
                  id="quantity" 
                  name="quantity" 
                  min="1" 
                  max="10"/>
              </>):(<></>)
            }
            
            <a className="font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=>setShowMore(!showMore)}>{showMore ? <div>Show less parameters -</div> : <div>Show more parameters +</div>}</a>
            <input className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Search"/>
        </form> 
    </div>
    {loading ? <p>Loading...</p>:<p></p>}
    <div>
      {events.map((event) => (
        <Link to={`/${event.id}`}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center flex relative space-x-2">
              <img 
                  src={event.images[0].url} 
                  className="mr-4 h-10 w-12 object-fil rounded-lg"/>
              <div>
                {event.name}
                <p className="text-sm text-gray-500">Ticket Master</p>
              </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default SearchForm
