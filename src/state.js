

let state = {
    ProfilePage:{
        postsData:[
        {id: 1, message: 'no-unused-vars', likes:1},
        {id: 2, message: 'is defined but never used', likes:10},
        {id: 3, message: 'assets by chunk 1.72', likes:100},
        {id: 4, message: 'Entrypoint main 1.72 MiB (1.61 MiB)', likes:102}
      ]},
    DialogsPage: {
        dialogsData:[
            { id: 1, name: "Petro" },
            { id: 2, name: "Hdset" },
            { id: 3, name: "Khtar" },
            { id: 4, name: "Naghr" },
          ],
        messagesData:[
            { id: 1, message: "no-unused-vars" },
            { id: 2, message: "111is defined but never used" },
            { id: 3, message: "Yo assets by chunk 1.72" },
            { id: 4, message: "Entrypoint main 1.72 MiB (1.61 MiB)" },
          ]

    }
    

}

export default state