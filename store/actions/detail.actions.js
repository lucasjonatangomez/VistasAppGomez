export const SELECT_DETAIL = 'SELECT_DETAIL';
export const FILTER_DETAILS = 'FILTER_DETAILS';

export const selectDetail = (detailID) => ({
  type: SELECT_DETAIL,
  detailID,
});

export const filterDetails = (categoryID) => ({
  type: FILTER_DETAILS,
  categoryID,
});