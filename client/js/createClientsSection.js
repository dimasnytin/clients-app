export const createClientsSection = () => {

  // создаем html на страницу
  const section = document.createElement('section');
  const container = document.createElement('div');
  const main = document.createElement('main');
  const h1 = document.createElement('h1');   
  const sortingDisplay = document.createElement('thead');
  const theadTr = document.createElement('tr');
  const sortingDisplayId = document.createElement('td');
  const sortingDisplayName = document.createElement('td');
  const sortingDisplayCreate = document.createElement('td');
  const sortingDisplayEdit = document.createElement('td');
  const sortingDisplayContacts = document.createElement('td');
  const sortingDisplayActions = document.createElement('');
  const sortingDisplaySpan = document.createElement('span');
  const addUserBtm = document.createElement('button');
  const addUserSvgBtm = document.createElement('span');
  const tableWrapper = document.createElement('div');
  const clientsTable = document.createElement('table');
  const tbody = document.createElement('tbody');
  const createSpan = document.createElement('span');
  const edditSpan = document.createElement('span');

  // добавляем стили к html
  section.classList.add('clients');
  tableWrapper.classList.add('clients__wrapper');
  h1.classList.add('clients_heading');
  tbody.classList.add('clients__tbody');
  sortingDisplay.classList.add('clients__display');
  section.classList.add('clients');
  section.classList.add('clients');
  section.classList.add('clients');
  section.classList.add('clients');
  section.classList.add('clients');
  section.classList.add('clients');
}