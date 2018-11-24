import React from 'react'
import photo from './photo.jpg'
import goldenwedding from './goldenwedding2.jpg'
import grave from './grave.jpg'

import Thumbnail from './../../../../components/Thumbnail'
import Layout from "../../../../components/Layout";

export default ( props ) => (
  <Layout {...props}>
    <h2>William Robson (born 1834)</h2>
    <em>Thank you to Clive Hodgson for providing all this information.</em>
    <p>Son of <a href="/family/robson">John Robson</a> and <strong>Jane Watson</strong>.</p>
    <p>William was born 9th November 1834 in Wincomb Lea (possibly Walker) and died 12th January 1914.</p>
    <p>He married Jane <strong>Wilkinson</strong> on May 25th 1857.</p>
    <Thumbnail src={photo} large={true}
       caption="Family portrait of William, wife Jane and family. Pictured is grandchild Arthur (son of John Thomas) and some of their children including son-in-law (Christopher Hill Hodgson). The back of the photo states it was taken at 'The Farm'.
       The location is a mystery. Do you know?"
    />
    <p>They had <strong>eight</strong> children - the first two were born in Blythe, Northumberland: <strong>John Thomas Robson
      </strong> (born 1859) and <strong>Margaret Robson</strong> (born 1860); <strong>Jane Ann
      </strong> (born 1863 - birthplace unknown); and then the latter 5 in Sunderland - <strong>Isabella</strong> Robson (1865), <strong>Barbara
      </strong>(1867), <strong>Mary Anna</strong> (1869), <strong>Emily
      </strong> (1872) and <strong>William</strong> (1879).</p>
    <p>John Thomas (known as Jack) married a lady called Dorothy. They had six children - all pictured below - Harry, Dorothy (Dot), Jennie, Winnie, Arthur (also pictured above) and Bertha.</p>
    <p>Jane Ann, married Christopher Hill <strong>Hodgson</strong> (a part time photographer) and had four children, William Robson Hodgson (WRH), Norah, Ena and Mary. All are pictured in the photo above.</p>
    <Thumbnail src={goldenwedding} large={true}
       caption="Family portrait of William and family sent to New Zealand in the 1920's."
    />
    <p>Isabella married a Garrow and had one child (Ella).</p>
    <p>Mary Anna (known as Nanna) married Jack Curry and had one known child Jack Curry Junior.</p>
    <p>Their youngest son, William married Amy and had two children, shown but names unknown.</p>
    <p>William Robson worked in the timber business (W. Robson & Co., East Side, South Dock, Sunderland). His two sons continued the business.</p>
    <p>In 1886 the Robson family were living at 6 Harold Street, Sunderland (from marriage certificate). The 1871 census still has them at this address. They had previously lived at 36 Henry Street (1861 census), sharing it with another family.
Harold Street lay off South Salem Street and was destroyed in WW2. Harold Square now stands on the location. According to the 1911 census return, the house in Harold Street had 9 rooms (on 3 floors). Plans show it to be terraced. Similar houses exist in adjacent street (2009).</p>
    <p>He died in 1914 a rich man leaving the very considerable sum of £24,058-6-0. His gross estate was worth (2009 £s) £1,710,000 by rpi or £8,950,000 using average earnings.</p>
    <Thumbnail src={grave} large={true}
       caption="Gravestone of William Robson."
    />
  </Layout>
);
