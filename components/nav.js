import React from 'react'
import Link from 'next/link'



const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a className="nav-link">Current Weather</a>
        </Link>
        <Link href='/forecast'>
          <a className="nav-link">Forecast</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        display: block;
        margin-right: 20px;
      }
    `}</style>
  </nav>
)

export default Nav
