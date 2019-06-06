import * as React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

const Pagination: React.FC = () => {
  return (
    <div>
      <TablePagination
        component="div"
        count={2}
        rowsPerPage={5}
        onChangePage={() => null}
        page={1}
      />
    </div>
  );
};

export default Pagination;
