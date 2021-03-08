const errors = {

  displayError: function(message) {
    // 
    let errorDiv = document.querySelector('.errors');
    errorDiv.textContent = '' ;
    errorDiv.textContent = message ;
    errorDiv.style.color = 'red' ;
  },

  eraseError: function(){
    let errorDiv = document.querySelector('.errors');
    errorDiv.textContent = '' ;

  }


 

} 