console.log('%c' + 'tasksList.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');


const tasksList = {

    apiBaseUrl: 'https://benoclock.github.io/S07-todolist/',

    loadTasksFromAPI : function(){
        console.log('loadTasksFromAPI appelé');
        // on déclare nos options pour la requête
        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
  
        // on déclare la route
        let endpoint = tasksList.apiBaseUrl + 'tasks.json' ;
        console.log(endpoint);

        // on envoie la requête
        fetch(endpoint, fetchOptions)
            // on récupère la réponse et on la traite avec une fonction anonyme
            .then(
                function(jsonResponse){
                    // on convertit la réponse reçu en un objet que l'on renvoit
                    //console.log(jsonResponse.json());
                    return(jsonResponse.json());
                }
            )
            .then(
                function(javaObject){
                    
                    console.log(javaObject[0]);

                    // je cible la div qui contient toutes les tasks
                    let tasks = document.querySelector('.tasks');   
                    
                    //je cible mon template que je vais devoir duppliquer pour chaque tache
                    let template = document.getElementById('task-template');

                    // pour chaque tâche, je vais dupliquer le template et le remplir et l'ajouter au DOM
                    // je boucle donc sur mon objet
                    for(let i = 0; i <javaObject.length ; i++){
                        // a chaque tour 
                        // je dupplique mon template
                        let templateForTask = template.content.cloneNode(true);

                        // je récupère une tache
                        let currentTask = javaObject[i];

                        // je remplis mon template avec le titre, la completion et la categorie
                        // pour le titre :
                        let currentTaskTitle = currentTask.title;
                        templateForTask.querySelector('.task__name-display').textContent = currentTaskTitle;
                        templateForTask.querySelector('.task__name-edit').setAttribute('value', currentTaskTitle);

                        // pour la catégorie :
                        let currentTaskCategory = currentTask.category.name;
                        templateForTask.querySelector('.task').dataset.category = currentTaskCategory;
                        templateForTask.querySelector('.task__category p').textContent = currentTaskCategory;

                        // pour la completion (taskbar) :
                        let currentTaskCompletion = currentTask.completion;
                        templateForTask.querySelector('.progress-bar__level').setAttribute('style', 'width:' + currentTaskCompletion + '%');

                        // j'ajoute le template au DOM
                        tasks.appendChild(templateForTask);
                    }

                    // // je clone selectCategories pour pouvoir l'insérer à 2 endroits du DOM
                    // let selectCategories2 = selectCategories.cloneNode(true);

                    // // j'ajoute le select à la première div
                    // select1.append(selectCategories);
                    // select2.append(selectCategories2);

                    // // je rajoute une class filters__choice sur le select2
                    // select2.querySelector('select').classList.add('filters__choice');
                },

            )

    },
            



   


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