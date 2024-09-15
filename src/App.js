
import { useTonConnect } from './hooks/useTonConnect';
import './App.css';
import {TonConnectButton} from "@tonconnect/ui-react" 



function App() {
  const {network} = useTonConnect()
  return (
    <div className="App">
<TonConnectButton/>
{network}
    </div>
  );
}

export default App;
