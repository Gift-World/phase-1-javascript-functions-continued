// code your solution here
function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}
function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`)
}
function wrapAdjective(emphatic="special") {
    return function(data="a hard worker"){
        return(`You are ${emphatic}${data}${emphatic}!`)
    }
}