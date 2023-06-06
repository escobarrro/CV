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
        this.setState({ edu2Checked: false, formVisible: false });
      } else if (name === 'edu3') {
        this.setState({ edu3Checked: false, form3Visible: false });
      }
    }
  };
 

  render() {
    const { fileUploaded, eduChecked, edu2Checked, edu3Checked, formVisible, form2Visible, form3Visible } = this.state;

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
              <option value="" selected disabled hidden>Wybierz płeć</option>
                <option value="1">Mężczyzna</option>
                <option value="2">Kobieta</option>
                <option value="3">Inna</option>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Przeslij;