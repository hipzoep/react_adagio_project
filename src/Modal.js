import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <div className='modal md'>
        <div className='modal-content v-top slideInDown height-70'>
          <div className='row height-100'>
            <div className='col-lg-11 col-md-11 col-sm-11 col-xs-11 mz ib height-80'>
              <div className='modal-head'>
                <div
                  className='title'
                  style={{
                    padding: '20px',
                    borderBottom: '1px solid rgba(0, 0, 0, .06)',
                  }}
                >
                  {this.props.title}
                </div>
                <div className='pd overflow-auto'>
                  <div className='pd body2 error'>
                    {this.props.content}
                  </div>
                </div>
              </div>
              <div className='modal-action'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 mz ib'>
                    <div className='pd'>
                      <button
                        className='btn btn-block btn-sub'
                        onClick={this.props.onClickClose}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 mz ib'>
                    <div className='pd'>
                      <button className='btn btn-block btn-key'>
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='modal-close-btn col-lg-1 col-md-1 col-sm-1 col-xs-1 mz ib v-top'
              onClick={this.props.onClickClose}
            >
              <i
                className='material-icons md-36'
                style={{ color: 'rgba(255, 255, 255, .7)'}}
              >
                close
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
