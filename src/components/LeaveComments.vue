<template>
  <div class="leaveComments">
    <div>
      <input type="text">
      <button>送出</button>
    </div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgW5dRMaPyjm_f2Q6_fo3UgLC7V2m-Ylg",
    authDomain: "ooxx-73434.firebaseapp.com",
    databaseURL: "https://ooxx-73434.firebaseio.com",
    projectId: "ooxx-73434",
    storageBucket: "",
    messagingSenderId: "559671550450",
    appId: "1:559671550450:web:e1b9a6f3459c2dbb"
  }
  firebase.initializeApp(firebaseConfig)
</script>
<script>
// @ is an alias to /src

export default {
  name: 'leaveComments',
  components: {
  }
}
</script>
