import { dang_ky, edit_value, update, xoa_infor } from "../Types/QuanLyNguoiDungTypes";

export const actionDangKy = (values) => ({
    type: dang_ky,
    values
})
export const actionXoaInfor = (id) => ({
    type: xoa_infor,
    id
})
export const actionEditValue = (item) => ({
    type: edit_value,
    item
})
export const actionUpdate = (values) => ({
    type: update,
    values
})