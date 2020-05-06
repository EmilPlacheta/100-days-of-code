
const whatJudySpent = 60
const whatLydiaSpent = 25
const whatEmilSpent = 10
const total = whatJudySpent + whatLydiaSpent + whatEmilSpent
const share = total / 3

console.log(`Total amount spent: ${total}`)
console.log(`Equal share is ${share}`)



//how much to give back to judy
const toJudy = function(whatJudySpent, share) {
  let result =[]
  if(whatJudySpent > share) {
    result.push( {
      message: `Judy should get ${(whatJudySpent - share)} back. £${share - whatLydiaSpent} from Lydia and £${share - whatEmilSpent} from Emil`,
      amount: whatJudySpent - share 
    })
  } else {
    result.push( {
      message: `Judy owes ${(share - whatJudySpent) } to whoever paid most `,
      amount: share - whatJudySpent
    } )
  }
  console.log(result[0].message)
  return result
}

//how much to give back to lydia
const toLydia = function(whatLydiaSpent, share) {
  let result =[]

  if(whatLydiaSpent > share) {
    result.push( {
      message: `Lydia should get £${(whatLydiaSpent - share)} back. £${share - whatJudySpent} from Judy and £${share - whatEmilSpent} from Emil`,
      amount: whatLydiaSpent - share 
    })
  } else {
    result.push( {
      message: `Lydia owes ${(share - whatLydiaSpent) } to whoever paid most `,
      amount: share - whatLydiaSpent
    } )
  }
  console.log(result[0].message)
  return result
}


const toEmil = function(whatEmilSpent, share) {
  let result =[]

  if(whatEmilSpent > share) {
    result.push( {
      message: `Emil should get £${(whatEmilSpent - share)} back. £${share - whatJudySpent} from Judy and £${share - whatLydiaSpent} from Lydia`,
      amount: whatEmilSpent - share 
    })
  } else {
    result.push( {
      message: `Emil owes ${(share - whatEmilSpent) } to whoever paid most for the shopping`,
      amount: share - whatEmilSpent
    } )
  }
  console.log(result[0].message)
  return result
}


const whoOwesWho = function(whatJudySpent, whatEmilSpent, whatLydiaSpent) {
  if(whatJudySpent > whatEmilSpent && whatJudySpent > whatLydiaSpent) {
    toJudy(whatJudySpent, share)
  } else if(whatEmilSpent > whatJudySpent && whatEmilSpent > whatLydiaSpent) {
    toEmil(whatEmilSpent, share)
  } else if (whatLydiaSpent > whatJudySpent && whatLydiaSpent > whatEmilSpent) {
    toLydia(whatLydiaSpent,share)
  } 
}

whoOwesWho(whatJudySpent, whatEmilSpent, whatLydiaSpent)