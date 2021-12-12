// class Invoice{
//     client:string;
//     details:string;
//     amount:number;
//     constructor(c:string,d:string,a:number){
//         this.client=c;
//         this.details=d;
//         this.amount=a;
//     }
//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details}`;
//     }
// }
// const inOne=new Invoice('m','work',250);
// const inTwo=new Invoice('w','qw',350);

// let invoices: Invoice[]=[];
// invoices.push(inOne);
// invoices.push(inTwo);

// console.log(inOne,inTwo);

// invoices.forEach(q=>{
//     console.log(q.client,q.details,q.amount,q.format());
// });


enum dir{
    up='act',down='inact',left='qwer',right='gdjk'
}
console.log(dir);
