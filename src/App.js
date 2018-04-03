import React, { Component } from 'react';

import Snackbar from './Snackbar';
import InputButton from './InputButton';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onoff: false,
      list: [
        // 다른 것들과 완전히 구별되는 고유한 값(Primary Key) => 이름(name)
        { name: '떡볶이', price: 3000, picture: 'http://www.sincham.com/img/menu/menu1_03.jpg' },
        { name: '튀김', price: 2000, picture: 'https://thesuburbansoapbox.com/wp-content/uploads/2014/12/Lobster-Arancini-7.jpg' },
        { name: '사이다', price: 1000, picture: 'https://cdn.namuwikiusercontent.com/s/b687bd868f1cf44bd604de24b3de7451ebbdf5785c7914dc2c4801b183b7a69a8a21594445441bbbccc5a125ef05b527ec041d1acebe67ccaa52015565bfcee4b3b917ded5c486b0e05a6b301bf74253?e=1519401348&k=mUJ3mASpdWCypYOPy1Gl8A' },
      ],
      selected: '값',

      // snackbar 부분
      snackbaronoff: false,

      // input의 값의 상태
      inputValue: '',

      // modal 보이냐 마냐
      modalonoff: false,
    };
  }

  componentDidMount() {
    console.error('mounted and...', this.area);

    document.addEventListener('click', this.handleClickDocument)
  }

  handleClickDocument = (event) => {
    if (this.area && !this.area.contains(event.target)) {
      if (this.state.inputValue !== '') {
        this.setState({
          inputValue: '',
        });
      }
    }
  }

  booleanSwitch = () => {
    // 이 함수에서 해야하는 일: 옵션이 닫혀야함
    // 바꿔야 하는 state:     1. onoff

    this.setState({ // Object 안에 어떤 값을 어떻게 바꿔줄지 적어서 보냄
      onoff: !this.state.onoff, // 현재의 onoff 값(this.state.onoff)을 반대로 바꿔줌
    });
  }

  selectedOn = (item) => { // 값이 직접 넘어와용
    // 이 함수에서 해야하는 일: 옵션이 닫히고, 선택한 거에 대해서 버튼에 반영(선택된 값이 바뀌어야함. => 이름(name))
    // 바꿔야 하는 state:       1. onoff                         2. name => selected

    this.setState({
      onoff: false,
      selected: item.name,
    });

    /*
    함수 => 어떠한 동작을 하겠다! (느낌표 포함)
    어떠한 동작 => 함수의 이름, 느낌표(!)가 () = 함수의 실행
    동작을 하기 위해서 필요한 조건, 값 => ({}괄호안에 여러개 들어갈 수 있는 값들) => 각각의 변수들로 와옹
    */

    // 추가로 할 일: 가격이 1500원 넘으면 물가가 비싸졌네... 하고 알림창 띄우기
    if (item.price > 1500) {
      window.alert('오메 가격이 왜이러냐');
    }
  }

  snackbarstart = () => {
    if (this.state.snackbaronoff === true) {
      return; // 안전로직 (다시 렌더되게끔 바꾸지 않음으로서, 성능을 아낄 수 있음.)
    }

    this.setState({
      snackbaronoff: true
    })
  }

  snackbarend = () => { // 스낵바 닫는 함수
    console.error('called!');
    this.setState({
      snackbaronoff: false,
    });
  }

  typing = (event) => { // 값이 막 변할 때에 대한 이벤트를 받아옴.
    // 1. 이벤트가 어디서 일어났는가? (위치 확인)
    // 2. 그 위치의 input 값은 무엇인가?
    // 3. 그 값을 state의 inputValue에 동기화함.

    // 1 + 2.
    console.error('where the event occured? : ', event.target.value);

    // 3.
    this.setState({
      inputValue: event.target.value
    });
  }

  modalstart = () => {
    // 1. 처음에만 클릭하면 modalonoff=> true => if 걸 필요는 없음
    if (this.state.modalonoff == false) { // 2. ==, ===는 다르다
      this.setState({
        modalonoff: true
      });
    }
  }

  modalstop = () => {
    this.setState({
      modalonoff: false,
    });
  }

  typingstop = (event) => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: '',
      });
    }
  }

  render() {
    return (
      <div className='pd'>
        <div className='mb10'>
          <button
            className='btn btn-action primary-ng'
            onClick={this.modalstart}
          >
            모달 열기
          </button>
        </div>
        <div className='mb10'>
          <InputButton
            refer={(me) => { // 컴포넌트 자기 자신을 넘겨서
              this.area = me; // App에서 이름을 붙임.
            }}
            onChange={this.typing}
            value={this.state.inputValue}
            onClick={this.snackbarstart}
          />
        </div>
        <div
          className='menu-wrapper'
          style={{ width: '300px' }}
        >
          <button
            className='btn btn-sub width-100 left'
            onClick={this.booleanSwitch}
          >
            {this.state.selected}
          </button>
          {this.state.onoff === true ? (
            <div className='menu-md'>
              <ul>
                {this.state.list.map((item) => {
                  return (
                    <li
                      key={item.name} // 고유하게 구분되는 값
                      className={this.state.selected === item.name ? 'key' : 'primary'}
                      onClick={() => this.selectedOn(item)}
                    >
                      <img
                        src={item.picture}
                        style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '10px', verticalAlign: 'middle' }}
                      />
                      <span className='mr10'>
                        {item.name}
                      </span>
                      <span className='disabled'>
                        {/* Javascript에서 기본적으로 지원하는 숫자 포맷팅 도구 */}
                        {item.price.toLocaleString()}원
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null}
        </div>
        {this.state.snackbaronoff === true ? (
          <Snackbar
            message={this.state.inputValue}
            onClose={this.snackbarend}
          />
        ) : null}
        {this.state.modalonoff === true ? (
          <Modal
            title='모달의 제목'
            content='모달의 내용'
            onClickClose={this.modalstop}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
