import { Link } from 'react-router';
import cn from 'classnames';
import styles from './LinkCallForm.module.scss';

interface LinkCallFormProps {
  className?: string;
}

export function LinkCallForm({ className }: Readonly<LinkCallFormProps>) {
  return (
    <Link className={cn(styles.linkCallForm, className)} to="#callForm">
      Обратный звонок
    </Link>
  );
}
