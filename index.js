$( document ).ready(function() {


  function Person(head,hat,eyes, nose, mouth) {
            this.head = head;
            this.hat = hat;
            this.eyes = eyes;
            this.nose = nose;
            this.mouth = mouth;
            
            $("#result").append(head.clone().append(hat.clone(),eyes.clone(),nose.clone(),mouth.clone()));
          }


  $("#submit").click(function(){
    let head = $("input[name='head']:checked" ).val();
    if (head === 'head1') {
      head = $("#one");
    } else if (head === 'head2') {
      head = $("#two");
    } else if (head === 'head3') {
      head = $("#three");
    }
    let hat = $("input[name='hat']:checked" ).val();
    if (hat === 'hat1') {
      hat = $("#hat1");
    } else if (hat === 'hat2') {
      hat = $("#hat2");
    } else if (hat === 'hat3') {
      hat = $("#hat3");
    } else if(hat === 'hat4'){
      hat = $("#hat4");
    }

    let eyes = $("input[name='eyes']:checked" ).val();
    if (eyes === 'eyes1') {
      eyes = $("#eyes1");
    } else if (eyes === 'eyes2') {
      eyes = $("#eyes2");
    } else if (eyes === 'eyes3') {
      eyes = $("#eyes3");
    } else if(eyes === 'eyes4') {
      eyes = $("#eyes4");
    }

    let nose = $("input[name='nose']:checked" ).val();
    if (nose === 'nose1') {
     nose = $("#nose1");
    } else if (nose === 'nose2') {
      nose = $("#nose2");
    } else if (nose === 'nose3') {
      nose = $("#nose3");
    } else if(nose === 'nose4'){
      nose = $("#nose4");
    }

    let mouth = $("input[name='mouth']:checked" ).val();
    if (mouth === 'mouth1') {
     mouth = $("#mouth1");
     } else if (mouth === 'mouth2') {
      mouth = $("#mouth2");
     } else if (mouth === 'mouth3') {
      mouth = $("#mouth3");
     } else if(mouth === 'mouth4') {
      mouth = $("#mouth4");
     }

     if (head === undefined) {
       alert('You must first select a head')
     }
     if (hat === undefined || eyes === undefined || nose === undefined || mouth === undefined) {
       alert('You must select one of each type of images')
     }

    let person1 = new Person(head,hat,eyes,nose,mouth);
  
  });

  $("#reset").click(function(){
    $("#result").empty();
})


})


