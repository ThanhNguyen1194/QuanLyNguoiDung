import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { actionDangKy, actionUpdate } from '../Redux/Action/QuanLyNguoiDungAction'

class FormDangKy extends Component {
    state = {
        values: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            soDT: "",
            email: "",
            loaiNguoiDung: "Khách hàng",
        },
        errors: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            soDT: "",
            email: "",
        },

    }

    handleChangeValue = (event) => {
        let { name, value, type } = event.target;
        let newValue = { ...this.state.values, [name]: value }
        let newError = { ...this.state.errors }

        if (value.trim() === "") {
            newError[name] = name + " is required"
        } else {
            newError[name] = ""
        }

        if (type === 'email') {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regexEmail.test(value)) {
                newError[name] = name + " invalid email address"
            } else {
                newError[name] = ''
            }

        }
        this.setState({
            values: newValue,
            errors: newError
        })


    }


    handleSubmit = () => {

        let { values, errors } = this.state;
        let newValues = { ...values, id: Date.now() }
        let valid = true;
        for (let key in newValues) {
            if (newValues[key] === "") {
                valid = false;
            }
        }
        for (let key in errors) {
            if (errors[key] !== "") {
                valid = false;
            }
        }
        console.log(valid)
        console.log(newValues)
        if (!valid) {
            Swal.fire({
                title: 'Error',
                text: 'Dữ liệu không hợp lệ',
                icon: 'error',
                confirmButtonText: 'Done'
            })
            return;
        }
        Swal.fire({
            title: 'Success',
            text: 'Thành Công',
            icon: 'success',
            confirmButtonText: 'Done'
        })
        
        this.props.dispatch(actionDangKy(newValues))
        this.setState({values: {...this.state.values,taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id:""}})
        console.log("state",this.state.values)
    }
        handleUpdate = () => {
            let { values, errors } = this.state;
            let valid = true;
            for (let key in values) {
                if (values[key] === "") {
                    valid = false;
                }
            }
            for (let key in errors) {
                if (errors[key] !== "") {
                    valid = false;
                }
            }
            if (!valid) {
                Swal.fire({
                    title: 'Error',
                    text: 'Dữ liệu không hợp lệ',
                    icon: 'error',
                    confirmButtonText: 'Done'
                })
                this.props.dispatch({type:"clear"})
                return;
            }
            this.props.dispatch(actionUpdate(this.state.values))
        }

    

    static getDerivedStateFromProps(newProp, currentState) {
        if (currentState.values.id !== newProp.editValue.id) {
            let newState = { ...currentState, values: newProp.editValue }
            return newState;
        }
        return currentState
    }

    render() {
        return (
            <div>
                <div className="card text-left">
                    <div className="card-header bg-dark">
                        <h4 className="card-title text-light m-0 ">Form Đăng Ký</h4>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-6">
                                <h5>Tài Khoản</h5>
                                <input name='taiKhoan' value={this.state.values.taiKhoan} className='w-100 mb-2 p-2' onChange={this.handleChangeValue} />
                                <span className='text-danger text'>{this.state.errors.taiKhoan}</span>
                            </div>
                            <div className="col-6">
                                <h5>Họ Tên</h5>
                                <input name='hoTen' value={this.state.values.hoTen} className='w-100 mb-2 p-2' onChange={this.handleChangeValue} />
                                <span className='text-danger text'>{this.state.errors.hoTen}</span>
                            </div>
                            <div className="col-6">
                                <h5>Mật Khẩu</h5>
                                <input name='matKhau' value={this.state.values.matKhau} className='w-100 mb-2 p-2' onChange={this.handleChangeValue} />
                                <span className='text-danger text'>{this.state.errors.matKhau}</span>
                            </div>
                            <div className="col-6">
                                <h5>Số Điện Thoại</h5>
                                <input type="tel" maxlength="10" name='soDT' value={this.state.values.soDT} className='w-100 mb-2 p-2' onChange={this.handleChangeValue} />
                                <span className='text-danger text'>{this.state.errors.soDT}</span>
                            </div>
                            <div className="col-6">
                                <h5>Email</h5>
                                <input name='email' type='email' value={this.state.values.email} className='w-100 mb-2 p-2' onChange={this.handleChangeValue} />
                                <span className='text-danger text'>{this.state.errors.email}</span>
                            </div>
                            <div className="col-6">
                                <h5>Mã Loại Người Dùng</h5>
                                <select name='loaiNguoiDung' className='w-100 p-2' onChange={this.handleChangeValue}>
                                    <option>Khách hàng</option>
                                    <option>Đại Lý</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <button className='btn btn-success' onClick={
                                this.handleSubmit
                            }>Đăng Ký</button>

                            {!this.props.editValue.taiKhoan ?
                                <button disabled className='btn btn-primary mx-2' onClick={() => {}}>Cập Nhật</button>
                                : <button className='btn btn-primary mx-2' onClick={() => {
                                    // this.props.dispatch(actionUpdate(this.state.values))
                                    this.handleUpdate()
                                    this.setState({
                                        values: {...this.state.values,taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id:""},
                                        errors: {...this.state.errors,taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: ""}
                                    });
                                }}>Cập Nhật</button>

                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editValue: state.QuanLyNguoiDungReducer.editValue,
    }
}

export default connect(mapStateToProps)(FormDangKy)