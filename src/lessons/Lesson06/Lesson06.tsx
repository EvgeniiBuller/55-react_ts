
import Button from "../../components/Button/Button";

//пример именованного импорта по умолчанию (нужно использовать точное название и 
// заключать в фигурные скобки)
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06() {
console.log(getAction(TRAFFIC_LIGHT.GREEN));



    return <Button  name='Send'/>
  }

  //Экспорт по умолчанию для компонента Lesson06
  export default Lesson06;