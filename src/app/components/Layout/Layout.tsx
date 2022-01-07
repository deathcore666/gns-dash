import { Header } from "../Header";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ className, children }: Props) => {
  return (
    <main className={className}>
      <Header />
      <div className={styles.pageContent}>{children}</div>
    </main>
  );
};
