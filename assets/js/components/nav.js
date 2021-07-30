const nav = {

  addAllEventListeners: function(){

    //ciblage du lien voir les archives
    let seeArchivedTasks = document.querySelector('.filters__task.filters__task--archived');
    seeArchivedTasks.addEventListener('click', nav.handleClickOnArchivedTasks);

  },

  handleClickOnArchivedTasks: function(event){
    let taskElementsList = document.querySelectorAll('.tasks .task');
    //console.log('quand on clique, app.displayArchives est égal à :' + app.displayArchives);

    if (app.displayArchives == false){
      //console.log('on rentre dans le app.displayArchives = false')
      document.querySelector('a.filters__choice').textContent = "Voir les tâches actives";
      app.displayArchives = true ;
      //console.log('app.displayArchives est maintenant égal à :' + app.displayArchives);
      for (taskElement of taskElementsList){
       
        if (taskElement.classList.contains('task--archive')){
          taskElement.style.display = 'block';
        } else {
          taskElement.style.display = 'none' 
        }
      }
    } 
    else {
      //console.log('on rentre dans le app.displayArchives = true')
      document.querySelector('a.filters__choice').textContent = "Voir les tâches archivées";
      app.displayArchives = false ;
      //console.log('app.displayArchives est maintenant égal à :' + app.displayArchives);
      for (taskElement of taskElementsList){
        if (taskElement.classList.contains('task--archive')){
          taskElement.style.display = 'none';
        } else {
          taskElement.style.display = 'block' 
        }
      }
    }

    
  },

  handleClick : function(event){
    console.log(app.displayArchives);
    if (app.displayArchives == false){
      app.displayArchives = true ;
      console.log(app.displayArchives);
    }else {
      app.displayArchives = false ;
      console.log(app.displayArchives);
    }
  }



}