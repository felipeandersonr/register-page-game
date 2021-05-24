let users = []

const DOM = {
    newUser: () => {
        const name = document.querySelector('.login #name').value

        users.push({
            name: name,
            score: 0
        })

        App.reload()    
    },

    addUserHTML: function(index, name, score) {
        let dataCard = `
        <div class="data">
            <div class="placing">${index}</div>
            <div class="name"><p>${name}</p></div>
            <div class="data-score">${score}XP</div>
        </div>`

        document.querySelector('#score-points #datas').innerHTML += dataCard
    },

    clearCards: () => {
        document.querySelector('#score-points #datas').innerHTML = ''
    }
}

const App = {
    init: function() {
        console.log('oi')
        console.log(users)

        for (let element = 0; element < users.length; element++) {
            DOM.addUserHTML(element + 1, users[element].name, users[element].score)
        }
    },

    reload: function() {
        DOM.clearCards()
        this.init()
    }
}