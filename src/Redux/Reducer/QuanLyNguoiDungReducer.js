import { dang_ky } from "../Types/QuanLyNguoiDungTypes";

const stateDefaults = {
    values :[
        {stt:'1',taiKhoan: 'nguyenvana',hoTen:'Nguyễn Văn A',matKhau:'123',soDienThoai:'123456789',email:'123@gmail.com',loaiNguoiDung:'Khách hàng'},
        
    ]
}

const QuanLyNguoiDungReducer = (state = stateDefaults, action) => {
    switch (action.type) {
        case dang_ky:{
            // let stt =  state.values.length + 1;
            let newValue = {...action.values}
            state.values.push(newValue);
            console.log(state.values);
            return {...state}
        }
        

        default: return {...state};
    }
};

export default QuanLyNguoiDungReducer;