const makeChange = (c) => {
  // your name here

 const change = {
        q: 0, 
        d: 0, 
        n: 0,
        p: 0  
    };

   
    const coinValues = {
        q: 0.25, 
        d: 0.10, 
        n: 0.5,  
        p: 0.01   
    };

    
    change.q = Math.floor(c / coinValues.q);
    c %= coinValues.q;

	 change.d= math.floor(c/coinValues.d)
	c%=coinValues.d

	change.n= math.floor(c/coinValues.n)
	c%=coinValues.n

	change.p=c

	return change
}



// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
