import fs from 'fs';
import path from 'path';
import {html as beautify} from 'js-beautify';

import  pages from './pages';
let dir = 'dist';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

Object.keys(pages).forEach((page) => {
  let markup = beautify(pages[page](), { indent_size: 2 });
  let fileName = path.join(process.cwd(), 'dist', page + '.html');

  fs.writeFile(fileName, markup, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log('created', fileName);
  });
})