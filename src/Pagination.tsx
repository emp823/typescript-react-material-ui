import * as React from "react";
import TablePagination from "@material-ui/core/TablePagination";

const Pagination: React.FC = () => {
  return <TablePagination component="div" count={2} rowsPerPage={5} />;
};

export default Pagination;
