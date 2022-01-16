import './App.css';
import Card from './components/Card';

let data = [{
  nft: "https://images.unsplash.com/photo-1633059338185-2645e50c58ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1847&q=80",
  title: "Sphere-al #5646",
  description : "worth millions",
  price: "0.351 ETH",
  days: "8 days",
  creator: "Firos nv",
  face: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
  nft: "https://images.unsplash.com/photo-1637008336776-2aeea516dc18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  title: "Chess #9866",
  description : "worth millions",
  price: "0.154 ETH",
  days: "2 days",
  creator: "Fakurian Design",
  face:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
  nft: "https://images.unsplash.com/photo-1625334666162-8ad10e7332d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  title: "The Wave #7643",
  description : "worth millions",
  price: "0.848 ETH",
  days: "7 days",
  creator: "Brian Wangenheim",
  face:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}
]

console.log(data);

function App() {
  return (
    <div className="App">
      {data.map((nft)=>{
        return <Card nft = {nft.nft} title={nft.title} description={nft.description} price={nft.price} creator={nft.creator} days={nft.days} face={nft.face} />

        //hint prop and pass down it using maps
      })}
    </div>
  );
}

export default App;
