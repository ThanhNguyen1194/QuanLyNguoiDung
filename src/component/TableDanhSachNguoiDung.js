import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionXoaInfor } from '../Redux/Action/QuanLyNguoiDungAction';
class TableDanhSachNguoiDung extends Component {

    renderInfor = () => {
        return this.props.values.map((item, index) => {
           return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.taiKhoan}</td>
                <td>{item.hoTen}</td>
                <td>{item.matKhau}</td>
                <td>{item.soDT}</td>
                <td>{item.email}</td>
                <td>{item.loaiNguoiDung}</td>
                <td>
                    <button className='btn btn-primary mx-2' onClick={() => {}}>Chỉnh Sửa</button>
                    <button className="btn btn-danger" onClick={() => {this.props.dispatch(actionXoaInfor(item.id))}}>Xoá</button>
                </td>
            </tr>
        })

    }

    render() {
        return (
            <div>
                <div className="card text-left">
                    <div className='card-header bg-dark text-light'>
                        Danh Sách Người Dùng
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tài Khoản</th>
                                    <th>Họ Tên</th>
                                    <th>Mật Khẩu</th>
                                    <th>Số điện thoại</th>
                                    <th>Email</th>
                                    <th>Loại Người Dùng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderInfor()}

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        values: state.QuanLyNguoiDungReducer.values,
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung)