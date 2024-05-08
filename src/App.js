import React from "react";
import devoska from "./images/devoska.png";
import fon from "./images/fone.avif";
import Musik from "./Componets/Musik/index";
import CustomCalendar from "./Componets/calendar/index";
import AttendanceForm from "./Componets/AttendanceForm/index";
import DateComponent from "./Componets/Date/index";
import Map from "./Componets/Map/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg">
          <h1 className="Tomiris">Томирис</h1>
          <p className="Tusay">1 ЖАС ТҰСАУ КЕСЕР</p>
          <img
            className="suret"
            id="devoska-img"
            height={350}
            width={200}
            src={devoska}
            alt="devoska"
          />

          <Musik />

          <p className="kurmet2">Құрметті аҒайын-Туыс,</p>
          <p className="kurmet kurmet2">Бауырлар, құда-Жекжат,</p>
          <p className="kurmet kurmet2">дос-җарандар</p>
          <p className="kurmet kurmet2">ӘРіптестер, кӨршілер!</p>
          <p className="kurmet kurmet2">сіздерді қызымыз</p>

          <p className="tomi">Томирисіміздің</p>
          <p className="tomi2">1-жас тұсау кесер </p>
          <p className="tomi2"> тойына шақырамыз</p>
          <p className="tomi3">Той салтанаты</p>

          <CustomCalendar />

          <p className="bastau">Басталуы уақыты</p>
          <p className="bastau2">18:00</p>

          <p className="meken">Мекен-жайымыз Күренбель 40</p>
          <p className="meken2">Пиала Мейрамханасы</p>

          <p className="sizder">Cіздерге ыңғайлы болу үщін</p>
          <p className="sizder2">төмендегі көрсетілген картаны қолданыңыз</p>
          <Map />

          <p>До 5 июля осталось:</p>
          <DateComponent />

          <AttendanceForm />
          <p>Той иелері </p>
          <h1>Алибек && Мөлдір</h1>
          <p>Келініздер қуанышымызға ортақ болыныздар!</p>

          <img
            id="devoska-img"
            height={300}
            width={220}
            src={devoska}
            alt="devoska"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
