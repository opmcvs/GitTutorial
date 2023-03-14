const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () =>{
const response = await fetch(url);
const data = await response.json()

const newData = data.reduce((acc, curr)=>{
  const {language}= curr; 
  if (language) {
  if(acc[language]){
    acc[language] = acc [language] + 1
  }else {
    acc [language]=1
  }
}
return acc
},{})


}
console.log(fetchRepos())


const newData = data.reduce((acc, curr)=>{
  const {language}= curr; 
  if (language) {
    acc[language] = acc[language] +1 || 1
  }

return acc
},{})



console.log(fetchRepos())




















