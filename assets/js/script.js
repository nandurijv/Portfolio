fetch('https://api.github.com/repos/nandurijv/Portfolio')
.then(response => response.json()).then(data =>{
    let stars = document.getElementsByClassName('stars')[0];   
    let forks = document.getElementsByClassName('forks')[0]; 
    stars.innerHTML+=" " + data['stargazers_count']; 
    forks.innerHTML+=" " + data['forks_count'];
    console.log(response.json())
});