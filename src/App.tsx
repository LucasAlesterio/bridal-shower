import "./App.css";
import spiceImage from "./assets/spices.png";
import kitchenUtensils from "./assets/kitchen-utensils.png";
import knife from "./assets/knife.png";
import checkCircle from "./assets/check-circle.svg";
import gift from "./assets/gift.svg";
import mail from "./assets/mail.svg";
import map from "./assets/map.svg";

function App() {
  function buildElementColors(colors: string) {
    const arrayColors = colors.split(",");
    const offsetVw = 6;
    const offsetDefault = 40;
    return arrayColors.map((color, index) => (
      <div
        className="circle-color"
        key={color}
        style={{
          background: color,
          zIndex: index + 1,
          transform: `translateX(min(${offsetDefault * index}px, calc(${index}*${offsetVw}vw)))`,
        }}
      />
    ));
  }

  return (
    <div className="content">
      <h3 className="finally">Finalmente...</h3>
      <h1>{import.meta.env.VITE_NAME_BRIDE}</h1>
      <h3>CALMA!</h3>
      <span>
        A gente ainda não vai casar… Mas decidimos dividir a vida, a casa e a
        louça!
      </span>
      <span>
        E para comemorar esse momento com muito amor e carinho, vamos fazer
        nosso chá de panela!
      </span>
      <span>E a sua presença é muito importante para nós!</span>
      <section className="fancy-images">
        <img src={spiceImage} />
        <img src={kitchenUtensils} />
        <img src={knife} />
      </section>
      <span>
        O Chá de Panela será realizado no dia{" "}
        <b>{import.meta.env.VITE_EVENT_DATE}</b> à partir das{" "}
        <b>{import.meta.env.VITE_EVENT_TIME}</b>, no endereço{" "}
        <b>{import.meta.env.VITE_EVENT_ADDRESS}</b>. Pedimos a confirmação até o
        dia <b>{import.meta.env.VITE_EVENT_DATE_LIMIT_CONFIRMATION}</b>.
      </span>

      <span className="more-info">
        <h3>Informações Importantes 💛</h3>
        <div>
          <b>📅 Hora e local: </b> O Chá de Panela será realizado no dia{" "}
          <b>{import.meta.env.VITE_EVENT_DATE}</b> à partir das{" "}
          <b>{import.meta.env.VITE_EVENT_TIME}</b>, no endereço{" "}
          <b>{import.meta.env.VITE_EVENT_ADDRESS}</b>. Pedimos a confirmação até
          o dia <b>{import.meta.env.VITE_EVENT_DATE_LIMIT_CONFIRMATION}</b>.
        </div>
        <div>
          <b>🏊 Piscina aquecida:</b> O local possui piscina aquecida! Quem
          quiser aproveitar pode trazer roupa de banho e toalha.
        </div>
        <div>
          <b>🥤 Bebidas: </b> Nós iremos oferecer: Água, Suco e Refrigerante.
        </div>
        <div>
          <b>🍺 Bebidas alcoólicas: </b> Se quiserem consumir bebidas
          alcoólicas, cada convidado pode levar a sua bebida de preferência.
        </div>
        <div>
          <b>🎯 Brincadeiras e muitas risadas</b>
        </div>
      </span>

      <span>
        Nossa casa seguirá a seguinte paleta de cores para utensílios e
        eletrodomésticos:
      </span>

      <section className="color-section">
        <div className="color-container">
          {buildElementColors(import.meta.env.VITE_COLORS_UTENSILS)}
        </div>
        <div className="color-container">
          {buildElementColors(import.meta.env.VITE_COLORS_HOME_APPLIANCES)}
        </div>
      </section>

      <section className="links">
        <a href={import.meta.env.VITE_URL_CONFIRMATION_ATTENDANCE}>
          <img src={checkCircle} />
          Confirme sua presença
        </a>

        <a href={import.meta.env.VITE_URL_GIFT_LIST}>
          <img src={gift} />
          Lista de presentes
        </a>

        <a href={import.meta.env.VITE_URL_ADDRESS}>
          <img src={map} />
          Como chegar
        </a>

        <a href={import.meta.env.VITE_URL_MESSAGE_TO_BRIDE}>
          <img src={mail} />
          Mensagem para os noivos
        </a>
      </section>

      <span>
        Os presentes podem ser escolhidos pela lista anexada, que preparamos
        como uma sugestão para ajudar. Mas fiquem à vontade para escolher algo
        diferente.
      </span>
    </div>
  );
}

export default App;
