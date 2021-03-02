// module principal

const app = {

    init: function() {
      console.log('%c' + 'Methode init executée', 'color: #f0f; font-size: 1rem; background-color:#fff');
      // initialisation de la liste des taches
      tasksList.initializeTasksFromDom();
      //initialisation du formulaire
      taskForm.addAllEventListeners();
    }
  };
  
  document.addEventListener('DOMContentLoaded', app.init);
  
  console.log('%c' + 'Scrip.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');