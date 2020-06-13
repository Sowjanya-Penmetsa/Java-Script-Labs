function calVat(Arry)
{ 
    let sum=0,total,vat;
    for(let i=0;i<Arry.length;i++)
        {
            sum=sum+Number(Arry[i]);
            vat=sum*0.2;
            total=sum+vat;
        }
        console.log(sum);
        console.log(vat);
        console.log(total);
        console.log("\n");
} 
var nums=['1.20', '2.60', '3.50'];
calVat(nums);
var nums1=['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];
calVat(nums1);
