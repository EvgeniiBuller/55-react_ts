import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11Container, Result } from "./styles";

function Homework11() {
  const [note, setNote] = useState<string>('');
  const [additNote, setAdditNote] = useState<string>('');
  const [countNoteChange, setCountNoteChange] = useState<number>(0);

  const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }
  const onAdditChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditNote(event.target.value)
  }




  useEffect(() => {
    setCountNoteChange((prevValue) => prevValue + 1)
  }, [note])



  return (
    <Homework11Container>
      <Input
        name='note'
        placeholder='Enter your note'
        value={note}
        onChange={onChangeNote} />
      <Result> 
        
      {/* Количество изменение в поле Note {countNoteChange === -1 ? 0 : countNoteChange} */}
      Количество изменение в поле Note {countNoteChange - 1}</Result>
      <Input
        name='note_additional'
        placeholder='Enter your additional note'
        value={additNote}
        onChange={onAdditChangeNote} />
    </Homework11Container>
  )

}
export default Homework11