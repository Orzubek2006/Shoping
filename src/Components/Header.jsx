import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = ({ setSearch }) => {
  return (
    <div>
        <header>
            <div className="wrapper">
                <img className='img_one' src="https://www.theopennotebook.com/wp-content/uploads/2022/02/TON-logo-stacked-RGB-768x219.png" alt="" />
                <div className="search_box">
                    <input type="search" className='search' onChange={(e) => setSearch(e.target.value)}/>
                    <button className='btn'><i className='bx bx-search'></i></button>
                </div>
                <div className="box">
                    <Link className='link_1' to={`Like`}><i className='bx bxs-heart'></i></Link>
                    <Link className='link_1' to={`shop`}><i className='bx bxs-shopping-bag'></i></Link> 
                </div>
            </div>
        </header>

    </div>
  )
}

export default Header