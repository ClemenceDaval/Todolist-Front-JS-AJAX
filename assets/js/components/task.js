console.log('%c' + 'task.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');

const task = {

  addAllEventListeners: function(taskElement){

    // ciblage du nom de la tache
    let taskNameElement = taskElement.querySelector('.task__name-display');
    taskNameElement.addEventListener('click', task.handleClickOnTaskName)

    //ciblage du bouton d'édition de la tâche
    let taskEditButtonELement = taskElement.querySelector('.task__button--modify');
    taskEditButtonELement.addEventListener('click', task.handleClickOnEditButton);

    // ciblage de l'input d'édition du nom de la tache
    let taskInputNameELement = taskElement.querySelector('.task__name-edit');
    taskInputNameELement.addEventListener('blur', task.handleBlurOnTaskInputName);
    // on surveille les frappes de claviers (le moment où l'on relache la touche)
    taskInputNameELement.addEventListener('keyup', task.handleKeyUpOnTaskInputName);

  },

  handleClickOnTaskName: function(event){
    // récupération de l'élément ayant déclenché l'event
    let taskNameElement=event.currentTarget;
    console.log(taskNameElement);

    //récupération de l'élément ancêtre le plus proche ayant la classe task
    let taskElement = taskNameElement.closest('.task');
    console.log(taskElement);

    //une fois l'élement tâche récupéré nous lui ajoutons la classe CSS 'task--edit'
    taskElement.classList.add('task--edit');
    //ciblage de l'input d'édition de la tache
    let taskNameInputElement= taskElement.querySelector('.task__name-edit');
    taskNameInputElement.focus();

    // BONUS placer le curseur à la fin de l'input
    // récupérer la taille de texte dans l'input
    let length = taskNameInputElement.value.length;
    // on place le curseur à la fin de l'input 
    // on début une selection à la fin de l'input et on arrête la sélection à la fin de l'input
    taskNameInputElement.setSelectionRange(length, length);
  },

  handleClickOnEditButton: function(event){
    task.handleClickOnTaskName(event);
  },

  handleBlurOnTaskInputName: function(){
    //alert('blur');
     //récupération de la valeur saisie par l'utilisateur
     let taskInputNameElement = event.currentTarget;
     let taskNewName = taskInputNameElement.value;
     // récupération de l'élément "ancêtre" le plus proche
     // ayant la classe "task"
     let taskElement = taskInputNameElement.closest('.task');
     console.log(taskElement);

     // ciblage de l'élément affichant le nom de la tâche
     let taskNameElement = taskElement.querySelector('.task__name-display');
     // mise à jour du contenu texte de l'élément affcihant le nom de la tâche
     taskNameElement.textContent = taskNewName;

    // on retire la classe CSS task--edit de l'élement task
    taskElement.classList.remove('task--edit');
  },

  handleKeyUpOnTaskInputName: function(event){
    // event.key nous permet de récupérér le nom de la touche qui a été pressé
    if(event.key === 'Enter'){
      // on appelle le meme callback quie lorsuq'il y a un event blur sur l'input
      task.handleBlurOnTaskInputName(event);
    }
  }






}