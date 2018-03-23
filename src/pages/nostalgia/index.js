import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../../components/Thumbnail'

import jonnysworld from './jonnysworld.png'
import showcase from './showcase.png'
import spgames from './spgames.png'

export default () => (
  <div>
    <h1>Web development nostalgia</h1>
    <h2>1999-2001 (spgames.co.uk)</h2>
    <p>
    <Thumbnail src={spgames} caption="1999: IFRAMES!" float="right" />I began making websites at the age of 14. The first one of note was <a href="https://web.archive.org/web/20000817233229/http://spgames.co.uk">spgames.co.uk</a>. Back then I thought Arial narrow and orange on black was a good idea. It used frames and had a hit counter and was suprisingly popular. I am actually more of a fan of South Park these days then back then, but thankfully my web design skills have improved since back then.
    </p>
    <h2>February 2003 (Jonny's world)</h2>
    <p>
    <Thumbnail src={jonnysworld} caption="2003: Comic Sans! MSN!" float="left" />
    This domain was born somewhere around 2004 as a site called "Jonny's world"'. I was young, I was a college student. I blogged about my life there. I posted photos (this was before Facebook was a thing) and I linked to things that I liked (this was before Twitter was a thing). In terms of web development I still thought frames were the best thing ever. In my own words it was a location for people to visit in hopefully a few years, months time or in a regular basis to give people memories of certain events.. such as the school leavers ball, a certain party, our time at school.". Sadly the web is not kind and due to a broken harddrive most of those images were lost. The wayback machine is the only way back into <a href="https://web.archive.org/web/20040421105442/http://www.jonrobson.me.uk:80/">that period of time</a>. Quite a few people making the transition from high school to college found it and I'd often get e-mails asking me for an insight to life at York University. I ended up creating a website for that purpose  and that purpose alone - yo10.co.uk ... but then Facebook came along and made it entirely redundant.
    </p>
    <h2>2008 - TiddlyWiki and notepadding</h2>
    <p>As I began work, I started to realise I needed to use this website as a brand. Twitter was now a thing. Google was now a big thing. I tore everything down and started using this homepage as a <a href="https://web.archive.org/web/20090417040242/http://jonrobson.me.uk:80/">notepad</a></p>
    <h2>2011 - resume</h2>
    <Thumbnail src={showcase} caption="2011: Maturity strikes!" float="right" />
    <p>Blogging ceased. Instead this webpage became a list of all the things I was doing. <a href="https://web.archive.org/web/20111105232840/http://www.jonrobson.me.uk:80/">A showcase</a> of sorts of what I was capable of. It went through a <a href="https://web.archive.org/web/20120106110557/http://jonrobson.me.uk:80/">few</a> iterations.</p>
    <h2>2017 - a redirect</h2>
    <p>Due to some hosting issues, living in the USA but being hosted in the UK, I ended up getting a new domain - <a href="https://jdlrobson.com">jon robson</a> domain. This taught me the hard way abou how fragile the web can be. Google had indexed my https version of my old site and thus I appeared to disappear from Google. My new page despite having all the same content, was now punished in the google rankings - it turns out age is a big factor in how you rank.</p>
    <h2>2018</h2>
    <p>Keen to try <a href="https://www.netlify.com/">netifly</a> and play with <a href="https://www.gatsbyjs.org">gatsby.js</a>, I resurrect my old domain. I'll let you know what I learn about Googl rankings in the process... I spend some time reflecting.</p>
  </div>
);
