import { Dispatch, SetStateAction } from "react";

export interface UserData {
  firstName: string;
  lastName: string;
}

export interface CardInterface {
  data: UserData | undefined;
  changeData: (() => void) | Dispatch<SetStateAction<UserData | undefined>>;
}
