//the api to day is these https://jsonplaceholder.typicode.com/users
//async/await


// Promise  

// async function fetchData(userId){
//     try{
//           //1. make an Api request
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId} `)
//       //2. check if the request is successful

//       if(!response.ok) {
//         throw new Error(`HTTP error! status:${response.status}`)
//       }

//       //parse the json response
//       const data = await response.json();
//       return data 
    
// }catch (error) {
//     console.log("error fetching user data", error)
//     return null

//     }
// }
// async function displayuser(){
//     const user = await fetchData(1) 
//     if (user) {
//         console.log("Name:", user.name);
//          console.log("User email:", user.email);

//     } else {
//         console.log("user not found");
//     }
// }

// displayuser()



//Question 1
async function fetchAuthorsSithArticles(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user");
    const posts=await response.json();
    const author={};
    posts.forEach(post=>{
        const userId=post.user.id;
        author[userId]={
            id:post.user.id,
            name:post.user.name,
            articles:[]
        }
author[userId].articles.push({
            id:post.id,
            title:post.title,
            body:post.body,
            comments:post.comments.map(c=>({
                id:c.id,
                content:c.body
            })),
});
    }
)
const authorsArray=Object.values(author);
return authorsArray;
}
fetchAuthorsSithArticles().then(authors=>{
    console.log(JSON.stringify(authors,null, 3));
});











