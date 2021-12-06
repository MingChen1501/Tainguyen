//showInput();
function showInput() {
    let divChangepass = document.getElementById("changePass");
    divChangepass.innerHTML = /*html*/`
    <h2 style="color: red">ĐỔI MẬT KHẨU</h2>
    <tr>
        <td>
            <label>tên đăng nhập</label>
        </td>
        <td>
            <input type="text" id="userName" onkeyup="checkError();">
        </td>
        <td>
            <div id="errorUserName"></div>
        </td>
    </tr>
    <tr>
        <td>
            <label>Mật khẩu cũ</label>
        </td>
        <td>
            <input type="password" id="oldPasswords" onkeyup="checkError()">
        </td>
        <td>
            <div id="errorOldPasswords"></div>
        </td>
    </tr>
    <tr>
        <td>
            <label>Mật khẩu mới</label>
        </td>
        <td>
            <input type="text" id="newPasswords" onkeyup="checkError()">
        </td>
        <td>
            <div id="errorNewPasswords"></div>
        </td>
    </tr>
    <tr>
        <td>
            <label>Xác nhận mật khẩu cũ</label>
        </td>
        <td>
            <input type="text" id="confirmNewPasswords" onkeyup="checkError()">
        </td>
        <td>
            <div id="errorConfirmNewPasswords"></div>
        </td>
    </tr>
    `
}
function checkError() {
    const inputs = [
        document.getElementById("userName").value,
        document.getElementById("oldPasswords").value,
        document.getElementById("newPasswords").value,
        document.getElementById("confirmNewPasswords").value
    ]
    const divs = [
        document.getElementById("errorUserName"),
        document.getElementById("errorOldPasswords"),
        document.getElementById("errorNewPasswords"),
        document.getElementById("errorConfirmNewPasswords")
    ]
    for (let i in inputs) {
        if(inputs[i] === "") {
            divs[i].innerHTML = "trống"
        }else {
            divs[i].innerHTML = "done"
        }
    }
    if (inputs[1] !== "" && inputs[1] !== "123@abc123") divs[1].innerHTML = "mật khẩu cũ không đúng ahihi"
    if (inputs[3] !== inputs[2]) divs[3].innerHTML ="mật khẩu xác nhận không đúng"
    if (inputs[2] !== "" && inputs[2].length < 3) {
        divs[2].innerHTML = "mật khẩu yếu";
        divs[2].style.color = "red";
    } else if (inputs[2] !== "" && inputs[2].length < 6) {
        divs[2].innerHTML = "mật khẩu trung binh";
        divs[2].style.color = "yellow";
    } else if (inputs[2] !== "" && inputs[2] === inputs[1]) {
        divs[2].innerHTML = "mật khẩu mới không được giống mật khẩu cũ"
    } else if (inputs[2] !== "" ){
        divs[2].innerHTML = "done";
        divs[2].style.color = "black"
    }
    

}