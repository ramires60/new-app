import { rerenderAll } from "./render"


let state = {
    ProfilePage:{
        postsData:[
        {id: 1, message: 'no-unused-vars', likes:1},
        {id: 2, message: 'is defined but never used', likes:10},
        {id: 3, message: 'assets by chunk 1.72', likes:100},
        {id: 4, message: 'Entrypoint main 1.72 MiB (1.61 MiB)', likes:102}
      ],
        newPostText: 'Hello World'},
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
          ] }
    

}

export let addPost = () => {
    let newPost = {
        id:6, message: state.ProfilePage.newPostText, likes:0
    }
    state.ProfilePage.postsData.push(newPost)
    state.ProfilePage.newPostText=''
    rerenderAll(state)
}

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderAll(state);
}

export default state