//console.log('%c' + 'taskForm.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');

const taskForm = {

  addAllEventListeners: function(){
    // cibler le form
    let formElement = document.querySelector('.task--add form')
    // ajouter écouteur d'évenement sur "submit"
    formElement.addEventListener('submit', taskForm.handleFormSubmit);
  },

  handleFormSubmit: function(event){
    // empecher le comportement par défaut (envoie des datas/refresh de la page)
    event.preventDefault();
    // recupération du nom de la tache saisie par le user
    let taskNewNameElement = document.querySelector('.task__name-edit');
    //récupération de la valeur saisie par l'utilisateur
    let taskNewName = taskNewNameElement.value;

    let selectCategoriesElement = document.querySelector('.task__category select')
    let categoryId = selectCategoriesElement.value;

    // récupération des informations de la catégorie
    let categoryData = categoriesList.findById();

    taskForm.saveNewTaskIntoAPI(taskNewName, categoryId);
    
  },

  saveNewTaskIntoAPI: function(taskName, categoryId){

    // on prépare nos données 
    let dataForAPI = {
      'title' : taskName,
      'categoryId' : categoryId, 
      'completion' : 0, 
      'status' : 1,
      }
  
      // on prépare les entêtes HTTP (headers) de la requete
      // afin de spécifier que les données sont en json
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      // on consome l'API pour ajouter en BDD
        let fetchOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(dataForAPI) // On ajoute les données, encodée en JSON, dans le corps de la requête
      };
  
      const url = 'http://localhost:8080/tasks';
  
      fetch(url, fetchOptions)
      .then(
        function(response){
          if(response.status == 201){
            console.log('La tâche a été ajoutée')
            return response.json();
            errors.eraseError();
          } else {
            errors.displayError('L\'ajout de la tâche a échoué');
          }
    })
      .then(
        function(newTaskData){
        //console.log(newTaskData);
        // partie gérant la fabrication du DOM pour la tâche
        let categoryData = categoriesList.findById(newTaskData.category_id);
        let taskElement = task.createDOMElement(newTaskData.title, categoryData.name);
        task.setId(taskElement, newTaskData.id);
        tasksList.addTaskInDOM(taskElement);
      });
  },

}