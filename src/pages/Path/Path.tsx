
import { List, ListItem, PathWrapper, Title } from "./styles";

const Path: React.FC = () => {
    const learnedTopics = [
      'JSX (JavaScript XML)',
      'Компоненты (Functional and Class Components)',
      'Пропсы (Props)',
      'Состояние (State) и хук useState',
      'Обработчики событий',
      'Условный рендеринг',
      'Списки и ключи',
      'Хуки (useEffect, useContext и другие)',
      'Роутинг (React Router)',
      'Управление состоянием (например, Context API, Redux )',
      'Работа с формами',
      'Стилизация (CSS Modules, Styled Components )',
    ];



  return (
    <PathWrapper>
      <Title>React Lessons
      </Title>
      <List>
      {learnedTopics.map((topic , index) => ( 
          <ListItem key={index}>{topic}</ListItem>
        ))}
      </List>
    </PathWrapper>
  )
}
export default Path;