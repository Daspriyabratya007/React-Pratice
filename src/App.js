import './App.css';
import UserCard from './Component/UserCard';
import Counter from './Component/Counter';
import Aleart from './Component/Aleart';
function App() {
  return (
  <div>
    <Counter/>
    <Aleart/>
  </div>
 );
}

export default App;

//  <div className="flex flex-wrap flex-col items-center gap-4 justify-center p-4 bg-gray-100 min-h-screen">
//      <UserCard name="Priyabrata Das" description="I am Priyabrata" />
//      <UserCard name="John Doe" description="Hi i am John Doe" />
//      <UserCard name="Jane Smith" description="Hi i am Jane Smith " />
//    </div>