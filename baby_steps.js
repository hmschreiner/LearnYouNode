let args = process.argv.filter((data, index) => index >= 2),
    sum  = args.reduce((curr, prev) => parseInt(prev) + parseInt(curr));

console.log(sum)
