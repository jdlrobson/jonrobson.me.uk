import React from "react";
import Thumbnail from "./../../components/Thumbnail";
import Layout from "./../../components/Layout";

import herbert from "./hunter/herbert.jpg";
import frieda from "./gartside/frieda.jpg";
import ianl from "./robson/ianrobsonyoung.jpg";
import joan from "./bagg/joan.jpg";
import motivation from "raw-loader!./motivation.md";
import snippet from "./../../snippet";
import ian_funeral_pdf from "./ianlyallrobson.pdf";

export default props => (
  <Layout {...props}>
    <h1>Family</h1>
    {snippet(motivation)}
    <Thumbnail
      src={herbert}
      width="137"
      height="200"
      small={true}
      caption="My grandfather, Herbert Hunter. Sadly passed away before I could meet him."
      float="left"
    />
    <Thumbnail
      small={true}
      width="144"
      height="200"
      src={frieda}
      caption="My grandmother, Frieda Gartside. I did meet her, but she died when I was young."
      float="right"
    />
    <h2>Hunter's and Gartsides</h2>
    <p>
      On my mother's side, I come from the Hunter and Gartside clan. Herbert{" "}
      <a href="hunter/">Hunter</a> (born 29th November 1912 in Ossett), died two
      years before I was born in March 1983 of a heart attack. He was a public
      health inspector.
    </p>
    <p>
      He married Frieda <a href="gartside/">Gartside</a> (born 9th February 1926
      in Holt). They lived in Macclesfield and later Leicester and Sheringham in
      Norfolk. Frieda would later die of lung cancer in January 1989 in
      Ashton-U-Lyme.
    </p>
    <p>
      Herbert and Frieda had four children -{" "}
      <a href="hunter/Anthony">Anthony</a> (27th January 1951), Kathryn (my
      mother, born 1955), Richard (born 1963) and Julia (born 1969).
    </p>
    <Thumbnail
      small={true}
      float="left"
      width="200"
      height="266"
      src={joan}
      caption="My grandmother, Joan Bagg. Lost to us in April 2013 but never forgotten!"
    />
    <Thumbnail
      src={ianl}
      float="right"
      small={true}
      width="161"
      height="215"
      caption="My grandfather, Ian Robson."
    />
    <h2>Robson's and Bagg's</h2>
    <p>
      I was quite fortunate on my father's side to be gifted two grandparents
      who have been a big part of my life. Joan <a href="bagg/">Bagg</a> was
      born on the 2nd August 1930 to Ivor Bagg (1905) and Violet Franklin. She
      had one sibling John Bagg.
    </p>
    <p>
      Ian Lyall <a href="/family/robson">Robson</a> born in 1928 in Port Talbot,
      married Joan on the 20th February 1954 (which would soon become my
      birthday).
    </p>
    <p>
      They had two children - my father - Andrew Lyall (born Oct 1956) and
      Sharman Louise (born May 1960), born in Brigend and Swansea respectively.
    </p>
    <p>
      Joan sadly passed away in April 2013 with her husband Ian, her brother
      John, her children and some of her grandchildren by her side.
    </p>
    <p>
      Five years later Ian, on the 2nd June 2018 was reunited with her. He also
      died peacefully with family at his side at the Princess Lodge Care Center,
      in Swindon. They both were loved fondly and will always be remembered.
    </p>
    <p>
      Both <a href={ian_funeral_pdf}>Ian</a> and Joan's funeral services took
      place at Shrivenham methodist church and they are both buried in St. Mary
      the Virgin Church in{" "}
      <a href="https://en.wikipedia.org/wiki/Ashbury,_Oxfordshire">Ashbury</a>.
    </p>
  </Layout>
);
