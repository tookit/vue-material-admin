import db from './config';
import Firebase from 'firebase';

let articlesRef = db.ref('articles');
let dataRef2 = db.ref('charts/vuedata/data');
let dataRef = db.ref('test_data');

export {
  articlesRef,
  dataRef,
  dataRef2
};