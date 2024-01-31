import React from 'react';

function Button({ onClick, styles }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className={styles.Button} onClick={onClick} type="button">
        Load More
      </button>
    </div>
  );
}

export default Button;
