import React from 'react'
import Sort from '../sortComponents/ArrowSorting.png'
import Prime from '../images/icons/prime_no.png'
import Queen from '../images/icons/queen.png'
import Stack from '../Stackcomponents/Stack1.png'
import Queue from '../Queuecomponents/Queue2.png'
import {Link} from "react-router-dom";
import LinkedList from '../LinkedListcomponents/LinkedList.png'
import Search from '../Searchcomponents/search.png'

function banner2() {
  return (
    <div>
     <div class=" text-black text-center justify-content-">
     <h1 className='algo'>DATA STRUCTURES AND ALGORITHMS</h1>
     <div className="cardcontainer">
        
            <Link className='link' to="/sort">
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sort} alt="" />
                        <h2>Sort</h2>
                        <p>Selection , Bubble , Insertion , Quick</p> 
                    </div>
                    </div>  
            </Link>
            
           
            

           

            <Link className='link' to={"/Stack"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Stack} alt="" />
                        <h2>Stack</h2>
                    </div>
                    </div>  
            </Link>

            <Link className='link' to={"/Queue"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Queue} alt="" />
                        <h2>Queue</h2>
                    </div>
                    </div>  
            </Link>

            <Link className='link' to={"/LinkedList"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={LinkedList} alt="" />
                        <h2>LinkedList</h2>
                    </div>
                    </div>  
            </Link>


            <Link className='link' to={"/Search"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Search} alt="" />
                        <h2>Search</h2>
                    </div>
                    </div>  
            </Link>

            

    </div>
    </div>
    </div>
   
 
  )
}

export default banner2