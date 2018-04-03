import React, { Component } from 'react';

class Snackbar extends Component { // React Component를 상속받는(extends) class
  constructor(props) { // 기본적으로 제공하는 데이터, 구조를 props로 받아서
    super(props); // 받았다~ 라고 알려줌
    this.state = {
      isAlive: true, // 나는 살아있어야 하는가...
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isAlive: !this.state.isAlive
      })
    }, 3000)
  }

  // 변경된 이후에 => 변경 이전의 데이터를 가지고 짜-잔 (로직 수행)
  componentDidUpdate(previousProps, previousState) { // 이전의 props가 어떤 상태였는지, 이전의 state가 어떤 상태였는지
    // 이전의 isAlive와 지금의 isAlive를 비교함
    if (previousState.isAlive === true && this.state.isAlive === false) {
      setTimeout(() => {
        this.props.onClose();
      }, 3000)
    }
  }

  render() {
    // if (this.state.isAlive === false) {
    //   return null;
    // }

    return (
      <div
        className={`snackbar animated fast ${this.state.isAlive === true ? 'slideInUp' : 'slideOutDown'}`}
      >
        <span className='md accent2 mr10'>
          <i className='material-icons md-18 v-top'>
            check
          </i>
        </span>
        <span className='body light'>
          {/* 메세지가 나오는 곳 */}
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Snackbar; // 요거 써줘야 나갈 수 있음
