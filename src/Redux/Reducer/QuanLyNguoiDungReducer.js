import { dang_ky, edit_value, update, xoa_infor } from "../Types/QuanLyNguoiDungTypes";
import Swal from 'sweetalert2'

const stateDefaults = {
    values: [
    ],
    editValue: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        soDT: "",
        email: "",
        loaiNguoiDung: "",
    }
}

const QuanLyNguoiDungReducer = (state = stateDefaults, action) => {
    switch (action.type) {
        case dang_ky: {
            let newValues = [...state.values]
            let newEditValue = {}
            let index = newValues.findIndex((item) => item.taiKhoan === action.values.taiKhoan)
            if (index === -1) {
                newValues.push(action.values);
            } else {
                Swal.fire({
                    title: 'Warning',
                    text: 'Tài Khoản đã tồn tại',
                    icon: 'warning',
                    confirmButtonText: 'Done'
                })
                newEditValue = { ...state.editValue, taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id: "" }
            }
            state.values = newValues;
            newEditValue = { ...state.editValue, taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id:"" }
            state.editValue = newEditValue
            return { ...state }
        }
        case xoa_infor: {
            let newValues = [...state.values]
            let index = newValues.findIndex((item) => item.id === action.id)
            if (index !== -1) {
                newValues.splice(index, 1);
            }
            state.values = newValues;
            return { ...state }
        }
        case edit_value: {
            let item = state.values.find((item) => item.id === action.item.id)
            state.editValue = { ...item }
            return { ...state }
        }
        case "clear": {
            let newEditValue = { ...state.editValue, taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id:"" }
            state.editValue = newEditValue
            return { ...state }
        }
        case update: {
            let newValues = [...state.values]
            let index = state.values.findIndex((item) => item.id === action.values.id)
            if (index !== -1) {
                newValues[index] = action.values
            }
            state.values = newValues
            let newEditValue = { ...state.editValue, taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "",id:"" }
            state.editValue = newEditValue
            console.log(newEditValue)
            return { ...state }
        }
        default: return { ...state };
    }
};

export default QuanLyNguoiDungReducer;