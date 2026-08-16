// js/admin-auth.js - For Firestore - No Secret in Code

const emailInput = document.getElementById('adminEmail');
const passInput = document.getElementById('adminPass');
const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        checkAdmin(user.uid);
    }
});

loginBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const pass = passInput.value.trim();
    if (!email || !pass) return showError("Email & Pass লিখো");

    loginBtn.innerText = "Checking...";
    loginBtn.disabled = true;

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(cred => checkAdmin(cred.user.uid))
        .catch(err => {
            showError(err.message);
            resetBtn();
        });
});

function checkAdmin(uid) {
    // Firestore থেকে চেক করবে
    firebase.firestore().collection('admins').doc(uid).get()
        .then(doc => {
            if (doc.exists && doc.data().isAdmin === true) {
                window.location.href = "admin-dashboard.html";
            } else {
                firebase.auth().signOut();
                showError("তুমি Admin না! Access Denied");
                resetBtn();
            }
        })
        .catch(() => {
            showError("Firestore Rules ঠিক করো ভাই");
            resetBtn();
        });
}

function showError(m) { errorMsg.style.display="block"; errorMsg.innerText=m; }
function resetBtn() { loginBtn.innerText="Login to Dashboard"; loginBtn.disabled=false; }
