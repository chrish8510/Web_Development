function main() {
    // parseInt is converts its first argument to a string, pconverts that string, then returns an integer 
    let distance = parseInt(readLine(), 10);
    // distance in miles as input
    let result = distance/40;
    //output to the console - the time it will take you to cover it in minutes
    let solution = result*60;
    console.log(solution);
}  
  
