
import { useEffect, useState } from “react”

export function ApiDemo()
{
 useEfffect(()=>
      fetch(“https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos />
     .then(function(response){
    return response.json();
})
 .then(function(data){
        setMars(data.photos);
})
 }),[your_dependencies])
     return(
           <div className=”container - fluid”>
              <h2>Mars Rover Photos </h2>
<table className=”table table-hover”>
    <thead>
    <tr>
     <th>Photos</th>
     </tr>
     </thead>
     <tbody>
     {
        matchersStandalone.map(item=>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.img_src} width="100" height="100" /></td>
                <td>{item.camera.full_name}</td>
                <td>{item.rover.name}</td>
            </tr>
        )
    }
    </tbody>
     </table>
     </div>
     )

}