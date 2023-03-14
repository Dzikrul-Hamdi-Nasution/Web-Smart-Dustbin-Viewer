var config = {
    apiKey: "AIzaSyC5-dPY96cuswtccxfBeEJ28Om0F5bCwdE",
    authDomain: "smart-dustbin-viewer.firebaseapp.com",
    databaseURL: "https://smart-dustbin-viewer-default-rtdb.firebaseio.com",
    projectId: "smart-dustbin-viewer",
    storageBucket: "smart-dustbin-viewer.appspot.com",
    messagingSenderId: "403312373321",
    appId: "1:403312373321:web:f9647210b99dadb0aa9998",
    measurementId: "G-QNYQK8TK8Q"
  };
  firebase.initializeApp(config);
  

  
  $(document).ready(function() {
    
    cek_organik();
    cek_non_organik();
    
  });



  //img.style.visibility = 'hidden';

  function cek_organik() {
    var img10_organik = document.getElementById('level-10');
    var img9_organik = document.getElementById('level-9');
    var img8_organik = document.getElementById('level-8');
    var img7_organik = document.getElementById('level-7');
    var img6_organik = document.getElementById('level-6');
    var img5_organik = document.getElementById('level-5');
    var img4_organik = document.getElementById('level-4');
    var img3_organik = document.getElementById('level-3');
    var img2_organik = document.getElementById('level-2');
    var img1_organik = document.getElementById('level-1');
    
    var messagesRef = firebase.database().ref("organik");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        $("#organik").val(data+ " %");
        if(data==10){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'hidden';
            img2_organik.style.visibility = 'hidden';
            img1_organik.style.visibility = 'visible';
        }
        if(data==20){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'hidden';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==30){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==40){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==50){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==60){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==70){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==80){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==90){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'visible';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==100){
            img10_organik.style.visibility = 'visible';
            img9_organik.style.visibility = 'visible';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
          
    });

       

   

   

  



}

function cek_non_organik() {

    var img10_organik = document.getElementById('level-10-a');
    var img9_organik = document.getElementById('level-9-a');
    var img8_organik = document.getElementById('level-8-a');
    var img7_organik = document.getElementById('level-7-a');
    var img6_organik = document.getElementById('level-6-a');
    var img5_organik = document.getElementById('level-5-a');
    var img4_organik = document.getElementById('level-4-a');
    var img3_organik = document.getElementById('level-3-a');
    var img2_organik = document.getElementById('level-2-a');
    var img1_organik = document.getElementById('level-1-a');

    var messagesRef = firebase.database().ref("non-organik");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        $("#non_organik").val(data+ " %");
        if(data==10){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'hidden';
            img2_organik.style.visibility = 'hidden';
            img1_organik.style.visibility = 'visible';
        }
        if(data==20){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'hidden';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==30){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'hidden';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==40){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'hidden';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==50){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'hidden';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==60){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'hidden';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==70){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'hidden';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==80){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'hidden';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==90){
            img10_organik.style.visibility = 'hidden';
            img9_organik.style.visibility = 'visible';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
        if(data==100){
            img10_organik.style.visibility = 'visible';
            img9_organik.style.visibility = 'visible';
            img8_organik.style.visibility = 'visible';
            img7_organik.style.visibility = 'visible';
            img6_organik.style.visibility = 'visible';
            img5_organik.style.visibility = 'visible';
            img4_organik.style.visibility = 'visible';
            img3_organik.style.visibility = 'visible';
            img2_organik.style.visibility = 'visible';
            img1_organik.style.visibility = 'visible';
        }
          
    });

}

    
    


    







  


