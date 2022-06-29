const model = {};

model.register = async (data)=>{
    
    try {
        await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
        
        firebase.auth().currentUser.updateProfile ({
            aname : data.firstName + " " + data.lastName,
            displayName: "0",
            
        });



        // gửi mail thông báo xác thực email đã đăng ký
        firebase.auth().currentUser.sendEmailVerification();
        // hiển thị thong báo cho người dùng là:
        alert('Your email has been registed, please check your email ');
        /// sau khi thông báo xong. => chuyển người dùng về màn hình đăng nhập
        view.setActiveScreen('loginScreen');
    }
    catch(err){
        console.log(err);
        alert(err.message);
    }

}

model.login = async (dataLogin)=>{
    try {
                const response = await firebase.auth()
                    .signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
                if (response.user.emailVerified === false) {
                    alert("please verify your email");
                }
                else {
                    model.currentUser = {
                        aname: response.user.aname,
                        displayName: response.user.displayName,
                        email: response.user.email,
                    }
                    console.log("logging in")
                    setTimeout(alert("Login successful"),1000)
                    

                    
                    console.log("...")
                    view.setActiveScreen("homeScreen")
                }
        
        
                
            } catch (err) {
                if (err.code == 'auth/user-not-found' || err.code == 'auth/invalid-email') {
                    document.getElementById('email-error').innerText = `*${err.message}`
                } else if (err.code == 'auth/wrong-password') {
                    document.getElementById('password-error').innerText = `*${err.message}`
                }
            }
}