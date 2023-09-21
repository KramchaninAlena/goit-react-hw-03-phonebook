import css from '../Filter/Filter.module.css'
export  function Filter({filterQuery}) {
    const handleChange = ({target:{value}}) => {
      filterQuery(value)
      };
  return (
    <div className={css.filter}>
    <label htmlFor="InputFilter" className={css.filterLabel}>Find contacts by name</label>
    <input onChange={handleChange}
      type="text"
      name="filter"
      className={css.filterInput}
      />
      </div>
  )
}
