const taskForm = {

    addAllEventListeners: function(){
      // on cible le formulaire
      let form = document.querySelector('.task--add');
      
      // on ajoute un écouteur d'évenement de type submit sur le document
      form.addEventListener('submit', taskForm.handleFormSubmit);
      
      

  
    },
  
    handleFormSubmit: function(event){
      // methode qui s'execute lorsque le form est submit
  
      event.preventDefault();
      console.log('blablabla');
      let taskTemplate = document.querySelector('#task--template');
      let taskToAdd = taskTemplate.content.cloneNode(true);
      console.log(taskToAdd);

      // on récupère l'input du formulaire'
      let input = document.querySelector('.input');
      console.log(input);

      //on récupère la valeur de l'input
      let taskName = input.value;
      console.log('la valeur de l\'input est :' + taskName);

      // on l'injecte dans taskToAdd
      taskToAdd.querySelector('.task__name-display').textContent = taskName ;
      console.log(taskToAdd);

      // on récupère la catégorie sélectionnée
      // on récupère d'abord le select
      let selectElement = document.querySelector(".task__category > .select > select");
      // puis on récupère la valeur sélectionnée
      let categoryName = selectElement.value;
      //console.log(selectedCategory);

      // on injecte la catégorie dans taskToAdd
      taskToAdd.querySelector('.task__category > p').textContent = categoryName ;
      console.log(taskToAdd);

      // on ajoute la nouvelle tâche au DOM
      document.querySelector('.tasks').prepend(taskToAdd);
  
      // on ajoute la tache a la LISTE DES TACHES (kind of)
      tasksList.initializeTasksFromDom();
  
      // on vide l'input
      input.value = "";

      // on remet le focus sur l'input
      input.focus();
      console.log(input);
    }
  
  
  
  
  
  }