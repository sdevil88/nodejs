// const date = new Date();
// console.log(date);
// module.exports = date;


const add = {
    a:20,
    b:30,
    value:()=>{
        
        return add;
    },
    show:()=>{
        let a=add.a+add.b;
        console.log(a);
    }

};
function run(){
    add.value();
add.show();
}
run();

module.exports = run;




