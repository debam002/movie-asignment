import React,{useState} from 'react';
import {orderBy} from "lodash";
import data from './movies.json'


function Movie() {
    const [movieList]=useState(data)
    const {components}=movieList;
    return (
        <div>
            {
               components?.map((it, i) => {
                    return (
                        <div className= 'dd' style={{ display:'flex' }}>
                            {
                                orderBy(it.items,'releaseDate').map((list,j) =>
                                
                                    <div  >
                                        <img style={{padding:'10px'}} src={list.imageUrl} height="400px" width="240px" alt="" />
                                        
                                        <h2>{j+1}</h2>
                    
                                         <h3>{list.title}</h3>
                                         <h3>{list.releaseDate}</h3>
                                        <p>{list.synopsis}</p>
                                    </div>
                                )
                            }
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Movie
