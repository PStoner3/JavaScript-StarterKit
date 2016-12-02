import './index.css'
import { getUsers } from './api/userApi'
import { deleteUser } from './api/userApi'

getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only returns as "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      const row = element.parentNode.parentNode;

      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      row.parentNode.removeChild(row);
    }
  })
});
