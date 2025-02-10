import "../styles.css";

const HeaderComponent = () => {
  const dateStr = new Date().toDateString();
  
    return (
        <>
        <div id="header">
            login<span style={{ paddingLeft: "4px" }}>| {dateStr}</span>
        </div>
        </>
    );
  /*   
  return <div id="header">login</div>;
  */
};

export default HeaderComponent;
