import firebase from 'firebase'

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
};
firebase.initializeApp(config);
export const taskRef = firebase.database().ref("todos");
// export const taskRef = databaseRef.child("todo");
// export const taskRef = databaseRef.child("todos");
export default taskRef;