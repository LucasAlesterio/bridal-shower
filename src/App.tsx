import "./App.css";
import spiceImage from "./assets/spices.png";
import kitchenUtensils from "./assets/kitchen-utensils.png";
import knife from "./assets/knife.png";

function App() {
  function buildElementColors(colors: string) {
    const arrayColors = colors.split(",");
    return arrayColors.map((color) => (
      <div key={color} style={{ background: color }} />
    ));
  }

  return (
    <body>
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
        <b>{import.meta.env.VITE_EVENT_TIME}</b>, pedimos a confirmação até o
        dia <b>{import.meta.env.VITE_EVENT_DATE_LIMIT_CONFIRMATION}</b>.
      </span>

      <span>
        Nossa casa seguirá a seguinte paleta de cores para utensílios e
        eletrodomésticos:
      </span>

      <section>
        {buildElementColors(import.meta.env.VITE_COLORS_UTENSILS)}
        {buildElementColors(import.meta.env.VITE_COLORS_HOME_APPLIANCES)}
      </section>

      <section>
        <a href={import.meta.env.VITE_URL_CONFIRMATION_ATTENDANCE}>
          Confirme sua presença
        </a>

        <a href={import.meta.env.VITE_URL_GIFT_LIST}>Lista de presentes</a>

        <a href={import.meta.env.VITE_URL_MESSAGE_TO_BRIDE}>
          Mensagem para os noivos
        </a>
      </section>

      <span>
        Os presentes podem ser escolhidos pela lista anexada, que preparamos
        como uma sugestão para ajudar. Mas fiquem à vontade para escolher algo
        diferente.
      </span>
    </body>
  );
}

export default App;
