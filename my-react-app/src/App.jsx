import Header from "./Header";
import Footer from "./Footer";
import Card from './card/Card';

function App() {
  const cards = Array.from({ length: 1 }); // [undefined, undefined, undefined, undefined]

  return (
    <div className="cards-list">
      {cards.map(() => <Card/>
      )}
    </div>
  );
}

export default App;
