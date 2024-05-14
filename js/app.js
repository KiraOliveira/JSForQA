const LIST = [
    {
        id: 1,
        name: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        name: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        name: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        name: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        name: 'C3pO',
        avatar: 'images/c3po.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Kira',
        characters: LIST,
        searchName: ''
    },
    methods: { // Usado para implementar funções - mas sem usar a palavra funcions
        like(userName) {
            alert(`O(A) personagem ${userName} recebeu um like!`)
        },

        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },

        search() {

            if (this.searchName === '') {
                return alert('O preenchimento do campo de busca é obrigatório!')
            } 

            const list = this.characters = LIST

            const result = list.filter(item => { // ao invés de usar a palavra funcions, usamos => 
                return item.name === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado')
            } else {
                this.characters = result
            }
        }
    }
})