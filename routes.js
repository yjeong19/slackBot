const express = require('express');
const router = express.Router();
const reply = require('./api');
const data = require('./employee_info.json');

router.post('/', (req,res) => {
 let payload = req.body;
   // Respond to this event with HTTP 200 status
   res.sendStatus(200);
   // console.log(payload);
 //
 if (payload.event.type === "app_mention") {
   //splits input in to array
   let split_message = payload.event.text.split(' ');
      if (checkName(split_message[1])) {
          checkCommand(checkName(split_message[1]), split_message);
      }
    }
    // if(payload.event.type === 'message'){
    //   let split_message = payload.event.text.split(' ');
    //   console.log('message');
    //   if (checkName(split_message[1])) {
    //       checkCommand(checkName(split_message[1]), split_message);
    //   }
    // }
});

//parses user input of name based on message split[1] -- split[0]is userid
//returns name from data if it exists
function checkName (message_name){
  const employees = Object.keys(data);
  let isEmployee;
  const newName = message_name.replace(/[^a-z-A-Z-]/g, '').toLowerCase();
  console.log(newName)
  employees.forEach((name, i) => {
    name === newName || name + 's' === newName ? isEmployee = name : null;
  })
  return isEmployee;
};

//first, last, phone, number, department, email, manager
//number == phone
//returns array of commands that match below
//then calls returns message passing employee and query
function checkCommand(emp, split_message){
  let query = [];
  console.log(split_message)
  split_message.forEach((text, i) => {
    console.log(text.replace(/[^a-z-]/g, ''));
    let str = text.replace(/[^a-z-]/g, '');
    if(str == 'phone' ||
      str == 'number' ||
      str == 'deparment' ||
      str == 'email' ||
      str == 'manager' ||
      str == 'first' ||
      str == 'last'
    ){
      query.push(str);
    };
  });
  console.log('line 69 ', query);
  returnMsg(emp, query)
};

//first, last, phone, number, department, email, manager
//returns message based on input
function returnMsg(emp, query){
  let str;
  const emp_info = data[emp];
  console.log(emp_info);
  query.forEach((q, i) => {
    switch(q){
      case 'last' || 'lastname':
        str = emp_info.last_name ? `${emp}'s last name is: ${emp_info.last_name}` : 'No user info';
        return reply(str)
      case 'first' || 'firstname':
        str = emp_info.real_first_name ? `${emp}'s real first name is: ${emp_info.real_first_name}` : 'No user info';
        return reply(str)
      case 'phone' || 'number':
        str = emp_info.phone_number ? `${emp}'s phone number is: ${emp_info.phone_number}` : 'No user info';
        return reply(str)
      case 'department':
        str = emp_info.department ? `${emp} is in ${emp_info.department} department` : 'No user info';
        return reply(str)
      case 'email':
        str = emp_info.email ? `${emp}'s email: ${emp_info.email}` : 'No user info';
        return reply(str)
      case 'manager':
        str = emp_info.manager ? `${emp_info.manager} is ${emp}'s manager` : 'No user info';
        return reply(str)
    default:
      return null;
    }
  })
}


module.exports = router;
