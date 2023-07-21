import React, { ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <div className={styles.contentWrapper}>{children}</div>
);

export default ContentWrapper;
