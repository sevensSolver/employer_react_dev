import styles from './index.module.css';

const TopNav = ({ options, width, marginBottom, tab, handleTabChange }) => {
  return (
    <div
      className={styles.topNav}
      style={{
        width,
        marginBottom: marginBottom ? marginBottom : 30,
      }}
    >
      {options.map((item, index) =>
        item.key === tab.key ? (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                paddingBottom: 6,
                cursor: 'pointer',
                color: '#3ab44d',
              }}
              className="activeTopNavLi"
              key={item.title}
            >
              {item.title}
            </div>
          </div>
        ) : (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              onClick={() => handleTabChange(item)}
              style={{ paddingBottom: 10, cursor: 'pointer', color: '#404040' }}
              className="topNav"
              key={item}
            >
              {item.title}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TopNav;
