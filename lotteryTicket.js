function bingo(ticket, win){
    return ticket.reduce((a,b)=> a + +b[0].split("").some(el=> el.charCodeAt(0)== b[1]), 0) >= win ? 'Winner!': 'Loser!'
}
