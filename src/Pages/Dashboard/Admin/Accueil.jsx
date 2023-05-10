import { Tab, Tabs } from "react-materialize";
function AccueilAuteur() {
  return (
    <>
      <Tabs
        style={{ display: "flex", flexDirection: "row" }}
        className="tab-demo z-depth-1"
        options={{
          swipeable: true,
        }}
        scope="tabs-55"
      >
        <Tab
          className="pink"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="Test 1"
        >
          Test 1
        </Tab>
        <Tab
          active
          className="red"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="Test 2"
        >
          Test 2
        </Tab>
        <Tab
          className="green"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="Test"
        >
          Test 3
        </Tab>
      </Tabs>
    </>
  );
}
export default AccueilAuteur;
