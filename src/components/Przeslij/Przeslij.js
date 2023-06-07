import React from 'react';
import './Przeslij.css';

class Przeslij extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
      eduChecked: false,
      edu2Checked: false,
      edu3Checked: false,
      FormVisible: false,
      Form2Visible: false,
      Form3Visible: false,
      formCount: 0,
      submitted: false
    };
  }

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      this.setState({ fileUploaded: true });
    } else {
      alert('Wybrany plik nie jest obrazem.');
    }
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    
    if (checked) {
      if (name === 'edu') {
        this.setState({ eduChecked: true, formVisible: true });
      } else if (name === 'edu2') {
        this.setState({ edu2Checked: true, form2Visible: true });
      } else if (name === 'edu3') {
        this.setState({ edu3Checked: true, form3Visible: true });
      }
    } else {
      if (name === 'edu') {
        this.setState({ eduChecked: false, formVisible: false });
      } else if (name === 'edu2') {
        this.setState({ edu2Checked: false, form2Visible: false });
      } else if (name === 'edu3') {
        this.setState({ edu3Checked: false, form3Visible: false });
      }
    }
  };

  handleFormCountChange = (event) => {
    const count = parseInt(event.target.value, 10);
    this.setState({ formCount: count });
  };

  renderForms = () => {
    const { formCount } = this.state;
    const forms = [];

    for (let i = 1; i <= formCount; i++) {
      forms.push(
        <div className={`wyksztalcenie-${i}`}>
          <p className='p-wyksztalcenie'>Formularz  {i}</p>
          <label for='firma-nazwa' className='label-firma-nazwa'>Nazwa firmy</label>
          <input type="text" className='firma-nazwa' name='firma-nazwa' />
          <label for='firma-stan' className='label-firma-stan'>Stanowisko</label>
          <input type="text" className='firma-stan' name="firma-stan" />
          <label for='firma-dataroz' className='label-firma-dataroz'>Data rozpoczęcia</label>
          <input type="text" className='firma-dataroz' name='firma-dataroz' />
          <label for='firma-datauko' className='label-firma-datauko'>Data ukończenia</label>
          <input type="text" className="firma-datauko" name='firma-datauko' />
          <br />
        </div>
      );
    }

    return forms;
  };

  handlePowrotClick = () => {
    window.location.href = '../../App.js';
  };

  handleNoweClick = () => {
    this.setState({ submitted: false });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { fileUploaded, eduChecked, edu2Checked, edu3Checked, formVisible, form2Visible, form3Visible, submitted } = this.state;
    
    if (submitted) {
      return (
        <div className='przeslij4'>
          <p className='dzieki'>Dziekujemy za przesłanie CV!</p>
        <button className='powrot2' onClick={this.handlePowrotClick}>Powrót do strony głównej</button>
        <button className='nowe' onClick={this.handleNoweClick}>Prześlij nowe CV</button>
        </div>
      );
    }

    return (
      <div className='przeslij3'>
        <div className='header'>
          <p className='CV2'>CV</p>
        </div>
        <div className='grp4'>
          <div className='form'>
            <form>
              <label htmlFor='imie' className='label-imie'>
                Imie
              </label>
              <input type='text' name='imie' id='imie' className='imie' />
              <label htmlFor='nazwisko' className='label-nazwisko'>
                Nazwisko
              </label>
              <input type='text' name='nazwisko' id='nazwisko' className='nazwisko' />
              <label htmlFor='photo' className='label-photo'>
                Zdjęcie
              </label>
              <input
                type='file'
                name='photo'
                id='photo'
                className={`photo ${fileUploaded ? 'uploaded' : ''}`}
                onChange={this.handleFileUpload}
              />
              <label for='sex' className='label-sex'>Płeć</label>
              <select name="sex" id="sex" className='sex'>
              <option value="" selected defaultValue disabled hidden>Wybierz płeć</option>
                <option value="2">Mężczyzna</option>
                <option value="1">Kobieta</option>
                <option value="4">Inna</option>
              </select>
              <label for="date" className='label-date'>Data urodzenia</label>
              <input type="date" name="date" id="date" className='date' />
              <label for="nrtel" className='label-nrtel'>Numer telefonu</label>
              <input type="tel" name="nrtel" id="nrtel" className='nrtel' maxLength="9" onKeyPress={(event) => {
              const keyCode = event.which || event.keyCode;
              const keyValue = String.fromCharCode(keyCode);
              const regex = /[0-9]/;
              if (!regex.test(keyValue)) {
              event.preventDefault();
              }
               }} />
              <label for="email" className='label-email'>Email</label>
              <input type="email" name="email" id="email" className='email' />
              <label for="edu" className='label-edu'>Wykształcenie</label>
              <input type='checkbox' name="edu" id="edu" className='edu' checked={eduChecked} onChange={this.handleCheckboxChange} />
              <label for="edu" className='label-edu2'>Studia</label>
              <input type='checkbox' name="edu2" id="edu2" className='edu2' checked={edu2Checked} onChange={this.handleCheckboxChange}/>
              <label for="edu2" className='label-edu3'>Szkoła średnia</label>
              <input type='checkbox' name="edu3" id="edu3" className='edu3' checked={edu3Checked} onChange={this.handleCheckboxChange}/>
              <label for="edu3" className='label-edu4'>Szkoła podstawowa</label>

              {formVisible && (
                <div className='div-studia'>
                  <p className='p-studia'>Studia</p>
                <label for="nazwa" className='label-nazwa'>Nazwa</label>
                <input type="text" className='nazwa' name="nazwa"></input>
                <label for="kierunek" className='label-kierunek'>Kierunek</label>
                <input type="text" className='kierunek' name="kierunek"></input>
                <label for="dataroz" className='label-dataroz'>Data rozpoczęcia</label>
                <input type="text" className='dataroz' name="dataroz"></input>
                <label for="datauko" className='label-datauko'>Data ukończenia</label>
                <input type="text" className='datauko' name="datauko"></input>
                </div>
              )}

{form2Visible && (
                <div className='div-srednia'>
                  <p className='p-srednia'>Szkoła średnia</p>
                <label for="nazwa2" className='label-nazwa2'>Nazwa</label>
                <input type="text" className='nazwa2' name="nazwa2"></input>
                <label for="kierunek2" className='label-kierunek2'>Kierunek</label>
                <input type="text" className='kierunek2' name="kierunek2"></input>
                <label for="dataroz2" className='label-dataroz2'>Data rozpoczęcia</label>
                <input type="text" className='dataroz2' name="dataroz2"></input>
                <label for="datauko2" className='label-datauko2'>Data ukończenia</label>
                <input type="text" className='datauko2' name="datauko2"></input>
                </div>
              )}

{form3Visible && (
                <div className='div-podstawa'>
                  <p className='p-podstawa'>Szkoła podstawowa</p>
                <label for="nazwa3" className='label-nazwa3'>Nazwa</label>
                <input type="text" className='nazwa3' name="nazwa3"></input>
                <label for="dataroz3" className='label-dataroz3'>Data rozpoczęcia</label>
                <input type="text" className='dataroz3' name="dataroz3"></input>
                <label for="datauko3" className='label-datauko3'>Data ukończenia</label>
                <input type="text" className='datauko3' name="datauko3"></input>
                </div>
              )}

              <label for="wyksztal" className='label-wyksztal'>Doświadczenie zawodowe</label>
              <input type="number" className='wyksztal' name="wyksztal" onChange={this.handleFormCountChange} min="0" max="5" placeholder='Wpisz liczbe formularzy do wypełnienia (max 5)'/>

              {this.renderForms()}

              <label for="dodatk" className='label-dodatk'>Dodatkowe umiejętności</label>
              <textarea className='dodatk' rows="15" cols="45"/>
              <div className='div-submit'>
              <input type="submit" className='submit' value="Prześlij CV" onClick={this.handleFormSubmit}/>
              </div>
              <div className='div-reset'>
              <input type="reset" className='reset' value="Wyczyść" />
              </div>
            </form>
          </div>
        </div>
        <div className='div-powrot powrot-fixed'>
        <button className='powrot' onClick={this.handlePowrotClick}>Powrót do strony głównej</button>
        </div>
      </div>
    );
  }
}

export default Przeslij;