const filterDefault = {
  keyword: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined,
}

export default (state = filterDefault, action) => {
  switch( action.type ){
    default:
      return state
  }
}