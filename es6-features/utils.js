//* Export từng function
// export const getLocalStorage = () => {
//     console.log('getLocalStorage');
// }
// export const setLocalStorage = () => {
//     console.log('setLocalStorage');
// }

//! 1 file chỉ được Export default function 1 lần
export default function SinhVien(fullName,className) {
    this.fullName = fullName;
    this.className = className;
}
const getLocalStorage = () => {
    console.log('getLocalStorage');
};
const setLocalStorage = () => {
    console.log('setLocalStorage');
};
export {
    getLocalStorage, //getLocalStorage : getLocalStorage
    setLocalStorage,
};