






let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let extension = [".com",".net",".us",".io",".etc"]
  
  for(let i = 0; i < pronoun.length; i++) {
    for(let a = 0; a < adj.length; a++) {
        for(let n = 0; n < noun.length; n++) {
            for(let e = 0; e < extension.length; e++) {
               //console.log(`${pronoun[i]}${adj[a]}${noun[n].slice(0, 4)}${extension[e]}`) 
               console.log(pronoun[i] + adj[a] + noun[n].slice(0, 4)+ "."+ noun[n].charAt(noun[n].length -2 )+ noun[n].charAt(noun[n].length -1 ) + extension[e])
            }
            
        }
    }
  }
 
  
