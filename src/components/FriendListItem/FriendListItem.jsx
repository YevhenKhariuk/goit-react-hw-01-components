import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>{name}</span>
      <img className={css.avatar} src={avatar} alt={'User avatar'} width={48} />
      <p className={css.name}>{isOnline}</p>
    </li>
  );
};
