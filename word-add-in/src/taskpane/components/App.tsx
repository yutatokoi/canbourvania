/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import "../taskpane";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: "1rem",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  loading: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectionContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    padding: "0 1rem",
    borderRadius: "0.5rem",
  },
  selectionLabel: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  selectionText: {
    fontSize: "1rem",
  },
  answerContainer: {
    border: "1px solid #ccc",
    padding: "0 1rem",
    borderRadius: "0.5rem",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div id="content">
        <div className={styles.selectionContainer}>
          <p className={styles.selectionLabel}>選択範囲：</p>
          <p className={styles.selectionText} id="selection" />
        </div>
        <div className={styles.loading}>
          <img src="assets/loading.gif" alt="Loading..." id="loading" style={{ display: "none" }} />
        </div>
        <div className={styles.answerContainer} id="answer" />
      </div>
    </div>
  );
};

export default App;
