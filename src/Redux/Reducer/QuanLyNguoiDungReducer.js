import { dang_ky, xoa_infor } from "../Types/QuanLyNguoiDungTypes";

const stateDefaults = {
    values :[]
}

const QuanLyNguoiDungReducer = (state = stateDefaults, action) => {
    switch (action.type) {
        case dang_ky:{
            let newValues = [...state.values]
            newValues.push(action.values);
            state.values = newValues;
            return {...state}
        }
        case xoa_infor:{
            console.log(132)
            return {...state}
        }

        default: return {...state};
    }
};

export default QuanLyNguoiDungReducer;