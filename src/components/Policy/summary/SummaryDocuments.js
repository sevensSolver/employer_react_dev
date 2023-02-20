import styles from '../index.module.css';
import documentText from '../../../img/document-text.png';

const SummaryDocuments = () => {
  const document = [
    { id: 1, name: 'Welcome kit' },
    { id: 2, name: 'Facility List' },
    { id: 3, name: 'Insurance Policy' },
    { id: 4, name: 'Benefits Schedule' },
  ];
  return (
    <div className={styles.summaryBox}>
      <p className={styles.summaryBoxTitle}>Key Policy Documents</p>
      <div className={styles.iconBackground}>
        <img src={documentText} alt="avatar" style={{ height: 23 }} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginTop: 15,
        }}
      >
        {document?.map((item, id) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }} key={id}>
            <div className={styles.iconBackgroundGreen}>{item.id}</div>
            <p style={{ marginBottom: 0, fontSize: 12 }}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryDocuments;
