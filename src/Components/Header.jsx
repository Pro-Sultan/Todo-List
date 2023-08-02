import React from 'react'
import img1 from '../assets/addbutton.png'
import img2 from '../assets/img3.jpg'

const Header = (props) => {
    const {open, dotask, item} = props
    return (
        <div style={{ backgroundColor: open ? "#f6f6f6" : "white"}}>
            <div className='header'>
                <h1>ToDo List</h1>
                <img src={img1} alt="" onClick={dotask} />
            </div>

            {item.length === 0 && <img src={img2} alt="" className='img' />}

        </div>
    )
}

export default Header
