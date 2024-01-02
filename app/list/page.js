import 작명 from '/public/food0.png'
export default function List() {
    let 상품 = ['tomatoes','pasta','coconut']
    console.log(상품)
      
  return (
    <div>
      <h2>Products</h2>
    {
     상품.map((a,i )=>{
         return(   <div className="food" key={i}>
                <img src={'/food'+i+'.png'} className="food-img"/>
                <img src={`/food${i}.png`} className="food-img"/>
                <h4> {a} $40</h4>
            </div>
         );
        })
    }
       
     
     
    </div>
  )
} 