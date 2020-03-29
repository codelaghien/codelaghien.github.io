let dansach = [{ age: 0, birth: 0, death: false }];
let tongSoTho = 1;
let tongSoThoBan = 0;
let thang = 0;
let baocao;

function TangThang() {
    if (!baocao) {
        baocao = document.getElementById('baocao');
    }
    thang++;
    let themTho = 0;
    dansach.forEach(contho => {
        contho.age++;
        if (contho.age > 1) {
            tongSoTho++;
            themTho++;
            contho.birth++;
            if (contho.birth === 10) {
                contho.death = true;
                tongSoThoBan++;
            }
        }
    });
    dansach = dansach.filter(contho => !contho.death);
    for (let i = 0; i < themTho; i++) {
        dansach.push({ age: 0, birth: 0, death: false });
    }
    console.log('Tháng thứ ' + thang);
    console.log('Tổng số thỏ = ' + tongSoTho);
    console.log('Tổng số thỏ bán = ' + tongSoThoBan);
    console.log('Danh sách thỏ = ', dansach);
    console.log(' ');

    temp = '';
    temp +=
        '<br />Tháng thứ <span style="font-size: x-large; color: orange;">' +
        thang +
        '</span>';
    temp +=
        '<br />Tổng số thỏ = <span style="font-size: x-large; color: blue;">' +
        tongSoTho +
        '</span>';
    temp +=
        '<br />Tổng số thỏ bán = <span style="font-size: x-large; color: red;">' +
        tongSoThoBan +
        '</span>';
    temp += '<br />';
    baocao.innerHTML = temp + baocao.innerHTML;
}
