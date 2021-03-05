console.log('%c' + 'taskForm.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');
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

    //appel de la méthode permettant de créer le DOM pour une nouvelle tâche
    let taskElement = task.createDOMElement(taskNewName, categoryId);

    // on prépare nos données 
    let data = {
        'title' : taskNewName,
        'categoryId' : categoryId, 
        'completion' : 0, // la tache est terminée
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
        body: JSON.stringify(data) // On ajoute les données, encodée en JSON, dans le corps de la requête
        };
    
        const url = 'http://localhost:8080/tasks';
    
        fetch(url, fetchOptions)
        .then(
            function(response){
                if (response.status == 201){
                    alert('tâche ajoutée');
                    //task.setId(taskElement, taskElement.id);
                    // appel de la méthode qui permet d'ajouter la tache dans le DOM (dans la LISTE DES TACHES)
                    tasksList.addTaskInDOM(taskElement);

                } else {
                    alert('l\'ajout de la tâche a échoué');
                }
            return response.json()
        })
        .then(
            function(data){
            console.log(data)
        });

    
  }

}