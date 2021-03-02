const categoriesList = {

    apiBaseUrl: 'https://benoclock.github.io/S07-todolist/',

    // faire le fetch qui va consommer l'api de ben
    // convertir la réponse json brut en objet
    // afficher les categories dans le select dans le header

    loadCategoriesFromAPI : function(){

        // on déclare nos options pour la requête
        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
  
        // on déclare la route
        let endpoint = categoriesList.apiBaseUrl + 'categories.json' ;
        // console.log(endpoint);

        // on envoie la requête
        fetch(endpoint, fetchOptions)
            // on récupère la réponse et on la traite avec une fonction anonyme
            .then(
                function(jsonResponse){
                    // on convertit la réponse reçu en un objet que l'on renvoit
                    // cet objet contient un tableau PromiseResult avec nos catégories
                    //let blabla = jsonResponse.json();
                    return(jsonResponse.json());
                    //console.log(blabla);
                    //console.log(blabla.name);
                }
            )
            .then(
                function(javaObject){
                    
                    // console.log(javaObject[0].name);

                    // je cible les div ayant la classe select
                    let select1 = document.querySelector('.task__category .select');
                    // console.log(select1);

                    let select2 = document.querySelector('.filters__task--category')
                    // console.log(select2);

                    // je fabrique un select
                    let selectCategories = document.createElement('select');
                    
                    //je fabrique une première option et je l'ajoute au select
                    let optionExample = document.createElement('option');
                    optionExample.textContent = 'Sélectionner une catégorie' ;
                    selectCategories.appendChild(optionExample);
                    

                    // je boucle sur mon objet
                    for(let i = 0; i <javaObject.length ; i++){
                        // a chaque tour je récupère une catégorie
                        let currentCategory = javaObject[i];
                        // je fabrique une option
                        let option = document.createElement('option');
                        // je donne le nom de la catégorie à cette balise option
                        option.textContent = currentCategory.name ;
                        // j'ajoute l'option au select
                        selectCategories.appendChild(option);
                    }

                    // je clone selectCategories pour pouvoir l'insérer à 2 endroits du DOM
                    let selectCategories2 = selectCategories.cloneNode(true);

                    // j'ajoute le select à la première div
                    select1.append(selectCategories);
                    select2.append(selectCategories2);

                    // je rajoute une class filters__choice sur le select2
                    select2.querySelector('select').classList.add('filters__choice');
                    // je modifie la première option
                    select2.querySelector('option').textContent = 'Toutes les catégories' ;
                }

            )
            



    }

}