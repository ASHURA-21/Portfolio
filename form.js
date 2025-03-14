function save(){
    let first = document.getElementById('validationDefault01').value;
    let second = document.getElementById('validationDefault02').value;
    let third = document.getElementById('exampleFormControlInput1').value;
    let fourth = document.getElementById('floatingSelect').value;
    let fifth = document.getElementById('exampleFormControlTextarea1').value;
    let sixth = document.getElementById('validationDefault03').value;
    let seventh = document.getElementById('inputZip').value;
    let eight = document.getElementById('formGroupExampleInput').value;
    let nine = document.getElementById('invalidCheck2').value;
    
    let data = {
      first_name: first,
      last_name: second,
      phone_number: third,
      service: fourth,
      job_description: fifth,
      city: sixth,
      zip: seventh,
      date: eight,
      terms: nine
    }
    // data.push(first)

    
    let data_string = JSON.stringify(data);
    
    let file = new Blob([data_string],{type:"text/plain"});
    let anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.txt";
    anchor.click();
    console.log('your data has been saved')
  }