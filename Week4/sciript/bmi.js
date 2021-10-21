
    var heightLucas=1.69;
    var massLucas=78;
    var LucasBMI = massLucas/(heightLucas**2);
    console.log(LucasBMI);

    let heightJohns=1.95;
    let massJohns=92;
    let JohnsBMI= massJohns/(heightJohns**2);
    console.log(JohnsBMI);

    lucasHigherBMI=heightLucas>heightJohns;
    console.log(lucasHigherBMI);

    console.log('Lucas BMI is' + LucasBMI + 'Johns BMI is'+ JohnsBMI + 'John BMI is higher than Lucas BMI is' + (JohnsBMI>LucasBMI));
