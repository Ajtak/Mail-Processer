    const emailBody = inputs.emailBody;
    const changeRegex = /se\s(snížil|zvýšil)\so\sčástku/; 

    const amountRegex = /o\sčástku\s([\d,\s ]+)\sCZK/;
    const balanceRegex = /\sje\s([\d,\s ]+)\sCZK/;


    const changeMatch = emailBody.match(changeRegex); 
    const amountMatch = emailBody.match(amountRegex); 
    const amount = amountMatch ? amountMatch[1].replace(',', '.') : null; 
    const balanceMatch = emailBody.match(balanceRegex); 
    const balance = balanceMatch ? balanceMatch[1].replace(',', '.') : null; 
    

    const amountF = amount.replace(' ', '');
    const balanceRound = parseInt(balance.replace(' ','')) | 0;
    
    let msg = `Zůstatek se ${changeMatch[1]} o ${amountF},- Kč. Aktuální zůstatek je ${balanceRound},- Kč.`; 
    
