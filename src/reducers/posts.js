//especificando o que fazer de acordo com o tipo de ação selecionada, posts inicia com uma array vazia porque em reducers eles sempre precisam ter um valor inicial

export default (posts = [], action) => {
    switch (action.type) {
        
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default: 
            return posts;

    }
}