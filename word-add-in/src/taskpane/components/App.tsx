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
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div id="message">test</div>
    </div>
  );
};

export default App;
