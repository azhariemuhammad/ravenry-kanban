import firebase from 'firebase'
require('dotenv').config()

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID
};
var fire = firebase.initializeApp(config);
export default fire;