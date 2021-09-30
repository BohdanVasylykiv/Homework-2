let n = parseInt(prompt('Введіть будь ласка число'));
let m = parseInt(prompt('Введіть будь ласка число'));

if(!Number.isInteger(n) || !Number.isInteger(m)){
    alert('Спробуйте ще раз')
    
}else
{
    const skipPairs = confirm('Пропускати парні?');
    document.location.reload()
    const result = null;
    for(const i = n; i <= m; ++i){
        if(skipPairs && !(i % 2)){
            continue;  
        }
        result += i;
};
alert(result);
}
