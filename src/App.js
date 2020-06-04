import React from 'react';
import './App.css';
import Block from './components/Block/Block'
import News from './components/News/News'
import Card from './components/Card/Card';
import CardText from './components/CardText/CardText';
import AccentLink from './components/AccentLink/AccentLink';

const newsSections = [
  { text: 'Сейчас в СМИ', faded: false },
  { text: 'в Германии', faded: true },
  { text: 'Рекомендуем', faded: true },
];

const news = [
  { img: '', text: 'news1'},
  { img: '', text: 'news2'},
  { img: '', text: 'news3'},
  { img: '', text: 'news4'},
  { img: '', text: 'news5'},
];

function App() {
  return (
    <div className="App">
      <Block className='header-block' direction='row'>
        <News newsSections={newsSections} news={news}/>
        <Card img=''>
          <AccentLink href=''>{'Работа над ошибками'}</AccentLink>
          <CardText>{'Смотрите и запоминайте'}</CardText>
        </Card>
      </Block>

      {/** ... */}

    </div>
  );
}

export default App;
