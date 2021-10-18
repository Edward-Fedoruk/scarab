import styles from './PickRole.module.scss';

export const PickRole = () => (
  <>
    <h1 className={styles.header}>Pick Role</h1>
    <div className={styles.choices}>
      <button className={styles.customerButton} type="button">Customer</button>
      <span className={styles.or}>or</span>
      <button className={styles.employeeButton} type="button">Employee</button>
    </div>
  </>
);
