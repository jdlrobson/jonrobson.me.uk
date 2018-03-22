import React from 'react'
import Link from 'gatsby-link'
import { SITE_TITLE } from './../../const'
import './index.css'

const Header = ( { className = '' } ) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className={className + ' header'} >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {SITE_TITLE}
        </Link>
      </h1>
    </div>
    <nav className={className + ' header__nav'}>
      <Link to="/writing/" className="nav__link">Writing</Link>
      <Link to="/travels/" className="nav__link">Roaming</Link>
      <Link to="/nostalgia/" className="nav__link">Family</Link>
      <Link to="/nostalgia/" className="nav__link">Nostalgia</Link>
    </nav>
  </div>
)

export default Header
