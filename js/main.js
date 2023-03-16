const registerBtns = document.getElementById('registerBtns')
console.log(registerBtns)
const userInfo = document.getElementById('userInfo')
const userName = document.getElementById('userName')
const logOut =document.getElementById('logOut')

let usernName = localStorage.getItem('username')
if(usernName){
   registerBtns.remove() 
   userInfo.style.display ='flex'
   userName.innerHTML = usernName
}

logOut.addEventListener('click',(e)=>{
    setTimeout(()=>{
        localStorage.clear()
        window.location = 'signup.html'
    },1500)
})


const products =[
    {
      id: 1,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
      name: "Cheese",
      desc: "200g cheese block",
      price: "10",
    },
    {
      id: 2,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
      name: "Milk",
      desc: "200g cheese block",
      price: "5",
    },
    {
      id: 3,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
      name: "Tomato",
      desc: "1 piece of tomato",
      price: "2.75",
    },
    {
      id: 4,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
      name: "Pineapple",
      desc: "500g pineapple",
      price: "3.25",
    },
  ];

