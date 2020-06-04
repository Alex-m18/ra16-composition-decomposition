import React from 'react'
import Block from '../Block/Block'
import List from '../List/List';
import AccentLink from '../AccentLink/AccentLink';
import ListItem from '../ListItem/ListItem';
import InlineCard from '../InlineCard/InlineCard';
import Currencies from '../Currencies/Currencies';
import { nanoid } from 'nanoid'

/**
 * Компонент - блок с новостями
 */
function News(props) {
  return (
    <Block className='news-block'>
        <Block className='news-sections' direction='row'>
          {props.newsSections.map((o) => <AccentLink key={nanoid(4)} faded={o.faded}>{o.text}</AccentLink>)}
        </Block>
        <List items={props.news}>
          {(items) => items.map((o) => <ListItem key={nanoid(4)}><InlineCard img={o.img}>{o.text}</InlineCard></ListItem>)}
        </List>
        <Currencies count={3}/>
    </Block>
  )
}


export default News

