import React from 'react'
import "../Style/Header.css";

export default function Header() {
    return (
        <div className='head'>
            <div className='content'>
                <h1>Your Favourite tunes</h1>
                <h3>All </h3><i class="bi bi-sun-fill"></i> <h3>and all</h3><i class="bi bi-moon-fill"></i>
            </div>
        </div>
    )
}
