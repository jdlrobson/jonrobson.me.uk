import React from 'react'
import Link from 'gatsby-link'
import './index.css'

import Tinderella from './Tinderella.pdf'

export default () => (
  <div>
    <h1>Writing</h1>
    <p>I've written stories since I was a child, on and off. There's nothing like a good book to escape the world and to dream and ponder how things might be in an infinite universe. <a href="https://www.opendemocracy.net/transformation/araz-hachadourian/ursula-k-leguin-calls-on-fantasy-and-sci-fi-writers-to-envision-alt">Ursula K Le Guin called on fantasy and sci fi writers to envision alternatives to capitalism</a>, shortly before she died. We are the words that we eat and I believe that everyone should write, even if only for their eyes.</p>
    <p>I have dozens of short stories that I wish will one day get published. My favorite authors and influences include <a href="https://en.m.wikipedia.org/wiki/Roald_Dahl">Roald Dahl</a>, <a href="https://en.m.wikipedia.org/wiki/Raymond_Carver">Raymond Carver</a>, <a href="https://en.m.wikipedia.org/wiki/Kurt_Vonnegut">Kurt Vonnegut</a> and <a href="https://en.m.wikipedia.org/wiki/Kurt_Vonnegut">Haruki Murakami</a>.</p>
    <h2>Non-fiction</h2>
    <ul className="listings">
      <li>
        <a href="https://medium.com/@dlyall/a-former-hitchhikers-introductory-guide-to-the-chinese-language-galaxy-29e92784d194">A former hitchhiker’s introductory guide to the Chinese language galaxy</a>
        Medium.com, March 2018.
      </li>
      <li>
        <a href="https://medium.com/@dlyall/an-april-rush-hour-in-san-francisco-e91249cd952d">An April Rush hour in San Francisco</a>
        Medium.com, April 2017.
      </li>
      <li>
        <a href="https://medium.com/@dlyall/the-state-of-this-europeans-union-ebd1154673ab">The State of this European’s Union
</a>
        Medium.com, June 2016.
      </li>
      <li>
        <a href="http://www.elephantjournal.com/2016/03/why-i-didnt-change-my-relationship-status-to-married/">Why I Didn't Change my Relationship Status to Married.</a>
        elephant JOURNAL, March 2016.
      </li>
      <li>
        <a href="https://journal.burningman.org/2013/09/black-rock-city/tales-from-the-playa/the-temple/">The Temple</a>
        Burning Man, September 2013.
      </li>
      <li>
        <a href="https://journal.burningman.org/2013/09/black-rock-city/tales-from-the-playa/the-man/">The Man</a>
        Burning Man, September 2013.
      </li>
      <li>
        <a href="https://journal.burningman.org/2013/09/black-rock-city/tales-from-the-playa/the-letter-e/">The Letter ‘E’</a>
        Burning Man, September 2013.
      </li>
      <li>
        <a href="http://blog.wikimedia.org/2013/05/29/wikipedia-nearby-beta/">Go on a Wikipedia scavenger hunt with Wikipedia Nearby</a>
        Wikimedia blog, May 2013
      </li>
      <li>
        <a href="http://blog.wikimedia.org/2012/03/26/wikipedia-mobile-gets-a-face-lift/">Wikipedia Mobile gets a face lift</a>
        Wikimedia blog, March 2012
      </li>
    </ul>
    <h2>Fiction</h2>
    <ul className="listings">
      <li>
        <a href={Tinderella}>Tinderella</a>
        Mash stories competition 12, October 2016.
      </li>
    </ul>
  </div>
);
