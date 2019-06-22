const path = require('path')
const fs = require('fs');
const wiki = 'jonrobson.me.uk.wiki';

// Generate all family tree pages from wiki equivalents

 exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
     return new Promise((resolve, reject) => {
        fs.readdir(wiki, function(err, filenames) {
            filenames.forEach((filename) => {
                const uripath = filename === 'Home.md' ?
                    'index.html' :
                    filename.replace('_', '/').replace('.md', '');
                const content = fs.readFileSync(`${wiki}/${filename}`, 'utf-8' );

                // @todo uppercase?
                const title = filename === 'Home.md' ? false :
                    `The ${uripath.split('/')[0]}'s`;
                createPage({
                    path: `/family/${uripath}`,
                    component: path.resolve(`./src/templates/tree.jsx`),
                    context: {
                        title: title,
                        body: content
                    }
                } );
            } );
            resolve();
        } );
    });
};