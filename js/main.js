(() => {
  'use strict';

  // Initialize Firebase
  const config = {
    apiKey: '<apiKey>',
    authDomain: '<authDomain>',
    projectId: '<projectId>',
  };

  firebase.initializeApp(config);
  
  const status = document.getElementById('status');
  
  const auth = firebase.auth();
  let me = null;

  const login = document.getElementById('login');
  const logout = document.getElementById('logout');
  
  login.addEventListener('click', () => {
    auth.signInAnonymously();
  });
  
  logout.addEventListener('click', () => {
    auth.signOut();
  });
  
  auth.onAuthStateChanged(user => {
    if (user) {
      me = user;
      status.innerHTML = `匿名ユーザー：${user.uid}`;
      login.classList.add('hidden');
      logout.classList.remove('hidden');
      return;
    }

    me = null;
    login.classList.remove('hidden');
    logout.classList.add('hidden');
    status.innerHTML = 'ログインしていません';
  });
})();