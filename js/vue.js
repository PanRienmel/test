new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        posts: [
            {
                name: 'Michele',
                avatar: 'https://picsum.photos/30/30?random=1',
                photo: "https://picsum.photos/614/614?random=2",
                text:"Ciao amici!",
                likes: 5
            },
        ]
    }
  })