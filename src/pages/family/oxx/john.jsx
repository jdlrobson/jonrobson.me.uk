import React from 'react';
import Layout from './../../../components/Layout'
import Thumbnail from './../../../components/Thumbnail';
import oxxcup from './oxxcup.jpg';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Oxx's</h1>
    <h2>John Oxx</h2>
    <p>There is a christening for John Oxe on: 20 JAN 1782 Saint Mary, Woodbridge, Suffolk, England. Likely to be the same one.</p>
    <p>Parents are <a href="/family/oxx">John Oxe</a> and <strong>Frances Ladbrook</strong>.</p>
    <p>There was a school for seafarers in Woodbridge which John may have attended.</p>
    <p></p>
    <p>John moved to Newcastle before 1806 and married <a href="/family/spearman/woodhouse">Woodhouse Spearman</a> at All Saints, Newcastle Upon Tyne, Northumberland, England.</p>
    <p>John and Frances and nine children, three of which died in their first year of life.
      The children were:<br/>
    <strong>John Amass</strong> (born and died 1806), <strong>
    George Spearman Oxx</strong> (born 1806), <strong>
    Hannah Frances OXX</strong> (born 1810), <strong>
    Amass Oxx</strong> (born and died 1812), <a href="/family/oxx/mary_holder">
    Mary Holder Oxx</a> (born 1814) <strong>
    Harriett Woodhouse OXX</strong> (born 1807) <a href="/family/oxx/hutchinsonmaxwell">
    Hutchinson Maxwell Oxx</a> (born 1820) <strong>
    Maxwell Oxx</strong> (born 1823) <strong>
    John William OXX</strong> (born and died 1826)
    </p>
    <p>His wife Frances died the same year as John William Oxx, so one might assume via childbirth.</p>
    <p>John was awarded a silver cup which is still in the family for being the first to bring coal from Newcastle to Woodbridge in 1811. The cup bears the inscription "The gift of the owners of Fandon Colliery to Captn. John Oxx of the Commerce of Woodbridge, for introducing the first cargo of Newcastle Wallsend Coals into that Port in August 1811." The Commerce of Woodbridge is the name of the ship.</p>
    <Thumbnail src={oxxcup} caption="This cup was awarded to John Oxx. Currently in posession of the Robson family." float="right" />
    <p>A John Oxx married Mary Harris in St. Mary, Warwick on 4 November 1828 which would have been 2 years after Woodhouse's death in 1826. If it is the same John how did he get to Warwick? Was he a widower on marriage? Did he have any further children?
    </p>
    <p>At time of marriage of <a href="/family/robson/robert">Robert Robson</a> and his daughter <a href="/family/oxx/mary_holder">Mary Oxx</a> and his death his occupation is stated as "Master Mariner".</p>
    <p>Spelling of the Oxx surname seems to have been standardised around 1800. Hence the change of surname from Oxe.</p>
    <p>He died of inflammation of the brain at 72 Sparling Street, Liverpool.</p>
  </Layout>
);
