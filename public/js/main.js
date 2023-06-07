async function main(){
    const repository = await getGithubRepo()
    projectsUI(repository)
}
async function getGithubRepo(){
    let response
    try {
        const request = await fetch("https://api.github.com/users/MustafaD3/repos")
        response = await request.json()
    } catch (error) {
        console.log(error)
        response = {}
    }
    return response
}
function projectsUI(repos){
    const projectsEl = document.querySelector("#projects")
    for(const x of repos){
        if(!x.fork){
            const name = x.name.replaceAll("-"," ")
            const li = document.createElement("li")
            const link = document.createElement("a")
            li.addEventListener("mouseover",(e)=>link.innerHTML="Github")
            li.addEventListener("mouseout",(e)=>link.innerHTML=name)
            link.href = x.html_url
            link.innerHTML = name
            li.append(link)
            projectsEl.append(li)
        }
    }
}
main()