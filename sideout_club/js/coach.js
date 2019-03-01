{
    const coach = new URL(window.location.href).searchParams.get('coach')
    fetch(`coach/${coach}.json`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          // add templating here using json  
          console.log(json.name)
          console.log(json.description)

          //where is = name 
          var name = document.getElementById("coachName");
            name.innerHTML = json.name;
        })
        .catch(error => console.error(error))
}
