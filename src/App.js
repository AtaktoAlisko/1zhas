import React from "react";
import devoska from "./images/devoska.png";
import fon from "./images/fone.avif";
import Musik from "./Componets/Musik/index";
import CustomCalendar from "./Componets/calendar/index";
import AttendanceForm from "./Componets/AttendanceForm/index";
import DateComponent from "./Componets/Date/index";
import Map from "./Componets/Map/index";
import insta from "./images/insta.webp";
import gis from "./images/2gis.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg">
          <div className="Glavnaya">
            <h1 className="Tomiris">Томирис</h1>
            <p className="Tusay">1 ЖАС ТҰСАУ КЕСЕР</p>
            <div className="pictures">
              <img
                className="suret"
                id="devoska-img"
                height={350}
                width={200}
                src={devoska}
                alt="devoska"
              />
            </div>
            <Musik />
            <p className="text">05.06.2024</p>
          </div>

          <p className="kurmet2">Құрметті аҒайын-Туыс,</p>
          <p className="kurmet kurmet2">Бауырлар, құда-Жекжат,</p>
          <p className="kurmet kurmet2">дос-җарандар</p>
          <p className="kurmet kurmet2">ӘРіптестер, кӨршілер!</p>
          <p className="kurmet kurmet2">сіздерді қызымыз</p>

          <p className="tomi dancing-script">Томирисіміздің</p>

          <p className="tomi2">1-жас тұсау кесер </p>
          <p className="tomi2"> тойына шақырамыз</p>
          <p className="tomi3">Той салтанаты</p>

          <CustomCalendar />

          <p className="bastau">Басталуы уақыты</p>
          <p className="bastau2">18:00</p>

          <p className="meken">Мекен-жайымыз Күренбель 40</p>
          <p className="meken2">Пиала Мейрамханасы</p>

          <div className="icons">
            <a href="" />
            <img
              className="insta"
              height={50}
              width={50}
              src={insta}
              alt="fon"
            />
            <img className="2gis" height={50} width={50} src={gis} alt="fon" />
          </div>

          <p className="sizder">Cіздерге ыңғайлы болу үщін</p>
          <p className="sizder2">төмендегі көрсетілген картаны қолданыңыз</p>
          <Map />

          <p className="toi3">5 шілдеге дейін:</p>
          <DateComponent />

          <AttendanceForm />
          <p className="toi">Той иелері </p>
          <h1>Алибек && Мөлдір</h1>
          <p className="toi2">Келініздер қуанышымызға ортақ болыныздар!</p>

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
