import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <footer>
   Show:
   {" "}
   <FilterLink filter="all">
    All
   </FilterLink>
   {", "}
   <FilterLink filter="active">
    Active
   </FilterLink>
   {", "}
   <FilterLink filter="completed">
    Completed
   </FilterLink>
  </footer>
)

export default Footer;
