import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messaageAtom, networkAtom, notificationAtom } from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    </>
  );
}

function Navbar() {
  const jobCount = useRecoilValue(jobAtom);
  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messaageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  return (
    <div>
      <button>home </button>
      <button>jobs {jobCount}</button>
      <button>network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>notification ({notificationCount})</button>
      <button>message({messageCount})</button>
      <button>me</button>
    </div>
  );
}

export default App;
