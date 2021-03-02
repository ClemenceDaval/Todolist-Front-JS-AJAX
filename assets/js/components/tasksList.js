console.log('%c' + 'tasksList.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');


const tasksList = {
  // initialisation de toutes les tâches présentent dans la page
  initializeTasksFromDom: function (){
    console.log('%c' + 'Methode initializeTasksFromDom executée depuis module tasksList', 'color: #f0f; font-size: 1rem; background-color:#fff');
 
    // dans une variable on va récupérerer TOUTES LES TACHES
    
    let taskElementsList = document.querySelectorAll('.tasks .task');
    //console.log(taskElementsList);
    // pour chacune des taches récupérées, nous allons 
    // enregistrer les event listeners qui nous interessent

    for(let taskElement of taskElementsList){
      // pour chaque TaskElement, nous utiliserons le module
      // task.js pour initialiser l'enregistrement des events
      task.addAllEventListeners(taskElement)
    }
  },

  addTaskInDOM : function(taskElement){
    // ajout du taskElement au début de la liste
    let taskListElement = document.querySelector('.tasks');
    // nous souhaitons que la tache s'affiche au DEBUT de la liste
    taskListElement.prepend(taskElement);

  }





}