import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const regions = [
  {
    region_id: 1,
    region_name: "Stoke Gifford",
  },
  {
    region_id: 2,
    region_name: "Redland",
  },
  {
    region_id: 3,
    region_name: "Sea Mills",
  },
  {
    region_id: 4,
    region_name: "Westbury",
  },
  {
    region_id: 5,
    region_name: "Clifton",
  },
  {
    region_id: 6,
    region_name: "Horfield",
  },
  {
    region_id: 7,
    region_name: "Old City",
  },
  {
    region_id: 8,
    region_name: "Bishopston",
  },
  {
    region_id: 9,
    region_name: "Clevedon",
  },
  {
    region_id: 10,
    region_name: "Stoke Bishop",
  },
  {
    region_id: 11,
    region_name: "Lockleaze",
  },
  {
    region_id: 12,
    region_name: "Bishopsworth",
  },
  {
    region_id: 13,
    region_name: "Blackwell",
  },
  {
    region_id: 14,
    region_name: "Postbury",
  },
  {
    region_id: 15,
    region_name: "Brislington",
  },
  {
    region_id: 16,
    region_name: "Coombe Dingle",
  },
  {
    region_id: 17,
    region_name: "Brandon",
  },
  {
    region_id: 18,
    region_name: "Broadmead",
  },
  {
    region_id: 19,
    region_name: "Redcliffe",
  },
  {
    region_id: 20,
    region_name: "Kingsdown",
  },
  {
    region_id: 21,
    region_name: "Lewin's Mead",
  },
];

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);
  const [active, setActive] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (firstRender) {
      for (let i = 1; i < 22; i++) {
        newChecked.push(i);
      }
    }
    setFirstRender(false);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  if (firstRender) {
    handleToggle();
  }

  const renderCheckboxLists = () =>
    regions.map((value, index) => (
      <React.Fragment key={index}>
        <div>
          <Checkbox
            onChange={() => handleToggle(value.region_id)}
            type="checkbox"
            //defaultChecked={true} //This should make it ticked by default but doesnt :?
            checked={Checked.indexOf(value.region_id) === -1 ? false : true}
          />

          <span>{value.region_name}</span>
        </div>
      </React.Fragment>
    ));

  return (
    <div className="filter-box">
      <Collapse
        defaultActiveKey={["0"]}
        onChange={() => {
          setActive(!active);
        }}
      >
        <Panel header="Regions" key="1">
          {active && renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
