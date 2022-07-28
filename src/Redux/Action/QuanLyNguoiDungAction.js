import { dang_ky, xoa_infor } from "../Types/QuanLyNguoiDungTypes";

export const actionDangKy = (values) => ({
    type: dang_ky,
    values
})
export const actionXoaInfor = (id) => ({
    type: xoa_infor,
    id
})