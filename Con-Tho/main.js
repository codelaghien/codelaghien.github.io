let dansach = [{age: 0, birth: 0, death: false}];
let tongSoTho = 1;
let tongSoThoBan = 0;
let thang = 0;
let baocao;

function TangThang() { 
    if (!baocao) {
        baocao = document.getElementById('baocao');
    }
    thang++;
    dansach.forEach(contho => {
        contho.age++;
        if (contho.age > 1) {
            tongSoTho++;
            dansach.push({age: 0, birth: 0, death: false});
            contho.birth++;
            if (contho.birth === 10) {
                contho.death = true;
                tongSoThoBan++;
            }
        }
    })
    dansach = dansach.filter(contho => !contho.death);
    console.log('Tháng thứ ' + thang);
    console.log('Tổng số thỏ = ' + tongSoTho);
    console.log('Tổng số thỏ bán = ' + tongSoThoBan);
    console.log('Danh sách thỏ = ', dansach);
    console.log(' ');

    temp = '';
    temp += '<br />Tháng thứ ' + thang;
    temp += '<br />Tổng số thỏ = ' + tongSoTho;
    temp += '<br />Tổng số thỏ bán = ' + tongSoThoBan;
    temp += '<br />';
    baocao.innerHTML = temp + baocao.innerHTML;
}
