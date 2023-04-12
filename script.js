let answer = parseInt(prompt('Enter the number'));

for (let i = 1;i <= answer;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('BUZZFIZZ');
}   
    else if ( i % 5 === 0){
    console.log('Buzz');
}
    else if (i % 3 === 0) {
    console.log('fizz');
    }
    else{
    console.log(i);
} 
}
