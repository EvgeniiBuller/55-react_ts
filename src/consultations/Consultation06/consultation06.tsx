// Нужно сделать запрос на getRandomUser, когда загружается страница
// 2. Когда придут данные, нужно их отобразить в карточке: аватарка, имя-фам, телефон, email
// 3. Во время того как идет запрос, нужно показать спиннер на эране вместо карточки
// 4. Если придет ошибка, то отобразить на экране фразу "Some Network error"

import { useEffect, useState } from "react";
import { Consultation06Container, UserCard, Avatar, UserName, UserInfo } from "./styles";
import axios from "axios";
function Consultation06 () {
    const USER_URL: string = 'https://randomuser.me/api/';
    
    const [userData, setUserData] = useState<any>(undefined);
    console.log(userData);
    
    const getUser = async () => {
        try {
            const response = await axios.get(USER_URL);
            
            setUserData(response.data.results[0]);
        }
        catch(error: any){
        }
        finally{
        }
    }
    useEffect(() => { getUser () }, []);
    return (
        <Consultation06Container>
          { userData && <UserCard>
            <Avatar src={userData?.picture?.large} alt="user avatar" />
            <UserName>
              Name:
              {`${userData?.name?.title} ${userData?.name?.first} ${userData?.name?.last}`}
            </UserName>
            <UserInfo>Phone:{userData.phone}</UserInfo>
            <UserInfo>Email:{userData.email}</UserInfo>
          </UserCard>}
        </Consultation06Container>
      );
    }

export default Consultation06;