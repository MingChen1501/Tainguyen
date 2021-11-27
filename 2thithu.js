
const dssv = [];
var validateMonHoc = /fpoly{1}0{1}[0-9]/i;

function validate() {
    let temp = {
        ten: null,
        mon: null,
        soBuoi: null,
    } 
    let error = "";
    let inputs = new Array();
    inputs[0] = document.getElementById("ten").value;
    inputs[1] = document.getElementById("mon").value;
    inputs[2] = document.getElementById("soBuoiVang").value;

    let errors = new Array();
    errors[0] = "loi ten\n";
    errors[1] = "loi mon hoc\n";
    errors[2] = "loi so buoi vang\n";
    for (i in inputs) {
        let message = errors[i];
        if (inputs[i] === "") error += message;
        else if (i == 0 && inputs[i].length < 8) error += message;
        else if (i == 1) {
            if (!validateMonHoc.test(inputs[1]) || inputs[1].length !== 7) error += message
        }
            //if (inputs[i].length !== 7) 
        else if (i == 2 && inputs[i] === "") error += message;
    }
    if (error == "") {
        temp.ten = inputs[0];
        temp.mon = inputs[1].toUpperCase();
        temp.soBuoi = inputs[2];
        dssv.push(temp);
        alert("done");
        showcarts(dssv);
    } else {
        alert(error);
    }
}
function showcarts(data) {
    const label = `<tr>
        <td>Họ và Tên</td>
        <td>Môn Học</td>
        <td>Số buổi nghỉ</td>    
    </tr>`
    const res = data
    .map((sv) => {
        return `
        <tr>
            <td>${sv.ten}</td>
            <td>${sv.mon}</td>
            <td class="soBuoi">${sv.soBuoi}</td>
        </tr>`;
    }).join("");
    if (res) {
        document.getElementById("List").innerHTML = label + res;
    }else {
        document.getElementById("List").innerHTML = label;
    }
    
}
function check() {
    let check = document.getElementById("check");
    if (check) {
        check.addEventListener("click", () => {
            let soBuoi = document.querySelectorAll(".soBuoi");
            if(soBuoi) {
                let count = 0;
                for (let b of soBuoi) {
                    if (b.innerHTML > 4) {
                        count++;
                        b.parentElement.style.backgroundColor = "yellow";
                    }
                }
                document.getElementById(
                    "soBuoiNghi"
                ).innerHTML = `SL sinh vien nghi tren 4 buoi: ${count}`;
            }
        })
    }
}
showcarts(dssv);
check();