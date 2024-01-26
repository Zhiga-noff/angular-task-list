import filter from 'assets/icons/filter.svg';
import search from 'assets/icons/search.svg';
import edit from 'assets/icons/edit.svg';
import del from 'assets/icons/del.svg';

export const buttonsIcon = [
  {
    name: 'filter',
    url: filter,
    eventClick: 'filter',
  },
  {
    name: 'search',
    url: search,
    eventClick: 'search',
  },
  {
    name: 'edit',
    url: edit,
    eventClick: 'PUT',
  },
  {
    name: 'delete',
    url: del,
    eventClick: 'DELETE',
  },
];
