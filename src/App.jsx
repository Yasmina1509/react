import React from "react";
import "./App.css";
import Header from './Components/Header/Header';
import Card from "./Components/Card/Card";
import mars_rug from './Components/images/mars_rug.png'
import keyboard_sticker from './Components/images/keyboard_sticker.png'
import smart_watch from './Components/images/smart_watch.png'
import wireless_keyboard from './Components/images/wireless_keyboard.png'
import mouse from './Components/images/mouse.png'
import airpods from './Components/images/airpods.png'
import powerbank from './Components/images/powerbank.png'
import usb_flash_drive from './Components/images/usb_flash_drive.png'
import smartphone from './Components/images/smartphone.png'
import playstation_5 from './Components/images/playstation_5.png'
import yandex_station from './Components/images/yandex_station.png'
import planshet_samsung from './Components/images/planshet_samsung.png'

const products = [
  { name: 'Mars rug', price: 100, coins: 'Coins', available: 24, image: mars_rug },
  { name: 'Keyboard sticker', price: 49, coins: 'Coins', available: 11, image: keyboard_sticker },
  { name: 'Smart watch', price: 899, coins: 'Coins', available: 4, image: smart_watch },
  { name: 'Wireless keyboard', price: 350, coins: 'Coins', available: 9, image: wireless_keyboard },
  { name: 'Mouse', price: 359, coins: 'Coins', available: 24, image: mouse },
  { name: 'AirPods', price: 499, coins: 'Coins', available: 11, image: airpods },
  { name: 'Powerbank', price: 899, coins: 'Coins', available: 4, image: powerbank },
  { name: 'USB flash drive', price: 299, coins: 'Coins', available: 21, image: usb_flash_drive },
  { name: 'Smartphone', price: 3699, coins: 'Coins', available: 2, image: smartphone },
  { name: 'Playstation 5', price: 7449, coins: 'Coins', available: 1, image: playstation_5 },
  { name: 'Yandex Station', price: 1999, coins: 'Coins', available: 4, image: yandex_station },
  { name: 'Planshet Samsung', price: 4999, coins: 'Coins', available: 24, image: planshet_samsung },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="product-grid">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </main>
      <footer>
        <p>MARS IT School 2022</p>
        <p>Политика конфиденциальности</p>
      </footer>
    </div>
  );
}

export default App;