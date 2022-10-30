export default (item,Name) =>{
    if (!item || typeof item == undefined || item == null) {
        return {
            TextNome: `Coloque ${Name} valido`,
            StatusNome: 'erro'
        }
    } else {
        return {
            TextNome: '',
            StatusNome: 'Sucesso'
        }
    }
}

