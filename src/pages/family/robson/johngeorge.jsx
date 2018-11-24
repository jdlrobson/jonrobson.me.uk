import React from 'react'
import Layout from "../../../components/Layout"
import Thumbnail from './../../../components/Thumbnail';
import clock from './files/Clock1.jpg';
import clock2 from './files/Clock2.jpg';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Robson's</h1>
    <h2>John George Robson</h2>
    <p>Son of <a href="/family/robson/robert">Robert Robson</a> and <a href="/family/oxx/maryholder">Mary Holder Oxx</a>.
    He was my great great grandfather.</p>
    <p>John George was born 2nd March 1843 in Middlesex, York.</p>
    <p>During his life he worked as a roll turner in the steel works (1881 census) and he married <strong>Martha Isabell Lyall</strong>.</p>
    <p>Together, they had seven children, <strong>
    Isabell</strong> (1865 in Middlesbro) , <strong>
    Robert William</strong> (1867 in Middlesbro), <strong>
    Adam Lyall</strong> (1870 in Darlington, Durham), <strong>
    Margaret Elizabeth</strong> (1873 in Darlington), <strong>
    Mary Elizabeth</strong> (1876 in Darlington), <strong>
    Matthew Jackson</strong> (1878 in Middlesbro) and <strong>
    John George</strong> (1884 in Workington).</p>
    <p>Their daughter Margaret died aged 5, on 31st December 1878 in Darlington.</p>
    <p>John George lived in in Middlesbro, Darlington and Workington in his early life.
      In 1881 the census showed him as working as a Roll Turner in Steel Works.
      He is known to have worked at Rise Car Rolling Mills in the steel industry as he was
      presented with a clock upon leaving on 26th February 1876 (Rise Car being a suburb in Darlington).
    </p>
    <Thumbnail src={clock2} caption="This clock is currently in posession of the Robson family." float="right" />
    <Thumbnail src={clock} caption="The clock has an inscription." float="right" />
    
    <p>The Rolling Mills were involved in the production of puddled iron, the re-rolling of steel bars and the manufacture of special sections.
      Along with other firms in town, it made Darlington important enough to attract foreign visitors. The Chinese Imperial commissioners visited in April 1906
    </p>
    <p>By 1901, he had moved to Wales. The 1901 census shows him living with daughter <strong>Mary J</strong>, wife (Martha J) and a servant Maud Lloyd.
      Interestingly, sons Robert and Matthew are living at Culla House, Pembrey, Llanelly, East Carmarthen as boarders in a house owned by LLoyd. Probably not related, but I wondered if this was any relation to the servant.
    </p>
    <p>John George died 19th April 1923 in Port Talbot and was buried at the Chapel of Ease.</p>
  </Layout>
);
    /*
    View Record Maud Lloyd abt 1877 Shelton, Staffordshire, England Servant Aberavon Glamorgan
    View Record John G Robson abt 1843 Middlesbrough, Yorkshire, England Head Aberavon Glamorgan
    View Record Martha J Robson abt 1843 Cockfield, Durham, England Wife Aberavon Glamorgan
    View Record Mary J Robson abt 1876 Darlington, Durham, England Daughter Aberavon Glamorgan 
    */




