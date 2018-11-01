import React from 'react'
import Layout from "../../../components/layout"

import intro from 'raw-loader!./intro.md'
import snippet from './../../../snippet'

export default ( props ) => (
  <Layout {...props}>
    <h1>The Robson's</h1>
    <h2>John Robson</h2>
    {snippet(intro)}
    <p>John Robson was born in 1791.</p>
    <p>He married <strong>Jane Watson</strong>, in approximately 1819 (a marriage is registered on 12th March 1820 which may be theirs).
&nbsp;Jane was born in 1798 in Hacey, Northumberland, England. I know very little about her heritage.</p>

<p>They had seven children - <a href="/family/robson/robert/">Robert Robson</a>, <strong>John</strong>, <strong>George Watson</strong>, <strong>Thomas</strong>, <strong>Jane</strong>, <strong>Isabella</strong> and <a href="/family/robson/William/">William</a>.</p>

<p>Their first child, <a href="/family/robson/robert">Robert Robson</a>, was my ancestor (my great great great grandfather). He lived until the age of 64. Two years later, John and Jane had a second son, <strong>John</strong>. Another two years passed before <strong>George Watson</strong> was born in 1824 and then two years later they had their forth child <strong>Thomas</strong>. Thomas died an infant two months after his first birthday. <strong>Jane</strong> and <strong>Isabella</strong> followed in 1829 and 1832 respectively and <strong>William</strong> was to be their last child, born in 1834.</p>

<p>The marriage certificate of his son, <a href="/family/robson/robert">Robert Robson</a> and Mary Holder Oxx states John Robson as father and deceased. His date of death is written in a <a href="/family/robson/files/BibleRecord">bible record</a> obtained by a descendent Clive Hodgson. He died January 12th 1836. He would have been 45 years of age.</p>
<p>This death was recorded in the parish records and his burial can be found in Long Benton parish records.
&nbsp; John was probably buried on 14th January 1836 in <a href="http://www.stbartholomew.org.uk/">St Bartholomew church Longbenton</a>.
</p>
<p>Only William, the youngest of the children and Robert, the oldest went on to marry (at least to my knowledge). <a href="/family/robson/robert">Robert
Robson</a> married Mary Holder Oxx 15th May 1842 and <a href="/family/robson/William/">William Robson</a> married <strong>Jane Wilkinson</strong> May 25th 1857.</p>
  </Layout>
);
