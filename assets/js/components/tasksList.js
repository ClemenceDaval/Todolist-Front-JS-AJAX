console.log('%c' + 'tasksList.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');


const tasksList = {
  // initialisation de toutesl es tâches présentent dans la page
  initializeTasksFromDom: function (){
    console.log('%c' + 'Methode initializeTasksFromDom executée depuis module tasksList', 'color: #f0f; font-size: 1rem; background-color:#fff');
 
    // dans une variable on va récupérer TOUTES LES TACHES
    let taskElementsList = document.querySelectorAll('.tasks .task');
    //console.log(taskElementsList);

    // Pour chacune des taches récupérées, nous allons
    // enregistrer les event listeners qui nous interessent

    for(let taskElement of taskElementsList){
        // pour chaque TaskElement, nous utiliserons le module
        // task.js pour initialiser l'enregistrement des events
        task.addAllEventListeners(taskElement);
    }



    }
}