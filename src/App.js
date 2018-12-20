import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      show: false,
      city: [],
    };
  }

  handleClickAdd = () => {
    this.setState({
      show: true
    })
  }


  handleClickLocation = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value)


      this.setState({
        countries: [...this.state.countries, e.target.value],
        show: false
      })
    }
  }


  getWeatherApp = (e) => {
    e.prevenDefault();
    let countrie = e.target.textContent;
    let API_GOOGLE = `https://maps.googleapis.com/maps/api/geocode/json?address=${countrie}`;
    console.log(API_GOOGLE)
  }


  Darksky = location => {
    const KEY = "522cfd4879003072ce79d219fb611688"
    const API_URL = `https://api.darksky.net/forecast/${KEY}/${location.lat},${location.Ing}`;

    fetch(API_URL)
      .then((response) => {
        document.querySelector(".app__view").textContent = response.body.currently.summary;
      });
  }

  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <button className='app__add' onClick={this.handleClickAdd} >
            <i class="fa fa-plus-circle"></i>New city
          </button>
        </header>
        <div className='grid'>
          <aside className='app__aside'>
            <h1 className='app__title'>All countries</h1>
            {
              this.state.countries.map(countrie => {
                return <a href='#' onClick={this.getWeatherAdd} className='app__country'>{countrie}</a>
              })
            }
            {
              this.state.show && <input onKeyUp={this.handleClickLocation} type='text' placeholder='Location' className='app__input' />
            }
          </aside>
          <section className='app__view'>Text</section>
        </div>
      </div>

    );
  }

}

export default App;