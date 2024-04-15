console.log(`Fizz Buzz Activated `)
console.log(`Part 1: =====================`)
console.log("Loop through all number from 1 -100")

for( b = 0; b <= 100; b++){
    console.log(b)
}

console.log("Fizz divisible by 3=================")
for (let i = 0; i <= 100; i++){
    if (i % 3 === 0){
      console.log(`Fizz:${i}`)
    }}

console.log("Fizz divisible by 5=================")
 for (let a = 0; a <= 100; a++){
    if (a % 5 === 0){
        console.log(`Buzz:${a}`)
    }
 }
 console.log("Fizz Buzz divisible by 3 and 5=================")
 for (let c = 0; c <= 100; c++){
    if (c % 3 ==0 && c % 5 ==0){
        console.log(`Fizz Buzz:${c}`)
    }
 }
 console.log("! Not divisible by 3 and 5=================")
 for (let d = 0; d <= 100; d++){
    if (d % 3 !==0 && d % 5 !==0){
        console.log(`!${d}`)
    }
 }

 console.log("Part 2:Prime Time =====================")
 let start = 5
 let end = 50
 for (n = start; n < end; n++){
    if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0){
        console.log(`Prime ${n}`)
      
    }else {
        console.log(`Not a Prime number`)
    }
 }
 console.log("N = 4:Prime Time =====================")
// a number is prime if it is only divisble by 1 and itself 
n = 14
for ( i = 2; i <= n; i++){
    if (n % i == 0){
        console.log(`Prime ${n}`)
        
    } else if (n % i !== 0) {
        console.log(`Not Prime number`)
    }
}


console.log("N = 4:Prime Time =====================")
