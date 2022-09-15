import logo from "./logo.svg";
import "./App.css";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import InputText from "./components/InputText/InputText";
import Paragraph from "./components/Paragraph/Paragraph";
import Heading from "./components/Heading/Heading";
import Chebox from "./components/Checkbox/Chebox";

function App() {
  const fruit = ["apple", "pear", "banana"];
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <ButtonPrimary value='First button'></ButtonPrimary>
      <InputText
        idFor='input-text'
        placeholder='my placeholder'
        text='input description'
      ></InputText>
      <h1>aa</h1>
      <Heading level={3} text='H1 Hello, world!' />
      <Paragraph text='hi, I am a paragraph'></Paragraph>
      <Chebox items={fruit}></Chebox>
    </div>
  );
}

export default App;
