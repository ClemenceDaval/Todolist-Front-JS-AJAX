const nav = {

  addAllEventListeners: function(){

    //ciblage du lien voir les archives
    let seeArchivedTasks = document.querySelector('.filters__task.filters__task--archived');
    seeArchivedTasks.addEventListener('click', nav.handleClickOnArchivedTasks);

  },

  handleClickOnArchivedTasks: function(event){

    document.querySelector('a.filters__choice').textContent = "Voir les tâches actives";
    app.displayArchives = true ;
    
  }



}