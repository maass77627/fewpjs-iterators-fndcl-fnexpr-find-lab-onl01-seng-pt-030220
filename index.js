const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]


function superbowlWin(record) {

  const winner = record.find((record) => record.result === "W")
    return !!winner ? winner.year : undefined


}
