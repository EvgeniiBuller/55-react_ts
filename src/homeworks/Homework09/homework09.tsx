import { InfoCard, VipInfoCard } from "./styles";

function Homework09() {
  return (
    <div className="homework09-container">
      <VipInfoCard>
        <div>
          <h1>VIP Пользователь</h1>
          <p>
            {" "}
            Доступ к эксклюзивным функциям, персональный менеджер и приоритетная
            поддержка.
          </p>
        </div>
      </VipInfoCard>
      <InfoCard>
        <h1> Обычный Пользователь</h1>
        <p>
          Стандартный доступ, базовые функции и поддержка в порядке очереди.
        </p>
      </InfoCard>
    </div>
  );
}

export default Homework09;
