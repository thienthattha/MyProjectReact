import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function DefaultLayout({ children }) {
  return(
    <div className="container">
      <Header />
      <Sidebar />
      <div className="content">{ children }</div>
    </div>
  )
};

export default DefaultLayout;