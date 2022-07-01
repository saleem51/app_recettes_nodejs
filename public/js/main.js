const deleteHome = document.getElementById('supprimer');

deleteHome.addEventListener('click', (e) => {
    const message = 'Voulez vous vraiment supprimer la recette'
    confirm(message)
})