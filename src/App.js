import Form from './components/Form';
import apiKey from './emailkey';
import useMail from './hooks/useMail';
import './App.css';

function App() {
  const { sendEmail } = useMail(apiKey);

  return (
    <div className="App">
      <Form sendEmail={sendEmail} />
    </div>
  );
}

export default App;
