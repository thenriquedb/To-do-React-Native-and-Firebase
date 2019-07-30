import firebase from "./firebaseConnection";

class System {
  logout() {
    firebase.auth().signOut();
  }

  addAuthListener(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  getUserInfo(callback) {
    firebase
      .database()
      .ref("usuarios")
      .child(firebase.auth().currentUser.uid)
      .once("value", callback);
  }

  // Retorna
  getTodo(callback) {
    firebase
      .database()
      .ref("todo")
      .child(firebase.auth().currentUser.uid)
      .on("value", callback);
  }

  removemItem(item) {
    firebase
      .database()
      .ref("todo")
      .child(firebase.auth().currentUser.uid)
      .child(item.key)
      .remove();
  }

  addNewTask(title, category) {
    let todo = firebase.database().ref("todo");
    let key = todo.push().key;
    let date = new Date();

    let startDate =
      date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let startTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    todo
      .child(firebase.auth().currentUser.uid)
      .child(key)
      .set({
        key: key,
        title: title,
        category: category,
        done: false,
        startDate: startDate,
        startTime: startTime,
        endDate: ""
      });
  }

  checkTask(item) {
    let todo = firebase.database().ref("todo");
    let date = new Date();

    todo
      .child(firebase.auth().currentUser.uid)
      .child(item.key)
      .child("done")
      .set(item.done == true ? false : true);
  }
}

export default new System();
