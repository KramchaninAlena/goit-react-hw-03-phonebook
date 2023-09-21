import css from '../Contact/Contact.module.css'
export  function Contact({contacts, handleDelete}) {
    return (
        <ul className={css.list}>
        {contacts.map(({id, name, number}) => (
		<li className={css.item} key={id}>{name}: {number} 
        <button type="button" onClick={() => handleDelete(id)}>Delete</button ></li>
        ))}
        </ul>
        )
}
